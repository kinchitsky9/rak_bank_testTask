import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {useNavigation} from '@react-navigation/native';
import HomeScreen from '../Home/homeScreen';

// Mock the useNavigation hook
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('<HomeScreen />', () => {
  let navigateMock: jest.Mock;

  beforeEach(() => {
    navigateMock = jest.fn();
    (useNavigation as jest.Mock).mockReturnValue({navigate: navigateMock});
  });

  it('navigates to QuestionsScreen on button press', () => {
    const {getByText} = render(<HomeScreen />);
    const button = getByText('Begin');

    fireEvent.press(button);

    // Check if navigate function is called with the correct screen name
    expect(navigateMock).toHaveBeenCalledWith('QuestionsScreen');
  });
});
