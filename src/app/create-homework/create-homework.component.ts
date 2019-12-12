import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { sha256 } from 'js-sha256';
import {Store} from '@ngrx/store';
import * as rootApp from '../../store/app.reducer';
import * as documentActions from '../../store/documents/actions.documents';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// @ts-ignore
const { themes } = require('../../../app.json')
export interface Item {
  file: string;
  fileName: string;
  date: string;
  status: string;
  comment: string;
  rate: number;
  teacherFile: string;
  number: number;
  userId: string;
  topic: string;
}

@Component({
  selector: 'app-create-homework',
  templateUrl: './create-homework.component.html',
  styleUrls: ['./create-homework.component.scss'],
})
export class CreateHomeworkComponent {
  @Input() someData: string
  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  constructor(
    private readonly afs: AngularFirestore,
    readonly store: Store<rootApp.AppState>,
    private storage: AngularFireStorage,
  ) {
    this.store
      .select('auth')
      .pipe()
      .subscribe(data => {
        this.userId = data.userData.id;
      });
    this.userDoc = afs.doc<Item>(`homeworks/group2`);
    this.itemsCollection = this.userDoc.collection<Item>(this.userId);
    this.items = this.itemsCollection.valueChanges();
  }

  profileUrl = null
  topicsFullList = themes
  fileName = ''
  downloadUrl = ''
  selectedTopic = ''
  userId = ''
  private itemsCollection: AngularFirestoreCollection<Item>;
  private userDoc: AngularFirestoreDocument;
  items: Observable<Item[]>;

  get topics() {
    return this.topicsFullList.map(topic => topic.topicName);
  }

  get topicNumber() {
    const topic = this.topicsFullList.find(item => item.topicName === this.selectedTopic)
    return topic.topicNumber;
  }

  get homeworkModel() {
    return {
      file: this.downloadUrl,
      fileName: this.fileName,
      date: this.dateCreated,
      status: 'unchecked',
      comment: '',
      rate: 0,
      teacherFile: '',
      number: this.topicNumber,
      userId: this.userId,
      topic: this.selectedTopic,
    };
  }

  get dateCreated() {
    const date = new Date();
    return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
  }

  submitHomework() {
    // Persist a document id
    const item: Item = this.homeworkModel;
    this.itemsCollection.add(item)
    this.store.dispatch(new documentActions.DocumentsAddAction(this.homeworkModel))
    this.closeModalHandler();
  }

  handleSelect(data) {
    this.selectedTopic = data.value;
  }

  async uploadFile(event) {
    if (!event.target) return
    const file = event.target.files[0];
    this.fileName = file.name
    const filePath = sha256(file.name);
    this.storage
      .ref(`files/${filePath}`)
      .put(file)
      .then(data => {
        this.storage
          .ref(data.metadata.fullPath)
          .getDownloadURL().subscribe((url: string) => this.downloadUrl = url);
      });
  }

  closeModalHandler() {
    this.closeModal.emit(true);
  }
}
