import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyBODb9d0c65UM1wJ6hchlWhsBL6AcLO7oQ',
  authDomain: 'ecom-db-eafd4.firebaseapp.com',
  projectId: 'ecom-db-eafd4',
  storageBucket: 'ecom-db-eafd4.appspot.com',
  messagingSenderId: '745135815071',
  appId: '1:745135815071:web:c52d00a0912d11bfde25aa',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
