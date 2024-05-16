import {Component, ElementRef, TemplateRef, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {DefaultResponseType} from "../../../../types/defaultResponse.type";
import {HttpErrorResponse} from "@angular/common/http";
import {RequestsService} from "../../../services/requests.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent {
  @ViewChild('help') help!: TemplateRef<ElementRef>;
  appId: number = 8;
  productId: number = 17;

  foods = [
    { value: 'Получение/пополнение карты', viewValue: 'aboutHelpTextFifteen' },
    { value: 'Получение/погашение финансирования', viewValue: 'aboutHelpTextSixteen' },
    { value: 'Интернетбанкинг / Личный кабинет', viewValue: 'aboutHelpTextSeventeen' },
    { value: 'Кошелёк Tawhid Pa', viewValue: 'aboutHelpTextEighteen' },
    { value: 'Эквайринг / Онлайн-платежи', viewValue: 'aboutHelpTextNineteen' },
    { value: 'Покупка авто', viewValue: 'aboutHelpTextTwenty' },
    { value: 'Благодарность', viewValue: 'aboutHelpTextTwentyOne' },
    { value: 'Пожаловаться', viewValue: 'aboutHelpTextTwentyTwo' },
    { value: 'Сотрудничество', viewValue: 'aboutHelpTextTwentyThree' },
    { value: 'Другое', viewValue: 'aboutHelpTextTwentyFour' },
  ];

  constructor(private formBuilder: FormBuilder,
              public dialog: MatDialog,
              private translate: TranslateService,
              private requestService: RequestsService,
              private _snackbar: MatSnackBar) {
  }

  translateText(text: string): string {
    return  this.translate.instant(text);
  }

  helpForm = this.formBuilder.group({
    topic: ['', Validators.required],
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
    question: ['', Validators.required],
  });

  sendRequest() {
    if (this.helpForm.valid) {

      this.requestService.supportRequest(
        this.appId,
        this.helpForm.value.fullName!,
        this.helpForm.value.mobileNumber!,
        this.helpForm.value.topic!,
        this.productId,
        this.helpForm.value.question!)
        .subscribe({
          next: (data: DefaultResponseType) => {
            this._snackbar.open("Дархост фиристода шуд!", undefined, {
              duration: 2000,
              panelClass: ['snack-bar-success'],
            })
            this.helpForm.reset();
          },
          error: (errorResponse: HttpErrorResponse) => {
            if (errorResponse.error && errorResponse.error.errorMessage) {
              this._snackbar.open(errorResponse.error.errorMessage, undefined, {
                duration: 2000,
                panelClass: ['snack-bar-error'],
              })
              this.helpForm.reset();
            } else {
              this._snackbar.open("Request error", undefined, {
                duration: 2000,
                panelClass: ['snack-bar-error'],
              })
              this.helpForm.reset();
            }
          },
        })
    } else {
      console.log('Form is not valid. Please check the fields.');
    }
  }

  closePopup() {
    this.helpForm.reset();
    this.helpForm.markAsPristine();
    this.helpForm.markAsUntouched();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.dialog.closeAll();
  }
}
