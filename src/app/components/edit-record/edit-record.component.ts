import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Record } from 'src/app/models/record.model';
import { RecordService } from 'src/app/services/record.service';

@Component({
  selector: 'app-edit-record',
  templateUrl: './edit-record.component.html',
  styleUrls: ['./edit-record.component.css']
})
export class EditRecordComponent implements OnInit {

  record: Record = new Record(0, "", "", 0, 0);

  erro: boolean = false;
  processando: boolean = false;

  form: FormGroup = this.fb.group({
    description: ["", [Validators.required, Validators.minLength(5)]],
    date: ["", [Validators.required, Validators.maxLength(10)]],
    value: ["", [Validators.required]],
    recordCategory: ["Gastos", [Validators.required]]
  });

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private recordService: RecordService) { }

  ngOnInit(): void {
    const recordId = parseInt(this.route.snapshot.params["id"]);
    this.record = this.recordService.listarId(recordId);
    this.loadRecord();
  }

  editar() {
    if(this.form.invalid) {
      return;
    }
    this.record.description = this.form.value.description;
    this.record.date = this.form.value.date;
    this.record.value = this.form.value.value;
    this.record.recordCategory = this.form.value.recordCategory;
    this.recordService.editar(this.record);
  }

  loadRecord() {
    this.form.controls["description"].setValue(this.record.description);
    this.form.controls["date"].setValue(this.record.date);
    this.form.controls["value"].setValue(this.record.value);
    this.form.controls["recordCategory"].setValue(this.record.recordCategory);
  }
}