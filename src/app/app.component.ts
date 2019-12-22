import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as AuthActions from '../store/auth/actions.auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import * as rootApp from '../store/app.reducer';
import {AngularFireAuth} from '@angular/fire/auth';
import * as loginActions from '../store/auth/actions.auth';
import * as documentActions from '../store/documents/actions.documents';
import { DatabaseService } from '../services/database.service';
import { PATHS } from '../constants';
import {Item} from './create-homework/create-homework.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DatabaseService]
})
export class AppComponent implements OnInit {
  constructor(
    readonly store: Store<rootApp.AppState>,
    private authSrvice: AuthService,
    private db: AngularFirestore,
    private firebaseAuth: AngularFireAuth,
    private router: Router,
  ) {
    this.store.dispatch(new AuthActions.ResolveAuthData());
    this.store
      .select(PATHS.AUTH)
      .pipe()
      .subscribe(data => {
        this.role = data.userData.role;
        this.userData = data.userData
        this.id = data.userData.id;
        if (this.id.length) this.requestUserData(this.id);
      });
    this.firebaseAuth.authState.subscribe(user => {
      if (user) this.store.dispatch(new loginActions.LoginAction(this.currentUserData(user)));
    });
  }
  role: string
  id: string
  students: any = []
  userData: any = {}
  homeworks: any = []
  homeworksCollectionRef: AngularFirestoreCollection<any>;

  logout() {
    this.authSrvice.logout();
  }

  requestUserData(id: string) {
    this.homeworksCollectionRef = this.db.collection(PATHS.HOMEWORKS)
      .doc(PATHS.GROUP)
      .collection<Item>(this.id)
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

  fetchStudents() {
    this.db.collection(PATHS.USERS)
      .doc(PATHS.GROUP)
      .collection(PATHS.STUDENTS)
      .snapshotChanges()
      .pipe()
      .subscribe((data: any) => {
        this.students = data.map(item => {
          return { ...item.payload.doc.data() };
        });
      });
  }

  currentUserData(data) {
    return {
      refreshToken: data.refreshToken,
      name: data.userName,
      photo: data.photoUrl,
      email: data.email,
      role: data.email.includes('teacher') ? 'teacher' : 'student',
      id: data.uid,
    };
  }

  ngOnInit(): Promise<boolean> | void {
    if (!this.authSrvice.isloggedIn) {
      return this.router.navigate(['/login']);
    }

    if (this.authSrvice.userRole === 'student') {
      this.router.navigate(['/student-panel']);
    } else {
      this.router.navigate(['/teacher-panel']);
    }
    this.fetchStudents();
  }
}
