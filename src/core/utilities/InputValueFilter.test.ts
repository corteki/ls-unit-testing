import { inputValueFilter } from './InputValueFilter';

describe('InputValueFilter', () => {

  const MOCK_VALUES = ['Margherita', 'Marinara', 'Quattro Stagioni', 'Frutti di Mare', 'Napoletana'];

  it('should return the entire list when the inputValue is an empty string', () => {
    const MOCK_INPUT_VALUE = '';

    const resulted = inputValueFilter(MOCK_VALUES, MOCK_INPUT_VALUE);
    
    expect(resulted).toEqual(MOCK_VALUES);
  });

  it('should return a list with words that contain the inputValue regardless of letter casing', () => {
    const MOCK_INPUT_VALUE = 'aR';

    const resulted = inputValueFilter(MOCK_VALUES, MOCK_INPUT_VALUE);
    const expected = ['Margherita', 'Marinara', 'Frutti di Mare'];

    expect(resulted).toEqual(expected);
  });

});
