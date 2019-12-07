import { Component, ElementRef, Input, ViewChild, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as rootApp from '../../store/app.reducer';
import { Documents } from '../../types';


@Component({
  selector: 'app-student-panel',
  templateUrl: './student-panel.component.html',
  styleUrls: ['./student-panel.component.scss']
})
export class StudentPanelComponent implements OnInit {
  constructor(readonly store: Store<rootApp.AppState>) {
    this.store
      .select('documents')
      .pipe()
      .subscribe(data => {
        this.documents = data.studentDocuments;
      });
  }
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
  isEditPopupVisible = false
  editHomeworkNumber = null
  documents: Documents.Document[] = []

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

  get editingHomework(): Documents.Document | null {
    if (this.editHomeworkNumber) {
      return this.documents.find(document => document.number === this.editHomeworkNumber);
    }

    return null;
  }

  openModal() {
    this.isPopupVisible = !this.isPopupVisible;
  }

  openEditModal(data) {
    this.editHomeworkNumber = data
    this.isEditPopupVisible = true;
  }

  closeEditModal() {
    this.isEditPopupVisible = false;
  }

  ngOnInit(): void {
    console.log(this.modal);
  }
}
