import * as DocumentsActions from './actions.documents';
import { Documents } from '../../types';
import { DocumentsSetAction } from './actions.documents';

export interface DocumentsState {
  studentDocuments: Documents.Document[];
}

const InitialState: DocumentsState = {
  studentDocuments: [],
};

export function documentsReducer(state = InitialState, action: DocumentsActions.DocumentsActions) {
  switch (action.type) {
    case DocumentsActions.DOCUMENTS.DOCUMENTS_SET:
      return {
        ...state,
        studentDocuments: [...action.payload]
      };
    case DocumentsActions.DOCUMENTS.DOCUMENTS_ADD:
      return {
        ...state,
        studentDocuments: [...state.studentDocuments, action.payload]
      };
    default:
      return state;
  }
};
