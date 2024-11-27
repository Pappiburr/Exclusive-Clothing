import {signInWithGooglePopUp , createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import  SignUpForm  from '../../components/sign-up-form/sign-up-form.component'; 
import SignInForm from '../../components/sign-in-form/sign-in-form.component';   

const Authentication = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopUp();
        const userDocRef = await createUserDocumentFromAuth(user);

    }
    
    return (
        <div> 
            <div>
            <h1>Sign In</h1>
                <button onClick={logGoogleUser}>Sign in with Google</button>
                < SignInForm/>
            </div>
            <div>
                <h1>Sign Up</h1>
                <button onClick={logGoogleUser}>Sign in with Google</button>
                < SignUpForm/>
                </div>
        </div> 
    )

}
export default Authentication;