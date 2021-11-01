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
import { HttpClientModule } from "@angular/common/http";

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';

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
    ReactiveFormsModule,
    SocialLoginModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '877224035411-hbkg74ikqc4n4nutogqslaj5p2a9ik76.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
