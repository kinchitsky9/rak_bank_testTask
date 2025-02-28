// ResultScreen.test.js
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import ResultScreen from '../Result/resultScreen';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
  useRoute: jest.fn(),
}));

describe('<ResultScreen />', () => {
  let goBackMock: jest.Mock;

  beforeEach(() => {
    goBackMock = jest.fn();
    (useNavigation as jest.Mock).mockReturnValue({goBack: goBackMock});
  });

  it('displays low risk when totalScore is 6 or less', () => {
    (useRoute as jest.Mock).mockReturnValue({
      params: {totalScore: 6},
    });
    const {getByText} = render(<ResultScreen />);

    expect(getByText('Low Risk')).toBeTruthy();
  });

  it('displays medium risk when totalScore is between 7 and 12', () => {
    (useRoute as jest.Mock).mockReturnValue({
      params: {totalScore: 10},
    });
    const {getByText} = render(<ResultScreen />);

    expect(getByText('Medium Risk')).toBeTruthy();
  });

  it('displays high risk when totalScore is above 12', () => {
    (useRoute as jest.Mock).mockReturnValue({
      params: {totalScore: 15},
    });
    const {getByText} = render(<ResultScreen />);

    expect(getByText('High Risk')).toBeTruthy();
  });

  it('calls navigation.goBack on back button press', () => {
    (useRoute as jest.Mock).mockReturnValue({
      params: {totalScore: 15},
    });
    const {getByText} = render(<ResultScreen />);

    fireEvent.press(getByText('Back'));
    expect(goBackMock).toHaveBeenCalled();
  });
});
