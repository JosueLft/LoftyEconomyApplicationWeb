import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'modal-confirmation',
  templateUrl: './modal-confirmation.component.html',
  styleUrls: ['./modal-confirmation.component.css']
})
export class ModalConfirmationComponent implements OnInit {

  @Input() id: string = "";
  @Input() titulo: string = "";
  @Input() operacao: string = "";
  @Input() conteudo: string = "";
  @Output() confirmar: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  executarOperacao() {
    this.confirmar.emit();
  }

}
