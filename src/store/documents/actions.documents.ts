import { Action } from '@ngrx/store';
import * as fromRoot from '../app.reducer';
import { Documents } from '../../types';

export enum DOCUMENTS {
  DOCUMENTS_SET = 'DOCUMENTS_SET',
  DOCUMENTS_DELETE = 'DOCUMENTS_DELETE',
  DOCUMENTS_ADD = 'DOCUMENTS_ADD',
  DOCUMENTS_REPLACE = 'DOCUMENTS_REPLACE'
}

export class DocumentsSetAction implements Action {
  readonly type = DOCUMENTS.DOCUMENTS_SET;
  // @ts-ignore
  constructor(public payload: Documents.Document[] ) {}
}

export class DocumentsAddAction implements Action {
  readonly type = DOCUMENTS.DOCUMENTS_ADD;
  // @ts-ignore
  constructor(public payload: Documents.Document ) {}
}

export type DocumentsActions = DocumentsSetAction | DocumentsAddAction;
