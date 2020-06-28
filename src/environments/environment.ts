// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  BREAKING_BAD_API: 'https://www.breakingbadapi.com/api',
  firebaseConfig: {
    apiKey: "AIzaSyBY6iLUrHod8E3lCeKz64rNBQz7eNPEzpw",
    authDomain: "breaking-bad-api.firebaseapp.com",
    databaseURL: "https://breaking-bad-api.firebaseio.com",
    projectId: "breaking-bad-api",
    storageBucket: "breaking-bad-api.appspot.com",
    messagingSenderId: "361762767967",
    appId: "1:361762767967:web:82e15eb0412593c86507ea",
    measurementId: "G-9C217ZK32X"
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
