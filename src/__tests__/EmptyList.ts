describe('<EmptyList/>', () => {
  beforeAll(() => console.log('before each'));
  beforeEach(() => console.log('before each'));
  afterEach(() => console.log('after each'));
  afterAll(() => console.log('after all'));
  it('should not regress', () => {
    expect(40 + 2).toEqual(42);
  })
  /*
  it.only('should not regress 1', () => {
    expect(40 + 2).toEqual(42);
  })
  it.skip('should not regress 2', () => {
    expect(40 + 2).toEqual(42);
  });
  */
  it('should call the done function after 100ms', done => {
    setTimeout(done, 100)
  });
  it('should return a promise to end the test', () =>
    new Promise(resolve => setTimeout(resolve, 100))
  );
});
