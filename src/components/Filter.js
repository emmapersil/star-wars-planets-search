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
      filter = newFilter;
    });

    changeState({
      filter: (filter.length) ? filter : data, filterByNumericValues: newFilterByNum });
  };

  return (
    filterByNumericValues.map(({ column, comparison, value }) => (
      <div data-testid="filter" key={ column }>
        {`${column} ${comparison} ${value}`}
        {' '}
        <button type="button" onClick={ () => handleButton(column) }>
          Clear filters
        </button>
      </div>
    ))
  );
}

export default Filter;
