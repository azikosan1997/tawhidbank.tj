import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-person-graphic',
  templateUrl: './person-graphic.component.html',
  styleUrls: ['./person-graphic.component.scss']
})
export class PersonGraphicComponent {
  @Input() peopleMain!: any[];
}
