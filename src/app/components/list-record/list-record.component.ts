import { Component, OnInit } from '@angular/core';
import { Record } from 'src/app/models/record.model';
import { RecordService } from 'src/app/services/record.service';

@Component({
  selector: 'app-list-record',
  templateUrl: './list-record.component.html',
  styleUrls: ['./list-record.component.css']
})
export class ListRecordComponent implements OnInit {

  records: Record[] = [];
  record: Record = new Record(0, "", "", 0, 0);

  spendings = 0;
  gains = 0;
  remaining = 0;

  constructor(private recordService: RecordService) {}

  ngOnInit(): void {
    this.listarTodos();
    this.budgets();
  }

  listarTodos() {
    this.records = this.recordService.listarTodos();
    this.budgets();
  }

  removerId(record: Record) {
    this.record = record;
  }

  remover() {
    this.recordService.remover(this.record.id);
    this.listarTodos();
  }

  budgets() {
    this.spendings = 0;
    this.gains = 0;
    this.remaining = 0;
    this.records.forEach(record => {
      if(record.recordCategory == 1) {
        this.spendings += record.value;
      } else if(record.recordCategory == 2) {
        this.gains += record.value;
      }
    });
    this.remaining = this.gains - this.spendings;
  }
}
