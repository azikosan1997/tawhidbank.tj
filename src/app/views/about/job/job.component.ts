import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {DefaultResponseType} from "../../../../types/defaultResponse.type";
import {HttpErrorResponse} from "@angular/common/http";
import {RequestsService} from "../../../services/requests.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
  @ViewChild('job') job!: TemplateRef<ElementRef>;
  selectedFile: any = null;
  fileGetter: string = 'aboutJobTextTwentyTwo'
  appId: number = 7;
  productId: number = 16;

  banner = [
    {
      title: 'aboutJobTextOne',
      subtitle: 'aboutJobTextTwo',
      image: './assets/images/pages/job/banner.png',
      buttonText: 'aboutJobTextZero',
      link: '/about/job#contact',
      class: 'card'
    }
  ]

  ngOnInit() {
    console.log(this.selectedFile);
  }

  constructor(private formBuilder: FormBuilder,
              public dialog: MatDialog,
              private requestService: RequestsService,
              private _snackbar: MatSnackBar) {
  }

  onFileUuidReceived(selectedFile: any) {
    this.selectedFile = selectedFile;
  }

  sendCandidateData() {
    if (this.appId && this.productId) {
      this.requestService.jobRequest(
        this.appId,
        this.candidateForm.value.fullname!,
        this.candidateForm.value.mobileNumber!,
        this.candidateForm.value.text!,
        this.productId,
        !!this.candidateForm.value.agree)
        .subscribe({
          next: (data: DefaultResponseType) => {
            this._snackbar.open("Дархост фиристода шуд!", undefined, {
              duration: 2000,
              panelClass: ['snack-bar-success'],
            })
            this.candidateForm.reset();
          },
          error: (errorResponse: HttpErrorResponse) => {
            if (errorResponse.error && errorResponse.error.errorMessage) {
              this._snackbar.open(errorResponse.error.errorMessage, undefined, {
                duration: 2000,
                panelClass: ['snack-bar-error'],
              })
              this.candidateForm.reset();
            } else {
              this._snackbar.open("Request error", undefined, {
                duration: 2000,
                panelClass: ['snack-bar-error'],
              })
              this.candidateForm.reset();
            }
          },
        })
    }
  }

  closePopup() {
    this.candidateForm.reset();
    this.candidateForm.markAsPristine();
    this.candidateForm.markAsUntouched();
    window.scrollTo({top: 0, behavior: 'smooth'});
    setTimeout(() => {
      this.dialog.closeAll();
    }, 10)
  }

  candidateForm = this.formBuilder.group({
    fullname: [
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
    text: ['', Validators.required],
    agree: [false, Validators.required]
  })

  jobs: any[] = [
    {
      duty: 'Сотрудник Банка',
      salary: 'от 6000 сомони',
      city: 'Душанбе',
      info: 'Не следует, однако, забывать, что новая модель организационной деятельности способствует подготовке и реализации прогресса профессионального сообщества. Как принято считать, некоторые особенности внутренней политики, превозмогая сложившуюся непростую экономическую ситуацию, обнародованы. Есть над чем задуматься: диаграммы связей и по сей день остаются уделом либералов, которые жаждут быть объявлены нарушающими общечеловеческие нормы этики и морали.'
    },
    {
      duty: 'Стратег финансовой службы',
      salary: 'з.п не указана',
      city: 'Худжанд',
      info: 'Не следует, однако, забывать, что новая модель организационной деятельности способствует подготовке и реализации прогресса профессионального сообщества. Как принято считать, некоторые особенности внутренней политики, превозмогая сложившуюся непростую экономическую ситуацию, обнародованы. Есть над чем задуматься: диаграммы связей и по сей день остаются уделом либералов, которые жаждут быть объявлены нарушающими общечеловеческие нормы этики и морали.'
    },
    {
      duty: 'Бизнес аналитик',
      salary: 'от 4500 сомони',
      city: 'Бохтар',
      info: 'Не следует, однако, забывать, что новая модель организационной деятельности способствует подготовке и реализации прогресса профессионального сообщества. Как принято считать, некоторые особенности внутренней политики, превозмогая сложившуюся непростую экономическую ситуацию, обнародованы. Есть над чем задуматься: диаграммы связей и по сей день остаются уделом либералов, которые жаждут быть объявлены нарушающими общечеловеческие нормы этики и морали.'
    },
  ]


}
