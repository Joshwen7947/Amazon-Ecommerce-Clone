import firebase from 'firebase';
// import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyD_b1zM7MoBWmtFfxPiwEoun4whYtRLmLI',
	authDomain: 'clone-c855f.firebaseapp.com',
	projectId: 'clone-c855f',
	storageBucket: 'clone-c855f.appspot.com',
	messagingSenderId: '935119502196',
	appId: '1:935119502196:web:4272828e7f9c245caf4a21',
	measurementId: 'G-NW0KKHMNTK',
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
