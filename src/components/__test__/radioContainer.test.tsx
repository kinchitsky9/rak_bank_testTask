import React from 'react';
import {render} from '@testing-library/react-native';
import RadioContainer from '../RadioContainer/radioContainer';

describe('<RadioContainer />', () => {
  it('renders option text correctly', () => {
    const {getByText} = render(<RadioContainer option="Option 1" />);
    expect(getByText('Option 1')).toBeTruthy();
  });

  it('handles additional props', () => {
    const {getByTestId} = render(
      <RadioContainer
        isSelected={true}
        option="Option 1"
        testID="radio-container"
      />,
    );
    const container = getByTestId('radio-container');
    expect(container).toBeTruthy();
  });
});
