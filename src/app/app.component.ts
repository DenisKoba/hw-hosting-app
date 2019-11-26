import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as AuthActions from '../store/auth/actions.auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as rootApp from '../store/app.reducer';
import {AngularFireAuth} from '@angular/fire/auth';
import * as loginActions from '../store/auth/actions.auth';
import * as documentActions from '../store/documents/actions.documents';
import { DatabaseService } from '../services/database.service';

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
    private databaseService: DatabaseService
  ) {
    this.store.dispatch(new AuthActions.ResolveAuthData());
    this.store
      .select('auth')
      .pipe()
      .subscribe(data => {
        this.role = data.userData.role;
        this.userData = data.userData
        this.id = data.userData.id;
        if (this.id.length) this.requestUserData(this.id);
      });
    db.collection('users')
      .valueChanges()
      .pipe()
      .subscribe(data => {
        this.users = data;
      });

    this.firebaseAuth.authState.subscribe(user => {
      if (user) this.store.dispatch(new loginActions.LoginAction(this.currentUserData(user)));
    });
  }
  title = 'hw-hosting-app';
  user: Observable<rootApp.AppState['auth']>
  role: string
  id: string
  users: any = []
  userData: any = {}

  logout() {
    this.authSrvice.logout();
  }

  requestUserData(id: string) {
    this.databaseService.fetchCollection('userId', id).then((documents) => {
      this.store.dispatch(new documentActions.DocumentsSetAction(documents));
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

  ngOnInit(): void {}
}
