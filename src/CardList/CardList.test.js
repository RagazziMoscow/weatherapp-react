import { render } from '@testing-library/react';

import { CardListNoState } from '.';

test('renders CardList', () => {
  const { container } = render(<CardListNoState {...{ state: { citiesList: [] } }} />);
  const select = container.querySelector('.Select');

  expect(select.value).toEqual('desc');
  expect(select.querySelectorAll('option')[0].value).toEqual('desc');
  expect(select.querySelectorAll('option')[1].value).toEqual('asc');
  expect(select.querySelectorAll('option')[0].textContent).toEqual('By name desc');
  expect(select.querySelectorAll('option')[1].textContent).toEqual('By name asc');
});
