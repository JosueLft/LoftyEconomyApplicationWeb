import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterRecordComponent } from './components/register-record/register-record.component';
import { ListRecordComponent } from './components/list-record/list-record.component';
import { EditRecordComponent } from './components/edit-record/edit-record.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalConfirmationComponent } from './components/modal-confirmation/modal-confirmation.component';
import { MascaraDirective } from './directives/mascara.directive';

@NgModule({
  declarations: [
    AppComponent,
    RegisterRecordComponent,
    ListRecordComponent,
    EditRecordComponent,
    ModalConfirmationComponent,
    MascaraDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
