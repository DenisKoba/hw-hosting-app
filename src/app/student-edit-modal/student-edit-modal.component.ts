import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Documents } from '../../types';
import {sha256} from 'js-sha256';
import {AngularFireStorage} from '@angular/fire/storage';
import {PATHS} from '../../constants';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Store} from '@ngrx/store';
import * as rootApp from '../../store/app.reducer';
import { Item } from '../create-homework/create-homework.component';

@Component({
  selector: 'app-student-edit-modal',
  templateUrl: './student-edit-modal.component.html',
  styleUrls: ['./student-edit-modal.component.scss']
})
export class StudentEditModalComponent implements OnInit {

  constructor(private storage: AngularFireStorage, private db: AngularFirestore, readonly store: Store<rootApp.AppState>) {}
  @Input() editingHomework: Documents.Document
  @Input() mode: string
  @Output() closeEditModal: EventEmitter<any> = new EventEmitter();

  fileName = ''
  downloadUrl = ''
  id = ''
  homeworksCollectionRef: AngularFirestoreCollection<any>;
  comment = ''
  isEditingComment = false

  get date() {
    const date = new Date()
    return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
  }

  get checkedIcon() {
    return `url(${this.editingHomework.status}.svg)`;
  }

  get isStudent() {
    return this.mode === 'student'
  }

  get downloadLink() {
    return this.isStudent ? this.editingHomework.file : this.editingHomework.teacherFile;
  }

  downloadFile() {
    window.location.href = this.downloadLink;
  }

  updateComment() {
    this.homeworksCollectionRef.doc(this.editingHomework.id).update({ comment: this.comment });
  }

  editComment() {
    if (this.isEditingComment) this.updateComment()
    if (this.editingHomework.comment.length) this.comment = this.editingHomework.comment
    this.isEditingComment = !this.isEditingComment;
  }

  closeModalHandler() {
    this.closeEditModal.emit(null);
  }

  updateStatus() {
    this.homeworksCollectionRef.doc(this.editingHomework.id).update({ status: 'checked' });
  }

  async uploadFile(event) {
    if (!event.target) return
    const file = event.target.files[0];
    this.fileName = file.name
    const filePath = sha256(file.name);
    const update = () => {
      this.homeworksCollectionRef
        .doc(this.editingHomework.id)
        .update({
          file: this.downloadUrl,
          date: this.date,
          fileName: this.fileName,
          status: 'unchecked'
        });
    }
    const updateTeacher = () => {
      this.homeworksCollectionRef
        .doc(this.editingHomework.id)
        .update({
          teacherFile: this.downloadUrl,
          teacherFilename: this.fileName,
          date: this.date,
        });
    }
    this.storage
      .ref(`files/${filePath}`)
      .put(file)
      .then(data => {
        this.storage
          .ref(data.metadata.fullPath)
          .getDownloadURL()
          .subscribe((url: string) => {
            this.downloadUrl = url
            this.mode === 'student' ? update() : updateTeacher();
          });
      });
  }

  deleteHomework() {
    this.homeworksCollectionRef.doc(this.editingHomework.id).delete();
    this.closeEditModal.emit(null);
  }

  ngOnInit() {
    this.homeworksCollectionRef = this.db.collection(PATHS.HOMEWORKS)
      .doc(PATHS.GROUP)
      .collection<Item>(this.editingHomework.userId);
  }

}
