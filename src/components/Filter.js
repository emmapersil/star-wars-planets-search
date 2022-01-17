import React, { useContext } from 'react';
import SWContext from '../context/SWContext';

function Filter() {
  const { filterByNumericValues, data, changeState } = useContext(SWContext);

  const handleButton = (row) => {
    const newFilterByNum = filterByNumericValues.filter(({ column }) => column !== row);
    let filter = [];
    let newFilter;
    newFilterByNum.forEach(({ column, comparison, value }) => {
      newFilter = data.filter((planet) => {
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
      filter = newFilter;
    });

    changeState({
      filter: (filter.length) ? filter : data, filterByNumericValues: newFilterByNum });
  };

  return (
    filterByNumericValues.map(({ column, comparison, value }) => (
      <p data-testid="filter" key={ column }>
        {`${column} ${comparison} ${value}`}
        {' '}
        <button type="button" onClick={ () => handleButton(column) }>X</button>
      </p>
    ))
  );
}

export default Filter;
