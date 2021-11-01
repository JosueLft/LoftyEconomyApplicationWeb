import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Record } from '../../models/record.model';
import { Ordenacao } from '../../utils/ordenation.enum';
import { environment as env } from 'src/environments/environment';
import { User } from 'src/app/models/user.models';
import { SocialUser } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  socialUser!: SocialUser;
  isLoggedin: boolean = false;  
  user: User = new User("", "", "", []);

  constructor(private http: HttpClient) { }

  listarTodos(ordem = Ordenacao.DESC): Observable<any> {
    this.isLogged();
    return this.http.post(
      env.apiUrlBase + "records",
      this.user
    );
  }

  adicionar(user: User): Observable<any> {
    return this.http.post(
      env.apiUrlBase + "records/insert",
      user
    );
  }

  listarId(id: number): Record {
    /*const record = this.listarTodos().find(record => record.id === id);
    if(!record) {
      return new Record(0, "", "", 0, 0);
    }*/
    return new Record("", "", "", 0, 0);
  }

  editar(record: Record) {
    /*const records = this.listarTodos();
    const recordIndex = records.findIndex(r => r.id === record.id);
    records[recordIndex].description = record.description;
    records[recordIndex].date = record.date;
    records[recordIndex].value = record.value;
    records[recordIndex].recordCategory = record.recordCategory;
    console.log(records);
    this.storage(records);*/
  }

  remover(recordId: string) {
    /*const records = this.listarTodos().filter(record => record.id !== recordId);
    this.storage(records);*/
  }

  private storage(records: Record[]) {
    localStorage["records"] = JSON.stringify(records);
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
}