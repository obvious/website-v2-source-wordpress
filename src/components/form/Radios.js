import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types'
import '../../styles/checkbox.css'

const Radios = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <fieldset {...field} {...props} className={`mb-4`}>
      <legend className={`text-md border-b border-transparent text-white font-bold font-sans mb-2 ${meta.error && meta.touched && 'border-red-50 bg-red-70-alpha-10'}`}>{label}</legend>
      {props.options.map(option => <label className="custom-checkbox mb-2 block cursor-pointer">
        {option}
        <input checked={props.value === option} className={`bg-transparent border border-gray-400 rounded p-4 text-sm mr-2 my-1 font-sans`} name={props.name} value={option} type="radio" />
        <span className="dot" />
      </label>)}
    </fieldset>
  );
};

Radios.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
}

export default Radios;