import logo from './logo.svg';
import './App.css';

import { Input } from './input';
import { Card } from './card';

function App() {
  return (
    <div className="Main">
      <Input />
      <div className='CardList'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
