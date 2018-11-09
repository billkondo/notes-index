import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

const InputText = ({ label, name, onChange, value, placeholder, type, error }) => (
  <div className="sign-up-input-text">
    <div className={classnames('sign-up-label', { 'sign-up-invalid-label': error })}> {label} </div>
    <input
      className={classnames('sign-up-input', { 'sign-up-invalid-input': error })}
      name={name}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      type={type}
    />

    {error && <div className="sign-up-error-message"> {error} </div>}
  </div>
);

InputText.propTypes = {
  label: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
  placeholder: propTypes.string,
  type: propTypes.string.isRequired,
  error: propTypes.string.isRequired
};

InputText.defaultProps = {
  error: ''
};

export default InputText;
