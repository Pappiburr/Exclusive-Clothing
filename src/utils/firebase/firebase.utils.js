// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getAuth,  
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, 
    signOut,
    onAuthStateChanged
    
} from "firebase/auth";
import { 
    getFirestore,
    doc,
    getDoc,
    setDoc ,
    collection,
    writeBatch,
    query,
    getDocs
} from "firebase/firestore";


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

export const testFirebase = () => {
    console.log('firebaseAPP', firebaseApp);
}
export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });
    await batch.commit();
    console.log('done');
}

  export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const {title, items} = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});
    return categoryMap;
  }

export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
    if(!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userDocSnap = await getDoc(userDocRef);

if(!userDocSnap.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
        await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
            ...additionalInformation
        })
    }catch(error){
        console.log('Error creating user', error.message);
    }
}
    return userDocRef;
}
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}
export const SignInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
    
     onAuthStateChanged(auth, callback);