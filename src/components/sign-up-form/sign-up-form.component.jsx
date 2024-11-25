import {useState}  from 'react';
import { createAuthUserWithEmailAndPassword , createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';
import {FormInput} from '../form-input/form-input.component';
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {
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
        <div>
            <h1> Sign Up With Your Email</h1>
           <form onSubmit={handleSubmit}>
            <label>Display Name</label>
            <FormInput 
            type="text"
            required 
            onChange={handleChange} 
            name="displayName"
            value={displayName}
              />

            <label>Email</label>
            <FormInput
            type="email"
            required 
            onChange={handleChange} 
            name="email" 
            value={email}
            />
            
            <label>Password</label>
            <FormInput
            type="password"
            required 
            onChange={handleChange} 
            name="password" 
            value={password}
            />

            <label>Confirm Password</label>
            <FormInput
            type="password" 
            required 
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
            />

            <button type="submit">Sign Up</button>
            </form>
            </div>
    )
};

export default SignUpForm;