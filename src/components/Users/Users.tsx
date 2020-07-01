import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../core/store/users/UsersSlice';
import { usersSelector } from '../../core/store/users/UsersSelector';
import { Card } from '../Card/Card';
import { User } from '../../core/models/User';

export const Users: FC = () => {
  const dispatch = useDispatch();
  const { users, hasError, hasSucceeded, isLoading, errorMessage } = useSelector(usersSelector);
  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch]);

  return (
    <section>
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
  );
}