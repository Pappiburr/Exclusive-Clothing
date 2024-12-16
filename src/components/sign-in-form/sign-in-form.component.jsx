import {useState}  from 'react';
import Button from '../button/button.component';
import { createUserDocumentFromAuth ,SignInAuthUserWithEmailAndPassword} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import { signInWithGooglePopUp } from '../../utils/firebase/firebase.utils';
import {SignInContainer, Title, ButtonsContainer}  from './sign-in-form.styles.jsx';
const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password, } = formFields;


    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
       await signInWithGooglePopUp();
        

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
      

        try {
            const { user } = await SignInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
          } catch (error) {
           switch (error.code)
              {
                case 'auth/user-not-found':
                     alert('User not found');
                     break;
                 case 'auth/wrong-password':
                      alert('Wrong password');
                      break;
                 default:
                      alert('An error occurred');
                      break;
              }
           console.log('Error encountered an error', error.message);
        }
    };
    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormFields({...formFields, [name]:value});
    };

    return (
        <SignInContainer>
            <Title>Already have an account?</Title>
           <span>Sign In With Your Email</span>
           <form onSubmit={handleSubmit}>
            
            

            
            <FormInput
            label="Email"
            type="email"
            required 
            onChange={handleChange} 
            name="email" 
            value={email}
            />
            
           
            <FormInput
            label="Password"
            type="password"
            required 
            onChange={handleChange} 
            name="password" 
            value={password}
            />
            <ButtonsContainer>
                <Button type="signIn">Sign In</Button>
                <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google Sign In</Button>
            </ButtonsContainer>
            </form>
            </SignInContainer>
    )
};


export default SignInForm;