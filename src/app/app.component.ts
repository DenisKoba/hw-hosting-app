import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as AuthActions from '../store/auth/actions.auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as rootApp from '../store/app.reducer';
import {AngularFireAuth} from '@angular/fire/auth';
import * as loginActions from '../store/auth/actions.auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    readonly store: Store<rootApp.AppState>,
    private authSrvice: AuthService,
    private db: AngularFirestore,
    private firebaseAuth: AngularFireAuth,
  ) {
    this.store.dispatch(new AuthActions.ResolveAuthData());
    this.user = this.store.select('auth')
    this.user.pipe().subscribe(data => {
      this.role = data.userData.role;
      this.userData = data.userData
      this.id = data.userData.id;
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

  isUserInDataBase(data) {
    return data.some((user: any) => user.id === this.id);
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
