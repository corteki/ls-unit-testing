import React from 'react';
import { Select } from './components';
import { biscuits, kitties } from './fixtures';
import './App.scss';

function App() {
  return (
    <div className="App">
      <section className="App__container">
        <Select
          placeholder="Choose a biscuit you like"
          options={biscuits}
        />
        <Select
          hasFilter={false}
          placeholder="Choose a kitty to pet"
          options={kitties}
        />
      </section>
    </div>
  );
}

export default App;
