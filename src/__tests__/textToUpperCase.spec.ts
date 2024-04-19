import textToUpperCase from '../textToUpperCase';

interface TestCase {
  value: string;
  expected: string;
}

const cases: TestCase[] = [
  { value: 'very&long&string', expected: 'VERY&LONG&STRING' },
  { value: 'case', expected: 'CASE' },
  { value: 'xD', expected: 'XD' },
  { value: 'polska126', expected: 'POLSKA126' },
  { value: '', expected: '' },
  { value: ' ', expected: ' ' },
  { value: '!@#$%^&*()-=+', expected: '!@#$%^&*()-=+' },
  { value: 'żółć', expected: 'ŻÓŁĆ' },
  { value: 'UPPERCASE', expected: 'UPPERCASE' },
  { value: '1234567890', expected: '1234567890' },
];

test.each<TestCase>(cases)(
  'should return text to uppercase',
  ({ value, expected }) => {
    expect(textToUpperCase(value)).toBe(expected);
  },
);
