import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-file-getter',
  templateUrl: './file-getter.component.html',
  styleUrls: ['./file-getter.component.scss']
})
export class FileGetterComponent {
  @Input() fileSelected: EventEmitter<any> = new EventEmitter();
  @Output() fileUuidEmitted: EventEmitter<string> = new EventEmitter<string>();
  @Input() name!: any;
  selectedFile: any = null;

  constructor(private translate: TranslateService,
              private http: HttpClient) {
  }

  translateText(key: string): string {
    return this.translate.instant(key);
  }

  handleFileInput(event: any) {
    const fileInput = event.target;
    const file = fileInput.files[0];

    const formData = new FormData();
    formData.append('file', file);

    this.http.post<any>(environment.api + 'jobs/upload', formData).subscribe(
      (response) => {
        const fileUuid = response.fileUuid;
        localStorage.setItem('fileUuid', response.data[0].fileUuid);
        this.selectedFile = fileUuid;
        this.fileSelected.emit(fileUuid);
        this.fileUuidEmitted.emit(fileUuid);
      },
      (error) => {
        console.error('Ошибка загрузки файла:', error);
      }
    );

  }
}
