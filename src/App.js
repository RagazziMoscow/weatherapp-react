import React from 'react';
import './App.css';
import { Input } from './input';
import { Card } from './card';
import { useCitiesList } from './hooks/useCitiesList';

export const GlobalContext = React.createContext();

function App() {
  const [state, dispatch] = useCitiesList();
  const { citiesList } = state;

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <div className="Main">
        <Input />
        <div className='CardList'>
          {
            citiesList.map((city, index) => <Card key={index} city={city} />)
          }
        </div>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
