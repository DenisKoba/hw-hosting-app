import {Component, Input, DoCheck} from '@angular/core';
import {PATHS} from '../../constants';
import {Item} from '../create-homework/create-homework.component';
import * as documentActions from '../../store/documents/actions.documents';
import {Store} from '@ngrx/store';
import * as rootApp from '../../store/app.reducer';
import {AuthService} from '../../services/auth.service';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Documents} from '../../types';

@Component({
  selector: 'app-teacher-panel',
  templateUrl: './teacher-panel.component.html',
  styleUrls: ['./teacher-panel.component.scss']
})
export class TeacherPanelComponent implements DoCheck {

  constructor(
    readonly store: Store<rootApp.AppState>,
    private db: AngularFirestore
  ) {
    this.store
      .select('documents')
      .pipe()
      .subscribe(data => {
        this.documents = data.studentDocuments;
      });
  }

  @Input() mode: string
  @Input() students: any[]

  rateColors = {
    green: '#4ACF23',
    orange: '#FFC13D',
    gray: '#D1D1D1',
    red: '#FF2323',
  }
  homeworksCollectionRef: AngularFirestoreCollection<any>;
  selectedValue = ''
  isEditPopupVisible = false
  editHomeworkNumber = null
  documents = []

  get studentNames() {
    return this.students.map(student => student.name);
  }

  get editingHomework(): Documents.Document | null {
    if (this.editHomeworkNumber) {
      return this.documents.find(document => document.number === this.editHomeworkNumber);
    }

    return null;
  }

  get avarageRate() {
    const rates = this.documents
      .map((document: Documents.Document) => {
        if (document.rate !== 0) return document.rate;
      })
    const avarage = rates.reduce((sum, current) => sum + current, 0)
    if (avarage === 0) return 0
    return avarage / rates.length;
  }

  requestUserData(value: string) {
    const id = this.students.find(student => student.name === value).id
    this.homeworksCollectionRef = this.db.collection(PATHS.HOMEWORKS)
      .doc(PATHS.GROUP)
      .collection(id)
    this.homeworksCollectionRef
      .snapshotChanges()
      .pipe()
      .subscribe((data: any) => {
        const idDoc = data.map(item => {
          return { ...item.payload.doc.data(), id: item.payload.doc.id };
        });
        this.store.dispatch(new documentActions.DocumentsSetAction(idDoc));
      });
  }

  openEditModal(data) {
    this.editHomeworkNumber = data
    this.isEditPopupVisible = true;
  }

  handleSelect(name) {
    this.selectedValue = name;
    this.requestUserData(this.selectedValue);
  }

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

  closeEditModal() {
    this.isEditPopupVisible = false;
  }

  ngDoCheck() {
    if (this.selectedValue) {
      return false;
    } else {
      this.handleSelect(this.studentNames[0]);
    }
  }

}
