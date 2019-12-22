import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import Cookie from 'js-cookie';
import { AUTH } from '../store/auth/actions.auth';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
  }

  get isloggedIn() {
    return Cookie.get(AUTH.REFRESH);
  }

  get userRole() {
    return Cookie.get(AUTH.ROLE);
  }

  login(email: string, password: string) {
    return this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => value)
      .catch(err => err);
  }

  signUpNewUser(email: string, password: string) {
    return this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => value)
      .catch(err => console.warn('Something went wrong:', err.message));
  }

  logout() {
    this.removeAuthCookie()
    this.firebaseAuth
      .auth
      .signOut();
    this.router.navigate(['/login']);
  }

  setAuthCookie(data) {
    Cookie.set(AUTH.REFRESH, data.refreshToken, { expires: 1 });
    Cookie.set(AUTH.ROLE, data.role, { expires: 1 });
  }

  removeAuthCookie() {
    Cookie.remove(AUTH.REFRESH);
    Cookie.remove(AUTH.ROLE);
  }
}
