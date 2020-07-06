import { inputValueFilter } from './InputValueFilter';
import { MOCK_VALUES, MOCK_EMPTY_VALUE, MOCK_CAPITALIZED_VALUE } from './fixtures';

describe('InputValueFilter', () => {

  it('should return the entire list when the inputValue is an empty string', () => {
    const resulted = inputValueFilter(MOCK_VALUES, MOCK_EMPTY_VALUE);
    
    expect(resulted).toEqual(MOCK_VALUES);
  });

  it('should return a list with words that contain the inputValue regardless of letter casing', () => {
    const resulted = inputValueFilter(MOCK_VALUES, MOCK_CAPITALIZED_VALUE);
    const expected = ['Margherita', 'Marinara', 'Frutti di Mare'];

    expect(resulted).toEqual(expected);
  });

});
