import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  firebase = require('firebase');
  firebaseui = require('firebaseui');
  // Initialize the FirebaseUI Widget using Firebase.
  ui = new this.firebaseui.auth.AuthUI(this.firebase.auth());

  constructor() { }

  ngOnInit(): void {
  }

  signInOptions() {
    this.ui.start('#firebaseui-auth-container', {
      signInOptions: [
        this.firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        this.firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        this.firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        this.firebase.auth.GithubAuthProvider.PROVIDER_ID
      ],
    });
  }

}
