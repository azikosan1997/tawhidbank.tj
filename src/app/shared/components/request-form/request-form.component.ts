import {Component, Input} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {DefaultResponseType} from "../../../../types/defaultResponse.type";
import {HttpErrorResponse} from "@angular/common/http";
import {RequestsService} from "../../../services/requests.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss']
})
export class RequestFormComponent {
  @Input() requestType!: any;
  @Input() mainForm!: boolean;
  @Input() appId!: number;
  @Input() productId!: number;
  cityId: string | null | number = 73;

  constructor(private formBuilder: FormBuilder,
              private requestsService: RequestsService,
              private _snackbar: MatSnackBar,) {
  }


  formData = this.formBuilder.group({
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
    email: [
      '',
      [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]
    ],
    company: ['', Validators.required],
    city: ['', Validators.required],
  });

  onCityIdChange(cityId: string | null | number) {
    this.cityId = cityId;
  }

  sendRequest() {
    if (this.appId && this.cityId) {
      this.requestsService.businessAccountRequest(
        this.appId,
        this.formData.value.fullName!,
        this.formData.value.mobileNumber!,
        this.cityId, this.formData.value.email!,
        this.productId,
        this.formData.value.company!,)
        .subscribe({
          next: (data: DefaultResponseType) => {
            this._snackbar.open("Дархост фиристода шуд!", undefined, {
              duration: 2000,
              panelClass: ['snack-bar-success'],
            })
            this.formData.reset();
          },
          error: (errorResponse: HttpErrorResponse) => {
            if (errorResponse.error && errorResponse.error.errorMessage) {
              this._snackbar.open(errorResponse.error.errorMessage, undefined, {
                duration: 2000,
                panelClass: ['snack-bar-error'],
              })
              this.formData.reset();
            } else {
              this._snackbar.open("Request error", undefined, {
                duration: 2000,
                panelClass: ['snack-bar-error'],
              })
              this.formData.reset();
            }
          },
        })
    }
  }
}
