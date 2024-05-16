import {Component, Input, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-branch-info',
  templateUrl: './branch-info.component.html',
  styleUrls: ['./branch-info.component.scss']
})
export class BranchInfoComponent implements OnInit{
  @Input() data: any = [];

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {

  }

  translateText(key: string): string {
    return this.translate.instant(key);
  }

}
