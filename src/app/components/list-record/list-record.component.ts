import { Component, OnInit } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { Record } from 'src/app/models/record.model';
import { User } from 'src/app/models/user.models';
import { RecordService } from 'src/app/services/record/record.service';
import { Ordenacao } from 'src/app/utils/ordenation.enum';

@Component({
  selector: 'app-list-record',
  templateUrl: './list-record.component.html',
  styleUrls: ['./list-record.component.css']
})
export class ListRecordComponent implements OnInit {

  records: Record[] = [];
  record: Record = new Record("", "", "", 0, 0);
  ordem: Ordenacao = Ordenacao.DESC;

  spendings = 0;
  gains = 0;
  remaining = 0;

  constructor(private recordService: RecordService) {}

  ngOnInit(): void {
    this.loadRecords();
    this.budgets();
  }

  removerId(record: Record) {
    this.record = record;
  }

  remover() {
    this.recordService.remover(this.record.id);
    this.loadRecords();
    this.budgets();
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
      if(record.recordCategory == 0) {
        this.spendings += record.value;
      } else if(record.recordCategory == 1) {
        this.gains += record.value;
      }
    });
    this.remaining = this.gains - this.spendings;
  }

  private loadRecords() {
    this.recordService.listarTodos(this.ordem)
      .subscribe(
        dados => {
          this.records = dados;
          console.log(this.records);
        }
      );
  }

  category(record: Record) {
    if (record.recordCategory == 1) {
      return "Gastos"
    } else {
      return "Ganhos"
    }
  }
}
