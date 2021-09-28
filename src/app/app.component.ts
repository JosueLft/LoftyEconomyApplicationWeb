import { Component } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { User } from './models/user.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  socialUser!: SocialUser;
  isLoggedin: boolean = false;  
  user: User = new User("", "", "", []);
  
  constructor(private socialAuthService: SocialAuthService) {}

  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.user.uid = this.socialUser.idToken;
      this.user.profilephoto = this.socialUser.photoUrl;
      this.user.name = this.socialUser.firstName;
      this.saveUser(this.user);
    });
    this.isLogged();
  }

  saveUser(user: User) {
    this.storage(user);
    this.isLogged();
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  isLogged() {
    const userData = JSON.parse(localStorage["user"] || "[]");
    if(userData.uid.length > 0){
      this.user.uid = userData.uid;
      this.user.name = userData.name;
      this.user.profilephoto = userData.profilephoto;
      this.isLoggedin = true 
    } else {
      this.isLoggedin = false;
    }
  }

  logOut(): void {
    this.socialAuthService.signOut();
    let user: User = new User("", "", "", []);
    this.storage(user);
    this.isLogged();
  }

  private storage(user: User) {
    localStorage["user"] = JSON.stringify(user);
  }
}