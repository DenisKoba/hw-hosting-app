import { Component, ElementRef, Input, ViewChild, OnInit } from '@angular/core';


@Component({
  selector: 'app-student-panel',
  templateUrl: './student-panel.component.html',
  styleUrls: ['./student-panel.component.scss']
})
export class StudentPanelComponent implements OnInit {
  @ViewChild('createModal', {static: true}) modal: ElementRef;
  @Input() mode: string

  rateColors = {
    green: '#4ACF23',
    orange: '#FFC13D',
    gray: '#D1D1D1',
    red: '#FF2323',
  }

  avarageRate = 3.2
  isPopupVisible = false

  get buttonColor() {
    if (this.avarageRate === 5) {
      return this.rateColors.green;
    }
    if (this.avarageRate >= 4 && this.avarageRate < 5) {
      return this.rateColors.orange;
    }
    if (this.avarageRate >= 3 && this.avarageRate < 4) {
      return this.rateColors.gray;
    }
    if (this.avarageRate >= 2 && this.avarageRate < 3) {
      return this.rateColors.red;
    }
  }

  openModal() {
    this.isPopupVisible = !this.isPopupVisible;
  }

  ngOnInit(): void {
    console.log(this.modal);
  }
}
