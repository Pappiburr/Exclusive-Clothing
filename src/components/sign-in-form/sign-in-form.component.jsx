import {useState}  from 'react';
import Button from '../button/button.component';
import { createAuthUserWithEmailAndPassword , createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import './sign-In-form.styles.scss';
const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            alert('Passwords do not match');
            return;
        }

        try{
           const { user } = await createAuthUserWithEmailAndPassword(email, password);
            setFormFields(defaultFormFields);
            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();
        }catch(error){
            if (error.code === 'auth/email-already-in-use'){
                alert('Email already in use');
            }
            console.log('Error Creation encountered an error', error.message);
        }
    }
    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormFields({...formFields, [name]:value});
    };

    return (
        <div className="sign-In-container" >
            <h2>Don't have an Account?</h2>
           <span>Sign Up With Your Email</span>
           <form onSubmit={handleSubmit}>
            
            <FormInput 
            label="Display Name"
            type="text"
            required 
            onChange={handleChange} 
            name="displayName"
            value={displayName}
              />

            
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

          
            <FormInput
            label="Confirm Password"
            type="password" 
            required 
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
            />

            <Button type="submit">Sign Up</Button>
            </form>
            </div>
    )
};

export default SignInForm;