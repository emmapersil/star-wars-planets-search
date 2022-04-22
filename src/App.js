import React from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import Filter from './components/Filter';
import FilterByName from './components/FilterByName';
import FilterByNumber from './components/FilterByNumber';
import SortByAsc from './components/SortByAsc';
import Footer from './components/Footer';
import SWProvider from './context/SWProvider';

function App() {
  return (
    <SWProvider>
      <Header />
      <FilterByName />
      <FilterByNumber />
      <Filter />
      <SortByAsc />
      <Table />
      <Footer />
    </SWProvider>
  );
}

export default App;
