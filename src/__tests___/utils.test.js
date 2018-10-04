import {
  sum, 
  capitialize,
} from '../utils';

it ('adds two numbers', () => {
  const expected = 5;
  const actual = sum(2,3)
  expect(actual).toEqual(expected)
})

it ('capitalizes a string', () => {
  const expected = "Hello world";
  const actual = capitialize("hello world")
  expect(actual).toEqual(expected)
})