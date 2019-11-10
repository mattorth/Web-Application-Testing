import React from 'react';
import * as rtl from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
});

test('it displays the text Strikes: 0', () => {
  const container = render(<App />);
  container.getByText('Strikes: 0');
})

test('it displays the text Balls: 0', () => {
  const { getByText } = render(<App />);
  getByText('Balls: 0');
})