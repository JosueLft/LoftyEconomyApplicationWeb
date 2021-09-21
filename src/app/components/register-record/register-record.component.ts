import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Record } from 'src/app/models/record.model';
import { RecordService } from 'src/app/services/record.service';

@Component({
  selector: 'app-register-record',
  templateUrl: './register-record.component.html',
  styleUrls: ['./register-record.component.css']
})
export class RegisterRecordComponent implements OnInit {

  erro: boolean = false;
  processando: boolean = false;

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
    let record: Record = this.form.value;
    let date = this.form.controls.date.value;
    date = date.substr(0, 2) + "-" + date.substr(2, 2) + "-" + date.substr(4);
    record.date = date;
    this.recordService.adicionar(record);
    this.form.reset();
  }

}