import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as loginActions from '../../store/auth/actions.auth';
import { AuthService } from '../../services/auth.service';
import * as rootApp from '../../store/app.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(readonly store: Store<rootApp.AppState>, private authSrvice: AuthService ) { }
  email: string = null
  password: string = null
  isLogin = true

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
      // @ts-ignore
     console.log(data);
    });
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
