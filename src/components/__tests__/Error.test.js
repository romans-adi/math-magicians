import React from 'react';
import { render } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { JSDOM } from 'jsdom';
import Error from '../Quote/states/Error';

const dom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost/',
});
global.window = dom.window;
global.document = dom.window.document;
global.navigator = {
  userAgent: 'node.js',
};

test('renders correctly', () => {
  const error = 'Some error message';
  const { container } = render(<Error error={error} />);
  expect(container).toMatchInlineSnapshot(`
<div>
  <p>
    Error:
    Some error message
  </p>
</div>
`);
});
