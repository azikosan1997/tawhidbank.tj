import { Component } from '@angular/core';

@Component({
  selector: 'app-bank-board',
  templateUrl: './bank-board.component.html',
  styleUrls: ['./bank-board.component.scss']
})
export class BankBoardComponent {
  peopleData = [
    {
      fullname: "aboutBoardTextTwo",
      biography: "aboutBoardTextThree"
    },
    {
      fullname: "aboutBoardTextFour",
      biography: "aboutBoardTextFive"
    },
    {
      fullname: "aboutBoardTextSix",
      biography: "aboutBoardTextSeven"
    },
    {
      fullname: "aboutBoardTextEight",
      biography: "aboutBoardTextNine"
    },
    {
      fullname: "aboutBoardTextTen",
      biography: "aboutBoardTextEleven"
    },
  ]
}
