import React from 'react';

const Field = (props) => {
  const { id, labelText, type, placeholder, name, value, onChange, error } =
    props;
  return (
    <div className="mb-3">
      <label htmlFor={id}>{labelText}</label>
      <input
        className="form-control"
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error ? <div className="invalid-feedback">{error}</div> : null}
    </div>
  );
};

export default Field;
