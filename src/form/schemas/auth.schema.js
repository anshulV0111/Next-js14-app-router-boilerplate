import { object, string } from 'zod';

export const loginUserSchema = object({
  email: string({ required_error: 'Email is required' })
    .min(1, 'Email is required')
    .email('Invalid email or password'),
  password: string({ required_error: 'Password is required' }).min(
    1,
    'Password is required',
  ),
});

export const signupSchema = object({
  username: string({ required_error: 'Username is required' }).min(
    1,
    'Username is required',
  ),
  email: string({ required_error: 'Email is required' })
    .min(1, 'Email is required')
    .email('Invalid email', 'Email is required'),
  password: string({ required_error: 'Password is required' })
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
  confirmPassword: string({ required_error: 'Please confirm your password' })
    .min(1, 'Please confirm your password'),
  firstName: string({ required_error: 'First Name is required' })
    .min(1, 'First Name is required'),
  lastName: string({ required_error: 'Last Name is required' })
    .min(1, 'Last Name is required'),
  gender: string({ required_error: 'Gender is required', invalid_type_error: 'Please select valid gender value' })
    .min(1, 'Gender is required'),
  dateOfBirth: string({ required_error: 'Date of birth is required' })
    .date()
    .refine((data) => (
      new Date(data) <= new Date(new Date().setFullYear(new Date().getFullYear() - 18))
    ), {
      message: 'Minimum 18 years of age is required',
      path: ['dateOfBirth'],
    }),
}).refine((data) => data.confirmPassword === data.password, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

export const profileDetailsSchema = object({
  username: string({ required_error: 'Username is required' }).min(
    1,
    'Username is required',
  ),
  firstName: string({ required_error: 'First Name is required' })
    .min(1, 'First Name is required'),
  lastName: string({ required_error: 'Last Name is required' })
    .min(1, 'Last Name is required'),
  dateOfBirth: string({ required_error: 'Date of birth is required' })
    .date()
    .refine((data) => (
      new Date(data) <= new Date(new Date().setFullYear(new Date().getFullYear() - 18))
    ), {
      message: 'Minimum 18 years of age is required',
      path: ['dateOfBirth'],
    }),
});

export const changePasswordSchema = object({
  password: string({ required_error: 'Password is required' })
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
  confirmPassword: string({ required_error: 'Please confirm your password' })
    .min(1, 'Please confirm your password'),
}).refine((data) => data.confirmPassword === data.password, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});
