import React from 'react';
import './App.scss';
import { Select } from './components/Select/Select';

const biscuits = [
  'Chocolat chips',
  'Havermout koekjes',
  'Brownies',
  'Zandkoekjes',
  'Tarteletjes',
  'Cocoskoekjes'
];

const kitties = [
  'Russian Blue',
  'Ragdoll',
  'Turtios cat',
  'Black cat',
  'Neblung',
  'Norwegian Forest Cat',
  'Ginger Tabby'
]

function App() {
  return (
    <div className="App">
      <section className="App__container">
        <Select
          placeholder="choose a biscuit you like"
          options={biscuits}
        />
        <Select
          placeholder="choose a kitty to pet"
          options={kitties}
        />
      </section>
    </div>
  );
}

export default App;
