import {render} from '@testing-library/react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

it('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Text element', () => {
  const {getByText} = render(<App />);
  expect(getByText('App.tsx').props.children).toBe('App.tsx');
});
