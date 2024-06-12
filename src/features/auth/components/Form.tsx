import React from 'react';
import { Formik, Form as FormikForm } from 'formik';
import { loginValidationSchema, registrationValidationSchema } from '../../../core/validation/validationSchema';
import TextInput from './TextInput';
import LoadingSpinner from '../../../shared/components/LoadingSpinner';
import { Link } from '@tanstack/react-router';

interface FormProps {
  title: string;
  buttonText: string;
  onSubmit: (formData: { email: string; password: string; firstName?: string; lastName?: string }) => Promise<void>;
  loading: boolean;
  isRegistration?: boolean;
  errorText: null | string;
}

const Form: React.FC<FormProps> = ({ title, buttonText, onSubmit, loading, isRegistration = false, errorText }) => {
  const initialValues = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  };

  const validationSchema = isRegistration ? registrationValidationSchema : loginValidationSchema;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        await onSubmit(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <FormikForm className="max-w-md mx-auto mt-8 p-4 pt-8 pb-4 bg-white rounded-lg shadow-md min-w-[360px]">
          <h1 className="text-dark-200 font-bold text-center text-2xl mb-4">{title}</h1>
          {isRegistration && (
            <div className="flex gap-4">
              <TextInput label="First Name:" name="firstName" type="text" />
              <TextInput label="Last Name:" name="lastName" type="text" />
            </div>
          )}
          <TextInput label="Email:" name="email" type="email" />
          <TextInput label="Password:" name="password" type="password" />
          <button
            type="submit"
            className="w-full bg-primary-500 text-white font-bold py-2 min-h-[39px] px-4 rounded-lg hover:bg-primary-600 focus:outline-none duration-700 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 flex justify-center"
            disabled={isSubmitting || loading}
          >
            {isSubmitting || loading ? <LoadingSpinner /> : buttonText}
          </button>
          <div className="mt-4 text-center">
            <p className="flex gap-2 justify-center">
              {isRegistration ? (
                <>
                  Already have an account?
                  <Link to="/login" className="text-primary-500">
                    Login
                  </Link>
                </>
              ) : (
                <>
                  Don't have an account?
                  <Link to="/registration" className="text-primary-500">
                    Register
                  </Link>
                </>
              )}
            </p>
          </div>
          {errorText && <div className="bg-red-100 anim-opacity mt-4 p-2 rounded-sm">{errorText}</div>}
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
