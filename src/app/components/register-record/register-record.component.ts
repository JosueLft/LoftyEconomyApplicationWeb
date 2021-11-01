import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Record } from 'src/app/models/record.model';
import { User } from 'src/app/models/user.models';
import { RecordService } from 'src/app/services/record/record.service';

@Component({
  selector: 'app-register-record',
  templateUrl: './register-record.component.html',
  styleUrls: ['./register-record.component.css']
})
export class RegisterRecordComponent implements OnInit {

  erro: boolean = false;
  processando: boolean = false;
  user: User = new User("", "", "", []);

  form: FormGroup = this.fb.group({
    description: ["", [Validators.required, Validators.minLength(5)]],
    date: ["", [Validators.required, Validators.minLength(8)]],
    value: ["", [Validators.required]],
    recordCategory: ["1", [Validators.required]]
  });

  constructor(private fb: FormBuilder,
              private recordService: RecordService) {}

  ngOnInit(): void {}

  cadastrar() {
    if (this.form.invalid) {
      return;
    }
    const userData = JSON.parse(localStorage["user"] || "[]");
    let record: Record = this.form.value;
    record.date = this.dateFormat(this.form.controls.date.value);
    this.user = userData;
    this.user.records.push(record);
    this.recordService.adicionar(this.user).subscribe(
      user => alert(user.id),
      () => alert("Erro cadastrando lançamento!")
    );
    this.form.reset();
  }

  dateFormat(date: string) {
    date = date.substr(0, 2) + "-" + date.substr(2, 2) + "-" + date.substr(4);
    return date;
  }
}