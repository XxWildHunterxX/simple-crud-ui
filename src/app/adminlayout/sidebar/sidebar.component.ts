import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[] = [];
  public accessibleMenuItems: any[] = [];
  user: any = {};
  constructor(private translate: TranslateService) {

    this.menuItems = [
      { access: 'user.list', path: '/admin/user/list', title: 'User List', icon: 'fa-users' },

    ];

    this.accessibleMenuItems = this.menuItems;

  }

  ngOnInit() {

  }


}
