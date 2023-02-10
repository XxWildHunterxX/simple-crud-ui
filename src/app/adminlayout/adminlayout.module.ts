import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminlayoutComponent } from './adminlayout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminLayoutRoutingModule } from './adminlayout-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AdminLayoutRoutingModule
  ],
  declarations: [
    AdminlayoutComponent,
    SidebarComponent,
    NavbarComponent,
  ],
})
export class AdminlayoutModule { }
