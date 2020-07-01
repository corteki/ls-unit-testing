import React from 'react';
import { Select, Users } from './components';
import { biscuits, kitties } from './fixtures';
import './App.scss';

function App() {
  return (
    <div className="App">
      <section className="App__container">
      <h1>With filter</h1>
        <Select
          placeholder="Choose a biscuit you like"
          options={biscuits}
        />
        <h1>Without filter</h1>
        <Select
          hasFilter={false}
          placeholder="Choose a kitty to pet"
          options={kitties}
        />
        <Users/>
      </section>
    </div>
  );
}

export default App;
