import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditRecordComponent } from './components/edit-record/edit-record.component';
import { ListRecordComponent } from './components/list-record/list-record.component';
import { RegisterRecordComponent } from './components/register-record/register-record.component';

const routes: Routes = [
  { path: "", component: ListRecordComponent },
  { path: "register", component: RegisterRecordComponent },
  { path: "edit/:id", component: EditRecordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
