import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormUtilService } from 'src/app/services/form-util.service';
import { ToastrService } from 'ngx-toastr';
import { UserApiService } from '../../api/user-api.service';
import CountryCode from '../../../assets/countrycode/CountryCodes.json';
import { DatePipe } from '@angular/common'

interface CountryCodeClass {
  name: string;
  dial_code: string;
  code: string;
}

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  id: number = 0;
  form: FormGroup;
  roleList: any;
  countrycode: CountryCodeClass[] = CountryCode;
  defaultCountryCodeValue = "+60";

  constructor(private api: UserApiService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private formUtil: FormUtilService,
    private activatedRoute: ActivatedRoute) {
    this.form = this.formBuilder.group({
      id: 0,
      username: '',
      name: '',
      phoneNumber: '',
      countryCode: '',
      birthDate: '',
    });

  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;

    this.api.get(this.id).subscribe((resp: any) => {
      var datePipe = new DatePipe("en-US");
      resp.birthDate = datePipe.transform(resp.birthDate, 'yyyy-MM-dd');

      this.form.reset(resp);
    });


  }

  submit(formVal: any) {

    this.api.put(formVal).subscribe(
      (resp: any) => {
        this.toastr.success("Edit user success");
        this.router.navigate(['/admin/user/list']);
      },
      (errResp: any) => {
        if (errResp.status === 400) {
          var errorMsg = this.formUtil.transformToSingleValidationMessage(errResp.error);
          this.toastr.error(errorMsg);
        } else {
          this.toastr.error('Internal error, please contact support');
          console.error('There was an error!', errResp);
        }
      }
    );
  }

}
