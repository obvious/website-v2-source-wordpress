import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types'

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <input className={`focus:outline-none bg-transparent border border-gray-400 rounded p-4 text-sm w-full my-1 font-sans ${meta.error && meta.touched && 'border-red-50 bg-red-70-alpha-10'}`} {...field} {...props} />
    </>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'email'])
}

Input.defaultProps = {
  placeholder: '',
  type: 'text'
}

export default Input;