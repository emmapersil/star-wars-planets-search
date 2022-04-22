import React, { useState, useContext } from 'react';
import SelectInput from './SelectInput';
import SWContext from '../context/SWContext';
import './sortByAsc.css';

function SortByAsc() {
  const INITIAL_STATE = { columnSort: 'population', sortInput: 'ASC' };
  const [state, setState] = useState(INITIAL_STATE);
  const { changeState, filter } = useContext(SWContext);

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const sortOptions = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];

  const handleButton = () => {
    const { columnSort, sortInput } = state;
    let newFilter;
    switch (sortInput) {
    case 'ASC':
      newFilter = filter.sort((a, b) => Number(a[columnSort]) - Number(b[columnSort]));
      break;
    case 'DESC':
      newFilter = filter.sort((a, b) => Number(b[columnSort]) - Number(a[columnSort]));
      break;
    default:
      break;
    }
    changeState({ filter: newFilter });
  };

  return (
    <div className="ascfilter__container">
      <SelectInput
        label="Order by: "
        id="column-sort"
        name="columnSort"
        options={ sortOptions }
        callback={ handleChange }
      />

      <label htmlFor="asc">
        Ascendent
        <input
          className="radio__input"
          type="radio"
          onChange={ handleChange }
          value="ASC"
          name="sortInput"
          data-testid="column-sort-input-asc"
          id="asc"
          checked={ state.sortInput === 'ASC' }
        />
      </label>
      <label htmlFor="desc">
        Descendent
        <input
          className="radio__input"
          type="radio"
          onChange={ handleChange }
          value="DESC"
          name="sortInput"
          data-testid="column-sort-input-desc"
          id="desc"
          checked={ state.sortInput === 'DESC' }
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ handleButton }
      >
        Order
      </button>
    </div>
  );
}

export default SortByAsc;
