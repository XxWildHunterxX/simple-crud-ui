import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';   
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'add',
        data: {
          title: 'Add User'
        },
        component: UserAddComponent
      },
      {
        path: 'list',
        data: {
          title: 'User List'
        },
        component: UserListComponent
      },
      {
        path: 'edit/:id',
        data: {
          title: 'Edit User'
        },
        component: UserEditComponent
      } 
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
