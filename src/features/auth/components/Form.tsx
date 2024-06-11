import React from 'react';
import { Formik, Form as FormikForm } from 'formik';
import * as Yup from 'yup';
import TextInput from './TextInput';
import LoadingSpinner from '../../../shared/components/LoadingSpinner';

interface FormProps {
  title: string;
  buttonText: string;
  onSubmit: (formData: { username: string; password: string; firstName?: string; lastName?: string }) => Promise<void>;
  loading: boolean;
  isRegistration?: boolean;
}

const Form: React.FC<FormProps> = ({ title, buttonText, onSubmit, loading, isRegistration = false }) => {
  const initialValues = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    ...(isRegistration && {
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
    }),
  });

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
        <FormikForm className="max-w-md mx-auto mt-8 p-4 py-8 bg-white rounded-lg shadow-md min-w-[360px]">
          <h1 className="text-dark-200 font-bold text-center text-2xl mb-4">{title}</h1>
          {isRegistration && (
            <>
              <TextInput label="First Name:" name="firstName" type="text" />
              <TextInput label="Last Name:" name="lastName" type="text" />
            </>
          )}
          <TextInput label="Email:" name="username" type="email" />
          <TextInput label="Password:" name="password" type="password" />
          <button
            type="submit"
            className="w-full bg-primary-500 text-white font-bold py-2 min-h-[39px] px-4 rounded-lg hover:bg-primary-600 focus:outline-none duration-700 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
            disabled={isSubmitting || loading}
          >
            {isSubmitting || loading ? <LoadingSpinner /> : buttonText}
          </button>
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
