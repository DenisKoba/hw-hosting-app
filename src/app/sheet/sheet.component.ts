import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Store} from '@ngrx/store';
import * as rootApp from '../../store/app.reducer';
import { Documents } from '../../types/';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss']
})
export class SheetComponent implements OnInit {
  constructor(readonly store: Store<rootApp.AppState>) {
    this.store
      .select('documents')
      .pipe()
      .subscribe(data => {
        this.documents = data.studentDocuments;
      });
  }

  @Input() mode: string
  @Output() openEditModal: EventEmitter<any> = new EventEmitter();

  documents: Documents.Document[]

  openModal(data) {
    this.openEditModal.emit(data);
  }

  ngOnInit() {
  }

}
