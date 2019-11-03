import { Component, OnInit, Input } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { CreateHomeworkComponent } from '../create-homework/create-homework.component';


@Component({
  selector: 'app-student-panel',
  templateUrl: './student-panel.component.html',
  styleUrls: ['./student-panel.component.scss']
})
export class StudentPanelComponent implements OnInit {
  constructor(public NgxSmartModalService: NgxSmartModalService) {
    this.NgxSmartModalService.create('myModal', CreateHomeworkComponent, { force: true, hideDelay: 0, backdrop: true})
  }

  @Input() mode: string

  rateColors = {
    green: '#4ACF23',
    orange: '#FFC13D',
    gray: '#D1D1D1',
    red: '#FF2323',
  }

  avarageRate = 3.2

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
    this.NgxSmartModalService.setModalData({someData: 'data'}, 'myModal')
    this.NgxSmartModalService.toggle('myModal')
  }

  ngOnInit() {
    console.log(this.NgxSmartModalService)
  }

}
