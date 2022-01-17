import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchStarWarsPlanets from '../services';
import SWContext from './SWContext';

const SWProvider = ({ children }) => {
  const [state, setState] = useState({ data: [], filter: [], filterByNumericValues: [] });

  const changeState = (data) => {
    setState({ ...state, ...data });
  };

  useEffect(() => {
    fetchStarWarsPlanets().then((data) => {
      const sortByName = (x, y) => {
        const one = 1;
        const noOne = -1; // noOne, noOne, noOne, Can get in the way of what I'm feeling
        if (x.name < y.name) return noOne;
        if (x.name > y.name) return one;
        return 0;
      };
      setState({ data, filter: data.sort(sortByName), filterByNumericValues: [] });
    });
  }, []);
  const context = {
    ...state,
    changeState,
  };

  return (
    <SWContext.Provider value={ context }>
      { children }
    </SWContext.Provider>
  );
};

SWProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default SWProvider;
