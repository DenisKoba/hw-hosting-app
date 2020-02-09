import { Component, ElementRef, Input, ViewChild, OnInit, AfterContentInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as rootApp from '../../store/app.reducer';
import { Documents } from '../../types';


@Component({
  selector: 'app-student-panel',
  templateUrl: './student-panel.component.html',
  styleUrls: ['./student-panel.component.scss']
})
export class StudentPanelComponent implements OnInit, AfterContentInit {
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
  isPopupVisible = false
  isEditPopupVisible = false
  editHomeworkNumber = null
  documents: Documents.Document[] = []

  get buttonColor() {
    if (this.averageRate === 5) {
      return this.rateColors.green;
    }
    if (this.averageRate >= 4 && this.averageRate < 5) {
      return this.rateColors.orange;
    }
    if (this.averageRate >= 3 && this.averageRate < 4) {
      return this.rateColors.gray;
    }
    if (this.averageRate >= 2 && this.averageRate < 3) {
      return this.rateColors.red;
    }
  }

  get averageRate() {
    const rates = this.documents
      .filter((document: Documents.Document) => document.rate !== 0)
      .map((document: Documents.Document) => document.rate)
    const avarage = rates.reduce((sum, current) => sum + current, 0)
    if (avarage === 0) return 0
    return avarage / rates.length;
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

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log(this.documents)
  }
}
