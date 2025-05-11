// Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDSA9z4fJ1Z6CsiKSJyZGRNTIl3JCdK8oo",
    authDomain: "helthcare-website-350a0.firebaseapp.com",
    projectId: "helthcare-website-350a0",
    storageBucket: "helthcare-website-350a0.firebasestorage.app",
    messagingSenderId: "935237957042",
    appId: "1:935237957042:web:1992933291e51d18d7a0ab",
    measurementId: "G-VZK8E3FP1P"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Authentication functions
const auth = firebase.auth();

// Sign in with email and password
function signInWithEmailAndPassword(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
}

// Create user with email and password
function createUserWithEmailAndPassword(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
}

// Sign out
function signOut() {
    return auth.signOut();
}

// Get current user
function getCurrentUser() {
    return auth.currentUser;
}

// Check auth state
auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in
        console.log('User is signed in:', user.email);
    } else {
        // User is signed out
        console.log('User is signed out');
    }
}); 