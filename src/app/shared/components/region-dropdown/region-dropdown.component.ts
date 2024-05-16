import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RequestsService} from "../../../services/requests.service";
import {DefaultResponseType} from "../../../../types/defaultResponse.type";
import {DataResponseType} from "../../../../types/dataResponseType.type";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-region-dropdown',
  templateUrl: './region-dropdown.component.html',
  styleUrls: ['./region-dropdown.component.scss']
})
export class RegionDropdownComponent implements OnInit {
  @Output() cityIdChanged = new EventEmitter<string | null | number>();
  chosenOption: string | null = 'Шаҳрро интихоб кунед.';
  chosenCityId: string | null | number = '';
  cityOptions: any = [];
  optionsOpen: boolean = false;

  constructor(private requests: RequestsService) {

  }

  ngOnInit() {
    this.requests.getRegions()
      .subscribe({
        next: (data: DefaultResponseType | DataResponseType) => {
          this.cityOptions = data.data;
        },
        error: (errorResponse: HttpErrorResponse) => {
          console.log(errorResponse);
        }
      });
  }

  openOptions() {
    this.optionsOpen = !this.optionsOpen;
  }

  setOption(id: string, name: string ) {
    this.chosenOption = name;
    this.cityIdChanged.emit(id);
    this.optionsOpen = !this.optionsOpen;
  }

}
