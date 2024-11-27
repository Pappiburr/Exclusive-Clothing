import {useState}  from 'react';
import Button from '../button/button.component';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import './sign-in-form.styles.scss';
const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password, } = formFields;

    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
      

        try{
  
            resetFormFields();
        } catch (error) {
            console.error('Error signing in', error);
        }
    };
    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormFields({...formFields, [name]:value});
    };

    return (
        <div className="sign-In-container" >
            <h2>Already have an account?</h2>
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

            <Button type="signIn">Sign In</Button>
            </form>
            </div>
    )
};


export default SignInForm;