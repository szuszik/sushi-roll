import addTwoDigits from '../../addTwoDigits';

test('should return 4 after adding 2 and 2', () => {
  const result = addTwoDigits(2, 2);
  expect(result).toEqual(4);
});

test.failing('should return 7 after adding 3 and 5', () => {
  const result = addTwoDigits(3, 5);
  expect(result).toEqual(7);
});
