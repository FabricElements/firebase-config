/**
 * Basic firebase init for FabricElements
 */
(function() {
  'use strict';
  const firebase = window.firebase;
  if (typeof firebase === 'undefined') {
    throw new Error('hosting/init-error: Firebase SDK not detected.');
  }
  // Initialize Firebase
  firebase.initializeApp({
    apiKey: 'AIzaSyCJRNdR0eodnswyi8MHCtF1YOjY235mhM8',
    authDomain: 'fabricelements.firebaseapp.com',
    databaseURL: 'https://fabricelements.firebaseio.com',
    projectId: 'fabricelements',
    storageBucket: 'fabricelements.appspot.com',
    messagingSenderId: '908593247251',
  });
  // set data property on dom-bind
  let autobind = document.querySelector('dom-bind');
  if (autobind) {
    firebase.auth().onAuthStateChanged((user) => {
      autobind.user = user;
      autobind.signedIn = !(!user);
    });
  }
})();
