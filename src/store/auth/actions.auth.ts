import { Action } from '@ngrx/store';
import * as fromRoot from '../app.reducer'

export enum AUTH {
  RESOLVE_AUTH_DATA = 'RESOLVE_AUTH_DATA',
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  ACCESS = 'access',
  REFRESH = 'refresh',
  ROLE = 'role'
}

export class LoginAction implements Action {
  readonly type = AUTH.LOGIN;
  // @ts-ignore
  constructor(public payload: fromRoot.AppState.auth.userData ) {}
}

export class LogoutAction implements Action {
  readonly type = AUTH.LOGOUT;
}

export class ResolveAuthData implements Action {
  readonly type = AUTH.RESOLVE_AUTH_DATA;
}

export type AuthActions = LoginAction | LogoutAction | ResolveAuthData;
