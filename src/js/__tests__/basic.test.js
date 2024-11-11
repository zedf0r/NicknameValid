import { Validator } from '../app';

test('Test validate username', () => {
  const isValid = new Validator('zedf0r');
  expect(isValid.validateUsername()).toBe(true);
  const isValid2 = new Validator('Vas10i_l20iy')
  expect(isValid2.validateUsername()).toBe(true);
})

test('Test for the correct username for 0-4', () => {
  const isValid = new Validator('Vas1234iliy');
  expect(isValid.validateUsername()).toBe(false);
})

test('Test for the correct username for start number', () => {
  const isValid = new Validator('1Vasiliy');
  expect(isValid.validateUsername()).toBe(false);
}) 

test('Test for the correct username for final number', () => {
  const isValid = new Validator('Vasiliy1');
  expect(isValid.validateUsername()).toBe(false);
})

test('Test for the correct username dash at the end', () => {
  const isValid = new Validator('Vasiliy-');
  expect(isValid.validateUsername()).toBe(false);
}) 