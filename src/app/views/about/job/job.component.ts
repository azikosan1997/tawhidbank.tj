import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {DefaultResponseType} from "../../../../types/defaultResponse.type";
import {HttpErrorResponse} from "@angular/common/http";
import {RequestsService} from "../../../services/requests.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {JobsService} from "../../../services/jobs.service";
import {LanguageServiceService} from "../../../services/language-service.service";

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
  displayingTjJobs: any = null;
  displayingEnJobs: any = null;
  displayingRuJobs: any = null;
  displayingJobs: any = null;
  lang: string = 'tj'

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

  constructor(private formBuilder: FormBuilder,
              public dialog: MatDialog,
              private requestService: RequestsService,
              private _snackbar: MatSnackBar,
              private jobsService: JobsService,
              private languageService: LanguageServiceService,) {
  }

  ngOnInit() {
    this.jobsService.getAllVacancies()
      .subscribe({
        next: (data: any) => {
          this.processNewsData(data);
          const language = sessionStorage.getItem('lang') || 'en';
          if (language === 'tj') {
            this.displayingJobs = this.displayingTjJobs;
          } else if (language === 'ru') {
            this.displayingJobs = this.displayingRuJobs;
          } else {
            this.displayingJobs = this.displayingEnJobs;
          }

          this.languageService.selectedLanguage$.subscribe(langCode => {
            this.updateDisplayingNewsBasedOnLanguage(langCode);
          });
        },
        error: (error: HttpErrorResponse) => {
          console.log(error)
        }
      })
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

  processNewsData(data: any): void {
    this.displayingTjJobs = [];
    this.displayingEnJobs = [];
    this.displayingRuJobs = [];

    if (data && data.length > 0) {
      data.forEach((newsItem: any) => {
        this.displayingTjJobs.push({
          id: newsItem.id,
          author_id: newsItem.author_id,
          post_date: newsItem.post_date,
          position: newsItem.position_tj,
          salary: newsItem.salary,
          region: newsItem.region_tj,
          description: this.formatDescription(newsItem.description_tj),
        });

        this.displayingEnJobs.push({
          id: newsItem.id,
          author_id: newsItem.author_id,
          post_date: newsItem.post_date,
          position: newsItem.position_en,
          salary: newsItem.salary,
          region: newsItem.region_en,
          description: this.formatDescription(newsItem.description_en),
        });

        this.displayingRuJobs.push({
          id: newsItem.id,
          author_id: newsItem.author_id,
          post_date: newsItem.post_date,
          position: newsItem.position_ru,
          salary: newsItem.salary,
          region: newsItem.region_ru,
          description: this.formatDescription(newsItem.description_ru),
        });
      });
    }
  }

  updatedisplayingJobsBasedOnLanguage(langCode: string): void {
    if (langCode === 'tj') {
      this.displayingJobs = this.displayingTjJobs;
    } else if (langCode === 'ru') {
      this.displayingJobs = this.displayingRuJobs;
    } else {
      this.displayingJobs = this.displayingEnJobs;
    }
  }

  formatDescription(description: string): string {
    const tabSpaces = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
    const tabTwoSpaces = '&nbsp;&nbsp;&nbsp;&nbsp;';
    return tabSpaces + description.replace(/•\t/g, `${tabTwoSpaces}<br>${tabTwoSpaces}•`);
  }

  updateDisplayingNewsBasedOnLanguage(langCode: string): void {
    if (langCode === 'tj') {
      this.displayingJobs = this.displayingTjJobs;
    } else if (langCode === 'ru') {
      this.displayingJobs = this.displayingRuJobs;
    } else {
      this.displayingJobs = this.displayingEnJobs;
    }
  }
}
