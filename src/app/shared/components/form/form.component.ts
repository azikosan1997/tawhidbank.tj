import {Component, Input} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {TranslateService} from "@ngx-translate/core";
import {RequestsService} from "../../../services/requests.service";
import {DefaultResponseType} from "../../../../types/defaultResponse.type";
import {HttpErrorResponse} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Input() requestType!: any;
  @Input() mainForm!: boolean;
  @Input() formName!: string;
  @Input() appId!: number;
  @Input() prodId!: number;
  cityId: string | null | number = 73;

  constructor(private formBuilder: FormBuilder,
              private translate: TranslateService,
              private requestsService: RequestsService,
              private _snackbar: MatSnackBar,) {

  }

  onCityIdChange(cityId: string | null | number) {
    this.cityId = cityId;
  }

  translateText(key: string): string {
    return this.translate.instant(key);
  }

  cardRequestData = this.formBuilder.group({
    fullName: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[A-Za-zА-Яа-я]+(?: [A-Za-zА-Яа-я]+)*$/),
      ],
    ],
    mobileNumber: [
      '',
      [
        Validators.required,
        Validators.pattern(/^\+\d{12}$/),
      ],
    ],
    email: [
      '',
      [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]
    ],
    cardType: ['', Validators.required]
  });

  onFormSubmit(): void {
    if (this.appId === 2) {
      if (this.appId && this.cityId) {
        this.requestsService.depositRequest(this.appId,
          this.cardRequestData.value.fullName!,
          this.cardRequestData.value.mobileNumber!,
          this.cityId, this.cardRequestData.value.email!,
          this.prodId)
          .subscribe({
            next: (data: DefaultResponseType) => {
              this._snackbar.open("Дархост фиристода шуд!", undefined, {
                duration: 2000,
                panelClass: ['snack-bar-success'],
              })
              this.cardRequestData.reset();
            },
            error: (errorResponse: HttpErrorResponse) => {
              if (errorResponse.error && errorResponse.error.errorMessage) {
                this._snackbar.open(errorResponse.error.errorMessage, undefined, {
                  duration: 2000,
                  panelClass: ['snack-bar-error'],
                })
                this.cardRequestData.reset();
              } else {
                this._snackbar.open("Request error", undefined, {
                  duration: 2000,
                  panelClass: ['snack-bar-error'],
                })
                this.cardRequestData.reset();
              }
            },
          })
      }
    } else if (this.appId === 3){
      if (this.appId && this.cityId) {
        this.requestsService.cardRequest(this.appId,
          this.cardRequestData.value.fullName!,
          this.cardRequestData.value.mobileNumber!,
          this.cityId, this.cardRequestData.value.email!,
          this.prodId)
          .subscribe({
            next: (data: DefaultResponseType) => {
              this._snackbar.open("Дархост фиристода шуд!", undefined, {
                duration: 2000,
                panelClass: ['snack-bar-success'],
              })
              this.cardRequestData.reset();
            },
            error: (errorResponse: HttpErrorResponse) => {
              if (errorResponse.error && errorResponse.error.errorMessage) {
                this._snackbar.open(errorResponse.error.errorMessage, undefined, {
                  duration: 2000,
                  panelClass: ['snack-bar-error'],
                })
                this.cardRequestData.reset();
              } else {
                this._snackbar.open("Request error", undefined, {
                  duration: 2000,
                  panelClass: ['snack-bar-error'],
                })
                this.cardRequestData.reset();
              }
            },
          })
      }
    }
  }
}
