import React, { useState, useContext } from 'react';
import SelectInput from './SelectInput';
import SWContext from '../context/SWContext';

function FilterByNumber() {
  const INITIAL_STATE = { column: 'population', comparison: 'maior que', value: 0 };
  const [state, setState] = useState(INITIAL_STATE);
  const { filter, changeState, filterByNumericValues } = useContext(SWContext);

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const handleButton = () => {
    const { column, comparison, value } = state;

    const filteredArray = filter.filter((planet) => {
      switch (comparison) {
      case 'maior que':
        return Number(planet[column]) > value;
      case 'menor que':
        return Number(planet[column]) < value;
      case 'igual a':
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
  const comparisonOptions = ['maior que', 'menor que', 'igual a'];

  return (
    <div>
      <SelectInput
        name="column"
        id="column-filter"
        callback={ handleChange }
        options={ (filterByNumericValues && filterByNumericValues.length) ? (
          columnOptions.filter((option) => option !== filterByNumericValues[0].column)
        ) : columnOptions }
      />
      <SelectInput
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
        type="button"
        data-testid="button-filter"
        onClick={ handleButton }
      >
        Filtrar
      </button>
    </div>
  );
}

export default FilterByNumber;
