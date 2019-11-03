// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

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
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: SENDER_ID,
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
