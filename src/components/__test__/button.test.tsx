// Button.test.js
import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {Button} from 'react-native';

describe('<Button />', () => {
  it('renders with the correct title', () => {
    const {getByText} = render(<Button title="Click Me" />);
    expect(getByText('Click Me')).toBeTruthy();
  });

  it('check onPress clickable', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(
      <Button title="Click Me" onPress={onPressMock} />,
    );
    fireEvent.press(getByText('Click Me'));
    expect(onPressMock).toHaveBeenCalled();
  });
});
