import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyARLx7rXPvmeTB5KZfC_KpVvXOxh96T-Lg",
    authDomain: "whatsapp-desktop-545e2.firebaseapp.com",
    projectId: "whatsapp-desktop-545e2",
    storageBucket: "whatsapp-desktop-545e2.appspot.com",
    messagingSenderId: "656079464599",
    appId: "1:656079464599:web:b8770f0589e788dabc21d2"
};

const app = !firebase.apps.length 
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

    const db = app.firestore();
    const auth = app.auth();
    const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };