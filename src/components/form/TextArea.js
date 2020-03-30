import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types'

const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <textarea className={`bg-transparent border border-gray-400 rounded p-4 text-sm w-full my-1 font-sans ${meta.error && meta.touched && 'border-red-50 bg-red-70-alpha-10'}`} {...field} {...props} />
    </>
  );
};

TextArea.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default TextArea;