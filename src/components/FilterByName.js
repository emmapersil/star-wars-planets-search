import React, { useContext } from 'react';
import SWContext from '../context/SWContext';

function FilterByName() {
  const { data, changeState } = useContext(SWContext);

  const handleNameSearch = ({ target: { value } }) => {
    const filter = data.filter(({ name }) => name.includes(value));
    changeState({ filter });
  };

  return (
    <label htmlFor="name-filter">
      <input
        data-testid="name-filter"
        type="text"
        id="name-filter"
        onChange={ handleNameSearch }
      />
    </label>
  );
}

export default FilterByName;
