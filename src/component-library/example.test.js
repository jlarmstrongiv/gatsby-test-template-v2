import React from 'react';
import { render } from '@testing-library/react';
import Title from './examples/Title/Title';

test('sanity', () => {
  expect(1).toBe(1);
});

test('title example', () => {
  const text = 'Hello World';
  const { getByText } = render(<Title>{text}</Title>);
  const container = getByText(text);
  expect(container).toHaveTextContent(text);
});
