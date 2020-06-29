export default {
  get: jest.fn(() => Promise.resolve({ data: [{id: 1, firstName: 'bob', lastName: 'martin', age: 70}] }))
}