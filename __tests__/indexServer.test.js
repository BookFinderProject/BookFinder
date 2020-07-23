
import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';



test('It adds two numbers', () => {
  expect(1 + 1).toBe(2);
});
