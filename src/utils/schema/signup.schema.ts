import * as Yup from 'yup';

// Extend Yup with a custom method for secure password validation
Yup.addMethod(Yup.string, 'isSecurePassword', function (message) {
  return this.test('isSecurePassword', message, function (value) {
    const { path, createError } = this;
    const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    
    if (typeof value !== 'string') {
      return createError({ path, message: message || "Enter a valid password" });
    }

    return (
      passwordRegExp.test(value) || 
      createError({ path, message: message || "Enter a valid password" })
    );
  });
});

// Type declaration to extend Yup's string schema with the custom method
declare module 'yup' {
  interface StringSchema {
    isSecurePassword(message: string): this;
  }
}

const SignUpSchema = Yup.object().shape({
  name: Yup.string().required("Name required"),
  email: Yup
    .string()
    .email("Enter a valid email")
    .required("Email required"),
  password: Yup
    .string()
    .required("Password required")
    .isSecurePassword("Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special case character"),
  confirmPassword: Yup
    .string()
    .required("Confirm password required")
    .oneOf([Yup.ref("password")], "Passwords do not match"), 
  termsAndConditions: Yup
    .bool()
    .oneOf([true], "Terms and Conditions must be accepted"),
});

export default SignUpSchema;
