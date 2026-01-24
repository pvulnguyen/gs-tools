import {expect, test} from '@rstest/core';
import {render, screen} from '@testing-library/react';
import {App} from '../src/App';

test('renders the main page', () => {
  const logo = "Precinct";
  render(<App />);
  expect(screen.getByText(logo)).toBeInTheDocument();
});
