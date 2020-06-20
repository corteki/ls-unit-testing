import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Input } from "./Input";

describe('<Input/>', () => {

  const MockHandleInput = jest.fn();
  const MockHandleClear = jest.fn();
  const MockHandleClick = jest.fn();

  beforeEach(() => {
    render(
      <Input 
        value="MockValue" 
        placeholder="MockPlaceholder"
        onInput={MockHandleInput}
        onClear={MockHandleClear}
        onClick={MockHandleClick}
      />
    );
  });

  it('should render a empty input field without a clear icon and with uudown arrow icon', () => {
    const tree = renderer
      .create(
        <Input 
          value="" 
          placeholder="MockPlaceholder"
          onInput={MockHandleInput}
          onClear={MockHandleClear}
          onClick={MockHandleClick}
        />
      ).toJSON();

      expect(tree).toMatchSnapshot();
  });

  it('should render with a placeholder by default and render the value', () => {
    const input = screen.getByPlaceholderText(/MockPlaceholder/i);
    expect(input).toHaveValue('MockValue');
  });

  it('should call the onInput handler when the input field is filled in', () => {
    const input = screen.getByPlaceholderText(/MockPlaceholder/i);
    const mockEvent = { target: { value: 'MockInput' } };

    fireEvent.focus(input);
    fireEvent.change(input, mockEvent);

    expect(MockHandleInput).toHaveBeenCalled();
  });

  it('should call the onClear handler when the clear icon is clicked', () => {
    const clearIcon = screen.getByTestId('clear');

    fireEvent.click(clearIcon);

    expect(MockHandleClear).toHaveBeenCalled();
  });

  it('should call the onClick handler when the input field is clicked', () => {
    const input = screen.getByPlaceholderText(/MockPlaceholder/i);

    fireEvent.click(input);

    expect(MockHandleClick).toHaveBeenCalled();
  });

});
