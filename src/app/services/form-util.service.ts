import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FormUtilService {
  constructor() {}

  transformToSingleValidationMessage(errors: any) {
    var message = '';
    if(errors.length>0){
      message += errors[0].errorMessages[0];
    }
    return message;
  }
}
