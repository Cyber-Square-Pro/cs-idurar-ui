import * as Yup from 'yup';

// Define your validation schema
export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  password: Yup.string()
    .required('Email is required'),
  
});
