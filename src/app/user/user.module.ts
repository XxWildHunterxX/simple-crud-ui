import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { Daterangepicker } from 'ng2-daterangepicker';
import { DataTablesModule } from 'angular-datatables';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule,
    Daterangepicker,
    DataTablesModule
  ],
  declarations: [
    UserAddComponent,
    UserEditComponent,
    UserListComponent
   ]
})
export class UserModule { }
