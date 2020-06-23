export const inputValueFilter = (values: Array<string>, inputValue: string) => 
  values.filter(value => value.toLowerCase().includes(inputValue.toLowerCase()));