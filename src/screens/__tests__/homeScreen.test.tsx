import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {useNavigation} from '@react-navigation/native';
import HomeScreen from '../homeScreen';
import {strings} from '../../utils/strings';

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

  it('renders correctly', () => {
    const {getByText} = render(<HomeScreen />);

    // Check if the welcome text is rendered
    expect(getByText(strings.welcome)).toBeTruthy();

    // Check if the description text is rendered
    expect(getByText(strings.description)).toBeTruthy();

    // Check if the button is rendered
    expect(getByText(strings.begin)).toBeTruthy();
  });

  it('navigates to QuestionsScreen on button press', () => {
    const {getByText} = render(<HomeScreen />);
    const button = getByText(strings.begin);

    fireEvent.press(button);

    // Check if navigate function is called with the correct screen name
    expect(navigateMock).toHaveBeenCalledWith('QuestionsScreen');
  });
});
