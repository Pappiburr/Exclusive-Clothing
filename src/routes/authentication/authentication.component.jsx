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
            <h1>Sign In Page</h1>
                < SignInForm/>
                < SignUpForm/>
            </div>
        </div> 
    )

}
export default Authentication;