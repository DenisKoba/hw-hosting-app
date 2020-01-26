const PROJECT_ID = 'homework-ee976'
const API_KEY = 'AIzaSyAnuNAJE-V0VgeavyIr1i1QfBDWaQREMF0'
const AUTH_DOMAIN = `${PROJECT_ID}.firebaseapp.com`
const DATABASE_URL = `https://${PROJECT_ID}.firebaseio.com`
const STORAGE_BUCKET = `${PROJECT_ID}.appspot.com`
const SENDER_ID = '52818416586'

export const environment = {
  production: false,
  firebase: {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: SENDER_ID,
  }
}
