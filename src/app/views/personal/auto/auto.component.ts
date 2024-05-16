import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {RequestsService} from "../../../services/requests.service";
import {DefaultResponseType} from "../../../../types/defaultResponse.type";
import {HttpErrorResponse} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.scss']
})
export class AutoComponent {
  appId: number = 1;
  productId: number = 4;

  constructor(private formBuilder: FormBuilder,
              private requestService: RequestsService,
              private _snackbar: MatSnackBar){
  }

  autoFinancingForm = this.formBuilder.group({
    fullName: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[A-Za-zА-Яа-я]+(?: [A-Za-zА-Яа-я]+)*$/),
      ],
    ],
    mobileNumber: [
      '+992',
      [
        Validators.required,
        Validators.pattern(/^\+992\d{3}\d{3}\d{3}$/),
      ],
    ],
  });

  sendAutoFinancingRequest() {
    if (this.autoFinancingForm.valid){
      this.requestService.autoRequest(this.appId, this.autoFinancingForm.value.fullName!, this.autoFinancingForm.value.mobileNumber!, this.productId )
        .subscribe({
          next: (data : DefaultResponseType) => {
            this._snackbar.open("Дархост фиристода шуд!", undefined, {
              duration: 2000,
              panelClass: ['snack-bar-success'],
            })
            this.autoFinancingForm.reset();
          },
          error: (errorResponse: HttpErrorResponse) => {
            if (errorResponse.error && errorResponse.error.errorMessage) {
              this._snackbar.open(errorResponse.error.errorMessage, undefined, {
                duration: 2000,
                panelClass: ['snack-bar-error'],
              })
              this.autoFinancingForm.reset();
            } else {
              this._snackbar.open("Request error", undefined, {
                duration: 2000,
                panelClass: ['snack-bar-error'],
              })
              this.autoFinancingForm.reset();
            }
          }
        })

    }
  }
}
