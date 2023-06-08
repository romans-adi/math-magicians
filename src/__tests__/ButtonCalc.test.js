import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { JSDOM } from 'jsdom';
import { render } from '@testing-library/react';
import ButtonCalc from '../components/Calculator/ButtonCalc/ButtonCalc';

const dom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost/',
});
global.window = dom.window;
global.document = dom.window.document;
global.navigator = {
  userAgent: 'node.js',
};

describe('ButtonCalc', () => {
  test('renders correctly', () => {
    const onClick = jest.fn();
    const color = 'my-color';
    const className = 'my-class';
    const { container } = render(
      <ButtonCalc onClick={onClick} color={color} className={className}>
        Bu Bu Button
      </ButtonCalc>,
    );
    expect(container).toMatchSnapshot();
  });
});
