import {Component, ElementRef, EventEmitter, Input, Output, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FormBuilder, Validators} from "@angular/forms";
import {TranslateService} from "@ngx-translate/core";
import {RequestsService} from "../../../services/requests.service";
import {DefaultResponseType} from "../../../../types/defaultResponse.type";
import {DataResponseType} from "../../../../types/dataResponseType.type";
import {HttpErrorResponse} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-financing-form',
  templateUrl: './financing-form.component.html',
  styleUrls: ['./financing-form.component.scss']
})
export class FinancingFormComponent {
  @ViewChild('totpCheck') totpCheck!: TemplateRef<ElementRef>;
  @ViewChild('thanks') thanks!: TemplateRef<ElementRef>;
  @Output() fileSelected: EventEmitter<any> = new EventEmitter();
  @Input() periodButton!: string[];
  @Input() appId!: number;
  @Input() productId!: number;

  selectedFile: any = null;
  buttonIndex: number = 0;
  confirmedFirstStep: boolean = false;
  loanAmount: number = 0;
  loanPeriod: number = 1;

  foods = [
    { value: '1', viewValue: 'personalFinancingFormTextEleven' },
    { value: '2', viewValue: 'personalFinancingFormTextTwelve' },
    { value: '3', viewValue: 'personalFinancingFormTextThirteen' },
    { value: '4', viewValue: 'personalFinancingFormTextFourteen' },
    { value: '5', viewValue: 'personalMainBannerDataTitleTwo' },
  ];
  fileGetter: string = 'personalFinancingFormTextFifteen'

  constructor(public dialog: MatDialog,
              private formBuilder: FormBuilder,
              private secondBuilder: FormBuilder,
              private translate: TranslateService,
              private requestService: RequestsService,
              private _snackbar: MatSnackBar,) {

  }

  translateText(key: string): string {
    return this.translate.instant(key);
  }

  onFileSelected(selectedFile: any) {
    this.selectedFile = selectedFile;
  }

  firstStep = this.formBuilder.group({
    tin: [
      '',
      [
        Validators.required,
        Validators.pattern(/^\d{9}$/),
      ],
    ],
    mobileNumber: [
      '+992',
      [
        Validators.required,
        Validators.pattern(/^\+\d{12}$/),
      ],
    ],
  });

  secondStep = this.secondBuilder.group({
    product: ['', Validators.required],
    surname: ['', Validators.required],
    name: ['', Validators.required],
    fathersName: ['', Validators.required],
    mobileNumber: [
      '+992',
      [
        Validators.required,
        Validators.pattern(/^\+\d{12}$/),
      ],
    ],
    email: [
      '',
      [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]
    ],
    birthDate: ['', Validators.required],
    agree: [false, Validators.required]
  });

  totpStep = this.formBuilder.group({
    totp: [
      '',
      [
        Validators.required,
        Validators.pattern(/^\d{6}$/),
      ],
    ],
  });

  buttonClick(index: number) {
    this.buttonIndex = index;
  }

  closeCheckTiPopup() {
    this.dialog.closeAll();
  }

  checkTin() {
    if(this.firstStep.value.tin && this.firstStep.value.mobileNumber && this.totpStep.value.totp){
      this.requestService.solvencyCheckOtpVerifyRequest(this.firstStep.value.tin, this.firstStep.value.mobileNumber, this.totpStep.value.totp)
        .subscribe({
          next: (data: DefaultResponseType | DataResponseType) => {
            console.log(data);

            this.confirmedFirstStep = !this.confirmedFirstStep;
            this.dialog.closeAll();
            this.firstStep.reset()
          },
          error: (errorResponse: HttpErrorResponse) => {
            if (errorResponse.error && errorResponse.error.errorMessage) {
              this._snackbar.open(errorResponse.error.errorMessage, undefined, {
                duration: 2000,
                panelClass: ['snack-bar-error'],
              })
              this.firstStep.reset()
            } else {
              this._snackbar.open("Request error", undefined, {
                duration: 2000,
                panelClass: ['snack-bar-error'],
              })
              this.firstStep.reset()
            }
          }
        })
    }
  }

  sendData() {
   if(this.secondStep.value.product ){

     this.requestService.financingRequest(this.secondStep.value.product!, this.secondStep.value.surname!, this.secondStep.value.name!, this.secondStep.value.fathersName!,
       this.secondStep.value.mobileNumber!, this.secondStep.value.email!, this.secondStep.value.birthDate!, this.secondStep.value.agree!)
       .subscribe({
         next: (data: DefaultResponseType | DataResponseType) => {
           this._snackbar.open("Дархост фиристода шуд!", undefined, {
             duration: 2000,
             panelClass: ['snack-bar-success'],
           })

           this.confirmedFirstStep = !this.confirmedFirstStep;
           this.secondStep.reset()
         },
         error: (errorResponse: HttpErrorResponse) => {
           if (errorResponse.error && errorResponse.error.errorMessage) {
             this._snackbar.open(errorResponse.error.errorMessage, undefined, {
               duration: 2000,
               panelClass: ['snack-bar-error'],
             })
             this.secondStep.reset()
           } else {
             this._snackbar.open("Request error", undefined, {
               duration: 2000,
               panelClass: ['snack-bar-error'],
             })
             this.secondStep.reset()
           }
         }
       })
   }
  }

  calculateFillPercentage(): number {
    return ((this.loanAmount - 10000) / (500000 - 10000)) * 100;
  }

  updateSlider() {
    this.loanAmount = Math.min(500000, Math.max(10000, this.loanAmount));
  }

  updateSliderThree() {
    this.loanPeriod = Math.min(60, Math.max(1, this.loanPeriod));
  }

  calculateFillPercentageThree(): number {
    return (this.loanPeriod / 60) * 100;
  }


  solvencyCheck() :void{
    if(this.firstStep.value.tin && this.firstStep.value.mobileNumber){
      this.requestService.solvencyCheckRequest(this.firstStep.value.tin, this.firstStep.value.mobileNumber)
        .subscribe({
          next: (data: DefaultResponseType | DataResponseType) => {
            console.log(data);

            this.dialog.open(this.totpCheck, {
              width: '60wh',
            })
          },
          error: (errorResponse: HttpErrorResponse) => {
            if (errorResponse.error && errorResponse.error.errorMessage) {
              this._snackbar.open(errorResponse.error.errorMessage, undefined, {
                duration: 2000,
                panelClass: ['snack-bar-error'],
              })
            } else {
              this._snackbar.open("Хизматрасонии мазкур танҳо ба мизоҷони бонкамон пешниҳод карда мешавад.", undefined, {
                duration: 2000,
                panelClass: ['snack-bar-error'],
              })
            }
          }
        })
    }
  }


}
