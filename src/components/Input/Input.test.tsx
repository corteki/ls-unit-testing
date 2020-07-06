import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Input } from "./Input";
import { 
  MOCK_HANDLE_INPUT, MOCK_HANDLE_CLEAR, MOCK_HANDLE_CLICK,
  MOCK_DEFAULT_VALUE, MOCK_DEFAULT_PLACEHOLDER, MOCK_EMPTY_VALUE, MOCK_INPUT_EVENT
} from './fixtures';

describe('<Input/>', () => {

  beforeEach(() => {
    render(
      <Input 
        value={MOCK_DEFAULT_VALUE} 
        placeholder={MOCK_DEFAULT_PLACEHOLDER}
        onInput={MOCK_HANDLE_INPUT}
        onClear={MOCK_HANDLE_CLEAR}
        onClick={MOCK_HANDLE_CLICK}
      />
    );
  });

  it('should render an empty input field without a clear icon and with a down arrow icon', () => {
    const tree = renderer
      .create(
        <Input 
          value={MOCK_EMPTY_VALUE} 
          placeholder={MOCK_DEFAULT_PLACEHOLDER}
          onInput={MOCK_HANDLE_INPUT}
          onClear={MOCK_HANDLE_CLEAR}
          onClick={MOCK_HANDLE_CLICK}
        />
      ).toJSON();
      expect(tree).toMatchSnapshot();
  });

  /**
   * '@testing-library/react' allows to avoid testing implementation details
   */
  it('should render with a placeholder by default and render the value', () => {
    const input = screen.getByPlaceholderText(/MockPlaceholder/i);

    expect(input).toHaveValue(MOCK_DEFAULT_VALUE);
  });

  it('should call the onInput handler when the input field is filled in', () => {
    const input = screen.getByPlaceholderText(/MockPlaceholder/i);

    fireEvent.focus(input);
    fireEvent.change(input, MOCK_INPUT_EVENT);

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
