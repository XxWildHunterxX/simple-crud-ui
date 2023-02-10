import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormUtilService } from 'src/app/services/form-util.service';
import { ToastrService } from 'ngx-toastr';
import { UserApiService } from '../../api/user-api.service';
import CountryCode from '../../../assets/countrycode/CountryCodes.json';
import { DatePipe } from '@angular/common';

interface CountryCodeClass {
  name: string;
  dial_code: string;
  code: string;
}

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})

export class UserAddComponent implements OnInit {

  form: FormGroup;
  countrycode: CountryCodeClass[] = CountryCode;
  defaultCountryCodeValue = "+60";

  constructor(private api: UserApiService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private formUtil: FormUtilService,
    private activatedRoute: ActivatedRoute) {

    this.form = this.formBuilder.group({
      username: '',
      name: '',
      phoneNumber: '',
      countryCode: '',
      birthDate: '',
    });

  }

  ngOnInit() {

  }

  submit(formVal: any) {
    console.log(formVal);
    this.api.post(formVal).subscribe(
      (resp: any) => {
        this.toastr.success("Add user success");
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

