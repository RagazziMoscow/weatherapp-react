import './App.css';

import { Input } from './input';
import { Card } from './card';
import { useCitiesList } from './hooks/useCitiesList';

function App() {
  const [cities, setCitiesList] = useCitiesList();

  return (
    <div className="Main">
      <Input setCitiesList={setCitiesList} />
      <div className='CardList'>
        {
          cities.map((city, index) => <Card key={index} city={city} />)
        }
      </div>
    </div>
  );
}

export default App;
