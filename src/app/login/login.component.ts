import { Component, OnInit } from '@angular/core';
import passworder from 'passworder';
import { Store } from '@ngrx/store';
import * as loginActions from '../../store/auth/actions.auth';
import { AuthService } from '../../services/auth.service';
import * as rootApp from '../../store/app.reducer';
import { AngularFirestore } from '@angular/fire/firestore';
import {PATHS} from '../../constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    readonly store: Store<rootApp.AppState>,
    public authSrvice: AuthService,
    private db: AngularFirestore,
    private router: Router,
  ) { }
  email = ''
  password = ''
  isLogin = true
  userName = ''
  shouldValidateName = false
  shouldValidatePassword = false
  shouldValidateEmail = false
  error = ''

  passwordError() {
    return passworder.validate(this.password).warning;
  }

  get isLoginButtonActive() {
    if (this.isLogin) return this.validateEmail && this.validatePassword;
    return this.validateEmail && this.validatePassword && this.validateName;
  }

  get validateName() {
    return this.userName.length;
  }

  get validateEmail() {
    return /^(([^а-яА-Яыъ<>()[\]\\.,;:\s@\"]+(\.[^а-яА-Яыъ<>()[\]\\.,;:\s@\"]+)*)|(\"[a-zA-Z\-0-9]+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email);
  }

  get validatePassword() {
    return passworder.validate(this.password).status;
  }

  login() {
    this.authSrvice.login(this.email, this.password).then((data) => {
     if (data.code) {
       this.error = data.message;
     } else {
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
       if (this.authSrvice.userRole === 'student') {
         this.router.navigate(['/student-panel']);
       } else {
         this.router.navigate(['/teacher-panel']);
       }
     }
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
