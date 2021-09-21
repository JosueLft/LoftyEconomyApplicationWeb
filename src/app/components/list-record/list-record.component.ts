import { Component, OnInit } from '@angular/core';
import { Record } from 'src/app/models/record.model';
import { RecordService } from 'src/app/services/record.service';
import { Ordenacao } from 'src/app/utils/ordenation.enum';

@Component({
  selector: 'app-list-record',
  templateUrl: './list-record.component.html',
  styleUrls: ['./list-record.component.css']
})
export class ListRecordComponent implements OnInit {

  records: Record[] = [];
  record: Record = new Record(0, "", "", 0, 0);
  ordem: Ordenacao = Ordenacao.DESC;

  spendings = 0;
  gains = 0;
  remaining = 0;

  constructor(private recordService: RecordService) {}

  ngOnInit(): void {
    this.loadRecords();
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
    this.loadRecords();
  }

  ascendente() {
    return this.ordem === Ordenacao.DESC;
  }

  ordernar() {
    if(this.ordem === Ordenacao.ASC) {
      this.ordem = Ordenacao.DESC;
    } else {
      this.ordem = Ordenacao.ASC;
    }
    this.loadRecords();
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

  private loadRecords() {
    this.records = this.recordService.listarTodos(this.ordem);
  }
}
