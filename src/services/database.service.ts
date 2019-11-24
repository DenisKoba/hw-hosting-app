import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import Cookie from 'js-cookie';
import { AUTH } from '../store/auth/actions.auth'
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class DatabaseService {
  constructor(private db: AngularFirestore) {}

  createHomeworkRecord(data) {
    this.db.collection(`homeworks`).add({
      ...data
    });
  }
}
