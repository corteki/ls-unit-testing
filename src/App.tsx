import React from 'react';
import { Select, Users } from './components';
import './App.scss';

const MountainRanges = ['Andes', 'Southern Great Escarpment', 'Rocky Mountains', 'Transantarctic Mountains', 'Great Dividing Range'];
const HighestPoints = ['Mount aconcagua', 'Thabana Ntlenyana', 'Mount Elbert', 'Mount Kirkpatrick', 'Mount Kosciuszko']
function App() {
  return (
    <div className="App">
      <section className="App__container">
      <h1>With filter</h1>
        <Select
          placeholder="Choose a mountain range"
          options={MountainRanges}
        />
        <h1>Without filter</h1>
        <Select
          hasFilter={false}
          placeholder="Choose a highest point"
          options={HighestPoints}
        />
        <Users/>
      </section>
    </div>
  );
}

export default App;
