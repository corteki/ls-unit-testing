import React from 'react';
import { Select, Users } from './components';
import './App.scss';

function App() {
  return (
    <div className="App">
      <section className="App__container">
      <h1>With filter</h1>
        <Select
          placeholder="Choose a biscuit you like"
          options={['a', 'b']}
        />
        <h1>Without filter</h1>
        <Select
          hasFilter={false}
          placeholder="Choose a kitty to pet"
          options={['c', 'd']}
        />
        <Users/>
      </section>
    </div>
  );
}

export default App;
