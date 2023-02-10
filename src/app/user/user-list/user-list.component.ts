import { DataTableDirective } from 'angular-datatables';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { GlobalConfig } from 'src/app/shared/global.config';
import { ToastrService } from 'ngx-toastr';
import { FormUtilService } from 'src/app/services/form-util.service';
import Swal from 'sweetalert2';
import { UserApiService } from '../../api/user-api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  data: any[] = [];

  @ViewChild(DataTableDirective, { static: false })
  private dtElement!: DataTableDirective;

  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private api: UserApiService,
    private toastr: ToastrService,
    private formUtil: FormUtilService,
    globalConfig: GlobalConfig) {
    this.dtOptions = globalConfig.getDatatableOptions();
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
    this.query();
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }

  query() {
    this.api.query({}).subscribe((resp: any) => {
      console.log(resp.data);
      this.data = resp.data;
      this.rerender();
    })
  }

  async deactivate(id: any) {
    var result = await Swal.fire({
      title: 'Deactivate this user ?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
    })

    if (result.isConfirmed) {
      this.api.deactivate({ id: id }).subscribe((resp) => {
        this.toastr.success('user deactivate successful');
        this.query();
      }, (errResp: any) => {
        if (errResp.status === 400) {
          var errorMsg = this.formUtil.transformToSingleValidationMessage(errResp.error);
          this.toastr.error(errorMsg);
        } else {
          this.toastr.error('Internal error, please contact support.');
          console.error('There was an error!', errResp);
        }
      });
    }
  }

  async reactivate(id: any) {
    var result = await Swal.fire({
      title: 'Reactivate this user ?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
    })

    if (result.isConfirmed) {
      this.api.recover({ id: id }).subscribe((resp) => {
        this.toastr.success('user reactivate successful');
        this.query();
      }, (errResp: any) => {
        if (errResp.status === 400) {
          var errorMsg = this.formUtil.transformToSingleValidationMessage(errResp.error);
          this.toastr.error(errorMsg);
        } else {
          this.toastr.error('Internal error, please contact support.');
          console.error('There was an error!', errResp);
        }
      });
    }
  }


}
