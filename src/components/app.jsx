import React from 'react';
import CityList from '../containers/city-list.jsx'
import ActiveCity from '../containers/active-city.jsx'
const App = () => {
  return (
    <div className="app">
      <CityList />
      <ActiveCity />
    </div>
  );
};

export default App;
