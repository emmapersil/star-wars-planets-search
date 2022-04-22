import React from 'react';
import PropTypes from 'prop-types';
import './selectInput.css';

const SelectInput = ({ name, id, callback, options, label }) => (
  <div className="select__container">
    <label htmlFor={ id }>
      { label }
      <select
        name={ name }
        id={ id }
        data-testid={ id }
        onChange={ callback }
      >
        { options.map((option) => (
          <option key={ option } value={ option }>{ option }</option>
        )) }
      </select>
    </label>
  </div>
);

SelectInput.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  callback: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

export default SelectInput;
