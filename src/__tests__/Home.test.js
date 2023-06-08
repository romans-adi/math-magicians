import React from 'react';
import { render } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { JSDOM } from 'jsdom';
import Home from '../components/Home/Home';

const dom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost/',
});
global.window = dom.window;
global.document = dom.window.document;
global.navigator = {
  userAgent: 'node.js',
};

describe('Home', () => {
  test('renders correctly', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
