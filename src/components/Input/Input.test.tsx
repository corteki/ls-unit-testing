import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Input } from "./Input";

describe('<Input/>', () => {

  const MOCK_HANDLE_INPUT = jest.fn();
  const MOCK_HANDLE_CLEAR = jest.fn();
  const MOCK_HANDLE_CLICK = jest.fn();

  beforeEach(() => {
    render(
      <Input 
        value="MockValue" 
        placeholder="MockPlaceholder"
        onInput={MOCK_HANDLE_INPUT}
        onClear={MOCK_HANDLE_CLEAR}
        onClick={MOCK_HANDLE_CLICK}
      />
    );
  });

  it('should render a empty input field without a clear icon and with a down arrow icon', () => {
    const tree = renderer
      .create(
        <Input 
          value="" 
          placeholder="MockPlaceholder"
          onInput={MOCK_HANDLE_INPUT}
          onClear={MOCK_HANDLE_CLEAR}
          onClick={MOCK_HANDLE_CLICK}
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

    expect(MOCK_HANDLE_INPUT).toHaveBeenCalled();
  });

  it('should call the onClear handler when the clear icon is clicked', () => {
    const clearIcon = screen.getByTestId('clear');

    fireEvent.click(clearIcon);

    expect(MOCK_HANDLE_CLEAR).toHaveBeenCalled();
  });

  it('should call the onClick handler when the input field is clicked', () => {
    const input = screen.getByPlaceholderText(/MockPlaceholder/i);

    fireEvent.click(input);

    expect(MOCK_HANDLE_CLICK).toHaveBeenCalled();
  });

});
