import React from 'react';
import { Field, ErrorMessage } from 'formik';

interface TextInputProps {
  label: string;
  name: string;
  type?: string;
}

const TextInput: React.FC<TextInputProps> = ({ label, name, type = 'text' }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <Field
        id={name}
        name={name}
        type={type}
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
      />
      <ErrorMessage name={name} component="div" className="text-red-500 text-sm mt-1" />
    </div>
  );
};

export default TextInput;
