import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { List } from "./List";

describe('<List/>', () => {

  const MOCK_VALUES = ['mock-1', 'mock-2'];
  const MOCK_HANDLE_CLICK = jest.fn();

  beforeEach(() => render(<List values={MOCK_VALUES} onClick={MOCK_HANDLE_CLICK}/>));

  it('should render an empty list with the "No results" message when there are no values provided', () => {
    const {getByText} = render(<List values={[]} onClick={MOCK_HANDLE_CLICK}/>);

    const emptyList = getByText(/No result/);

    expect(emptyList).toBeDefined();
  });

  it('should display a list of two options when there are values provided', () => {
    const options = screen.getAllByTestId("option");

    expect(options).toHaveLength(2)
  });

  it('should call the onClick handler when an option is clicked', () => {
    const option = screen.getByText(/mock-1/);

    fireEvent.click(option);

    expect(MOCK_HANDLE_CLICK).toHaveBeenCalled();
  });
});
