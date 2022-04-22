import React, { useContext } from 'react';
import SWContext from '../context/SWContext';
import './filterByName.css';

function FilterByName() {
  const { data, changeState } = useContext(SWContext);

  const handleNameSearch = ({ target: { value } }) => {
    const filter = data.filter(({ name }) => name.includes(value));
    changeState({ filter });
  };

  return (
    <div className="name-filter__container">
      <label htmlFor="name-filter">
        <span role="img" aria-label="planet">🌕</span>
        Search by planet name:
        <input
          data-testid="name-filter"
          type="text"
          id="name-filter"
          onChange={ handleNameSearch }
        />
      </label>
    </div>
  );
}

export default FilterByName;
