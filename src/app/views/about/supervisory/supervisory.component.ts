import {Component} from '@angular/core';

@Component({
  selector: 'app-supervisory',
  templateUrl: './supervisory.component.html',
  styleUrls: ['./supervisory.component.scss']
})
export class SupervisoryComponent {
  constructor() {
  }

  peopleData = [
    {
      fullname: "aboutSupervisoryTextTwo",
      biography: "aboutSupervisoryTextThree"
    },
    {
      fullname: "aboutSupervisoryTextFour",
      biography: "aboutSupervisoryTextFive"
    },
    {
      fullname: "aboutSupervisoryTextSix",
      biography: "aboutSupervisoryTextSeven"
    },
    {
      fullname: "aboutSupervisoryTextEight",
      biography: "aboutSupervisoryTextNine"
    },
    {
      fullname: "aboutSupervisoryTextTen",
      biography: "aboutSupervisoryTextEleven"
    },
  ]
}
