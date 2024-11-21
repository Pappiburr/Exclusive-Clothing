// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClExQnw8C7oJW0yvog8GkkkKRMiSOMVhw",
  authDomain: "exclusive-clothing-db.firebaseapp.com",
  projectId: "exclusive-clothing-db",
  storageBucket: "exclusive-clothing-db.firebasestorage.app",
  messagingSenderId: "816936936826",
  appId: "1:816936936826:web:d3d9cb026b9974060ca2c3",
  measurementId: "G-T2TJYHXKFE"
};
 const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

// Initialize Firebase


export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
export const db = getFirestore();


export const createUserDocumentFromAuth = async (userAuth) => {
const userDocRef = doc(db, 'users', userAuth.uid);
const userDocSnap = await getDoc(userDocRef);

console.log(userDocSnap);
console.log(userDocSnap.exists());
if(!userDocSnap.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
        await setDoc(userDocRef, {
            displayName,
            email,
            createdAt
        })
    }catch(error){
        console.log('Error creating user', error.message);
    }
}
else {
    return userDocRef
}
}


