import {useState, FormEvent, ChangeEvent}  from 'react';
import { AuthError, AuthErrorCodes} from 'firebase/auth';
import { useDispatch } from 'react-redux';  
import { signUpStart } from '../../store/user/user.action';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import {SignUpContainer ,Title} from './sign-up-form.styles.js';
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };
    
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(password !== confirmPassword){
            alert('Passwords do not match');
            return;
        }

        try {
            dispatch(signUpStart(email, password, displayName));
            resetFormFields();
        } catch(error) {
            if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS){
                alert('Email already in use');
            } else {
                console.log('Error Creation encountered an error', error);
            }
        }
    }
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]:value});
    };

    return (
        <SignUpContainer>
            <Title>Don't have an Account?</Title>
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
            </SignUpContainer>
    )
};

export default SignUpForm;