import React from 'react';
import { render } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { JSDOM } from 'jsdom';
import Calculator from '../components/Calculator/Calculator';

const dom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost/',
});
global.window = dom.window;
global.document = dom.window.document;
global.navigator = {
  userAgent: 'node.js',
};

describe('Calculator', () => {
  test('renders correctly', () => {
    const { container } = render(<Calculator />);
    expect(container).toMatchSnapshot();
  });
});
