import * as yup from 'yup';

// password validation min 6 characters and max 20 characters and must contain at least one uppercase letter, one lowercase letter, one number and one special character
const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;

export const basicSchema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(6).max(20).matches(passwordRules, 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'),
});