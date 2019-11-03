import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as AuthActions from '../store/auth/actions.auth'
import * as rootApp from '../store/app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(readonly store: Store<rootApp.AppState>, private authSrvice: AuthService ) {
    this.store.dispatch(new AuthActions.ResolveAuthData());
    this.user = this.store.select('auth')
    this.user.pipe().subscribe(data => {
      this.role = data.userData.role;
    });
  }
  title = 'hw-hosting-app';
  user: Observable<rootApp.AppState['auth']>
  role: string

  logout() {
    this.authSrvice.logout();
  }
}
