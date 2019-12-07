import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as loginActions from '../../store/auth/actions.auth';
import { AuthService } from '../../services/auth.service';
import * as rootApp from '../../store/app.reducer';
import { AngularFirestore } from '@angular/fire/firestore';
import {PATHS} from '../../constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    readonly store: Store<rootApp.AppState>,
    private authSrvice: AuthService,
    private db: AngularFirestore
  ) { }
  email: string = null
  password: string = null
  isLogin = true
  userName = ''

  login() {
    this.authSrvice.login(this.email, this.password).then((data) => {
      // @ts-ignore
      const { user } = data
      const userData: any = {
        refreshToken: user.refreshToken,
        name: user.userName,
        photo: user.photoUrl,
        email: user.email,
        role: this.email.includes('teacher') ? 'teacher' : 'student',
        id: user.uid,
      }
      this.store.dispatch(new loginActions.LoginAction(userData));
      this.authSrvice.setAuthCookie(userData);
    });
  }

  resolveView() {
    this.isLogin = !this.isLogin;
  }

  signUp() {
    this.authSrvice.signUpNewUser(this.email, this.password).then((data) => {
      if (!data) return
      const { user } = data
      const userData: any = {
        refreshToken: user.refreshToken,
        // @ts-ignore
        name: user.userName || this.userName,
        // @ts-ignore
        photo: user.photoUrl || '',
        email: user.email,
        role: this.email.includes('teacher') ? 'teacher' : 'student',
        id: user.uid,
      }
      this.store.dispatch(new loginActions.LoginAction(userData));
      this.authSrvice.setAuthCookie(userData);
      const { refreshToken, ...dbData } = userData
      this.db.collection(PATHS.USERS)
        .doc(PATHS.GROUP)
        .collection(userData.role === 'student' ? PATHS.STUDENTS : PATHS.TEACHERS)
        .add({
           ...dbData
        });
    });
  }

  handleUserName(value) {
    if (typeof value === 'string') this.userName = value;
  }

  handleEmail(value) {
    if (typeof value === 'string') this.email = value;
  }

  handlePassword(value) {
    if (typeof value === 'string') this.password = value;
  }

  ngOnInit() {

  }

}
