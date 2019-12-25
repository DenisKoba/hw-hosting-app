import Cookie from 'js-cookie';
import * as AuthActions from './actions.auth';
import { AUTH } from './actions.auth';

export interface AuthState {
  userData: {
    refreshToken: string,
    name: string
    photo: string
    email: string
    role: string
    id: string
  };
}

const InitialState: AuthState = {
  userData: {
    refreshToken: '',
    name: '',
    photo: '',
    email: '',
    role: 'student',
    id: ''
  }
}


export function authReducer(state = InitialState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case AuthActions.AUTH.LOGIN:
      return {
        ...state,
        userData: { ...action.payload }
      };
    case AuthActions.AUTH.LOGOUT:
      return {
        ...state,
        token: null,
        refreshToken: null,
      }
    case AuthActions.AUTH.RESOLVE_AUTH_DATA:
      return {
        ...state,
        userData: {
          ...state.userData,
          role: Cookie.get(AUTH.ROLE),
          refreshToken: Cookie.get(AUTH.REFRESH)
        }
      }
    default:
      return state;
  }

}
