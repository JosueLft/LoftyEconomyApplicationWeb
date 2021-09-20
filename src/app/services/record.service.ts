import { Injectable } from '@angular/core';
import { Record } from '../models/record.model';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  records = [
    new Record(new Date().getTime(), "L1", "16-09-2021", 123.55, 1),
    new Record(new Date().getTime(), "L1", "16-09-2021", 323.55, 1),
    new Record(new Date().getTime(), "L1", "16-09-2021", 423.55, 2),
    new Record(new Date().getTime(), "L1", "16-09-2021", 223, 2)
  ];

  constructor() { }

  listarTodos(): Record[] {
    return this.records;
  }

  adicionar(record: Record) {
    record.id = new Date().getTime();
    this.records.push(record);
  }
}