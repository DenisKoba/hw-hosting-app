import { ActionReducerMap } from '@ngrx/store';
import * as fromAuth from './auth/reducer.auth';
import * as fromDocuments from './documents/reducer.documents';

export interface AppState {
  auth: fromAuth.AuthState;
  documents: fromDocuments.DocumentsState,
};

export const AppReducer: ActionReducerMap<AppState> = {
    auth: fromAuth.authReducer,
    documents: fromDocuments.documentsReducer,
}
