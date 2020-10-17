import React from 'react';
import { render } from '@testing-library/react';
import App from 'd:/Desctop/My-budget-app-master/src/App';

// eslint-disable-next-line no-undef
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  // eslint-disable-next-line no-undef
  expect(linkElement).toBeInTheDocument();
});
