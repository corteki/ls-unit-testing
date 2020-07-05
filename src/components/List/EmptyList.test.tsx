import React from 'react';
import renderer from 'react-test-renderer';
import { EmptyList } from './EmptyList';

describe('<EmptyList/>', () => {
  it('should render a single option that displays the message "No results"', () => {
    const tree = renderer
    .create(
      <EmptyList message="No results"/>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
