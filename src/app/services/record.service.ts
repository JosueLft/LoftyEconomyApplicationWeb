import { Injectable } from '@angular/core';
import { Record } from '../models/record.model';
import { Ordenacao } from '../utils/ordenation.enum';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor() { }

  listarTodos(ordem = Ordenacao.DESC): Record[] {
    const records = JSON.parse(localStorage["records"] || "[]");
    if(ordem === Ordenacao.ASC) {
      records.sort((r1: Record, r2: Record) => {
        return r1.date.localeCompare(r2.date);
      });
    } else {
      records.sort((r1: Record, r2: Record) => {
        return r2.date.localeCompare(r1.date);
      });
    }
    return records;
  }

  adicionar(record: Record) {
    record.id = new Date().getTime();
    const records = this.listarTodos();
    records.push(record);
    this.storage(records);
  }

  listarId(id: number): Record {
    const record = this.listarTodos().find(record => record.id === id);
    if(!record) {
      return new Record(0, "", "", 0, 0);
    }
    return record;
  }

  editar(record: Record) {
    const records = this.listarTodos();
    const recordIndex = records.findIndex(r => r.id === record.id);
    records[recordIndex].description = record.description;
    records[recordIndex].date = record.date;
    records[recordIndex].value = record.value;
    records[recordIndex].recordCategory = record.recordCategory;
    console.log(records);
    this.storage(records);
  }

  remover(recordId: number) {
    const records = this.listarTodos().filter(record => record.id !== recordId);
    this.storage(records);
  }

  private storage(records: Record[]) {
    localStorage["records"] = JSON.stringify(records);
  }
}