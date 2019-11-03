import Cookie from 'js-cookie';
import * as AuthActions from './actions.auth';
import {AUTH} from './actions.auth';

export interface State {
  userData: {
    refreshToken: string,
    name: string
    photo: string
    email: string
    role: string
  };
}

const InitialState: State = {
  userData: {
    refreshToken: '',
    name: '',
    photo: '',
    email: '',
    role: 'student',
  }
}


export const authReducer = (state = InitialState, action: AuthActions.AuthActions) => {
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
