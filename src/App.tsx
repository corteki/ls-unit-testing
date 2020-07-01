import React, { useEffect } from 'react';
import { Select, Card } from './components';
import { biscuits, kitties } from './fixtures';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import { usersSelector } from './core/store/users/UsersSelector';
import { getUsers } from './core/store/users/UsersSlice';
import { User } from './core/models/User';

function App() {
  const dispatch = useDispatch();
  const { users, hasError, hasSucceeded, isLoading, errorMessage } = useSelector(usersSelector);
  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch]);
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
        {isLoading && <div>loading users...</div>}
        {hasError && <div>{errorMessage}</div>}
        {
          hasSucceeded &&
          users.map(({id, firstName, lastName, age}: User) => (
            <Card 
              title={firstName} 
              body={lastName} 
              footer={age.toString()}>
              <p>id: {id}</p>
            </Card>
          ))
        }
        
      </section>
    </div>
  );
}

export default App;
