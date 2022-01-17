import React from 'react';
import './App.css';
import Table from './components/Table';
import Filter from './components/Filter';
import FilterByName from './components/FilterByName';
import FilterByNumber from './components/FilterByNumber';
import SortByAsc from './components/SortByAsc';
import SWProvider from './context/SWProvider';

function App() {
  return (
    <SWProvider>
      <FilterByName />
      <FilterByNumber />
      <Filter />
      <SortByAsc />
      <Table />
    </SWProvider>
  );
}

export default App;
