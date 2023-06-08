import React from 'react';
import { render } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { JSDOM } from 'jsdom';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom/extend-expect';
import Quote from '../components/Quote/Quote';

const dom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost/',
});
global.window = dom.window;
global.document = dom.window.document;
global.navigator = {
  userAgent: 'node.js',
};

jest.mock('../components/Quote/useQuoteData', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    data: [
      { quote: 'Hello', author: 'Author' },
    ],
    loading: false,
    error: null,
  })),
}));

test('renders quote', () => {
  const { getByText } = render(<Quote />);
  const quoteText = getByText(/Hello/i);
  const quoteAuthor = getByText(/Author/i);
  expect(quoteText).toBeInTheDocument();
  expect(quoteAuthor).toBeInTheDocument();
});
