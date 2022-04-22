import React, { useState, useContext } from 'react';
import SelectInput from './SelectInput';
import SWContext from '../context/SWContext';
import './filterByNumber.css';

function FilterByNumber() {
  const INITIAL_STATE = { column: 'population', comparison: 'more than', value: 0 };
  const [state, setState] = useState(INITIAL_STATE);
  const { filter, changeState, filterByNumericValues } = useContext(SWContext);

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const handleButton = () => {
    const { column, comparison, value } = state;

    const filteredArray = filter.filter((planet) => {
      switch (comparison) {
      case 'more than':
        return Number(planet[column]) > value;
      case 'less than':
        return Number(planet[column]) < value;
      case 'equal to':
        return Number(planet[column]) === Number(value);
      default:
        return false;
      }
    });

    const filterObject = {
      filterByNumericValues: [
        ...filterByNumericValues,
        { column,
          comparison,
          value },
      ],
      filter: filteredArray,
    };
    changeState(filterObject);
  };

  const columnOptions = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];
  const comparisonOptions = ['more than', 'less than', 'equal to'];

  return (
    <div className="numfilter__container">
      <SelectInput
        label="Select filter: "
        name="column"
        id="column-filter"
        callback={ handleChange }
        options={ (filterByNumericValues && filterByNumericValues.length) ? (
          columnOptions.filter((option) => option !== filterByNumericValues[0].column)
        ) : columnOptions }
      />
      <SelectInput
        label="Comparision: "
        name="comparison"
        id="comparison-filter"
        callback={ handleChange }
        options={ comparisonOptions }
      />
      <input
        type="number"
        name="value"
        data-testid="value-filter"
        onChange={ handleChange }
        value={ state.value }
      />

      <button
        className="filter__btn"
        type="button"
        data-testid="button-filter"
        onClick={ handleButton }
      >
        Filter
      </button>
    </div>
  );
}

export default FilterByNumber;
