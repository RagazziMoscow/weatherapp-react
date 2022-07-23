import { render } from '@testing-library/react';

import { InputTag } from './InputTag';

test('renders input', () => {
  const { container, rerender } = render(
    <InputTag {...{ handleOnChange: () => { }, inputRef: null, inputValue: '' }} />
  );
  const input = container.querySelector('input');

  expect(input.value).toEqual('');
  rerender(<InputTag {...{ handleOnChange: () => { }, inputRef: null, inputValue: 'London' }} />);
  expect(input.value).toEqual('London');
});
