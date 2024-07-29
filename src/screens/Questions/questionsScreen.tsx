import {SafeAreaView, Text, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import Button from '../../components/Button/button';
import {questionsData} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import {AppNavigationProps} from '../../../App';
import {OptionType} from '../../interface/appTypes';
import RadioContainer from '../../components/RadioContainer/radioContainer';
import {styles} from './styles';

const QuestionsScreen = () => {
  const navigation = useNavigation<AppNavigationProps>();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<OptionType[]>([]);

  const isLastQuestion = currentQuestionIndex === questionsData.length - 1;

  const onNextPressed = () => {
    setCurrentQuestionIndex(prev => prev + 1);
  };

  const onRadioContainerPressed = (item: OptionType) => {
    setSelectedAnswers(prev => {
      prev[currentQuestionIndex] = item;
      return [...prev];
    });
  };

  const onFinishPressed = () => {
    navigation.reset({
      index: 1,
      routes: [
        {name: 'HomeScreen'},
        {
          name: 'ResultScreen',
          params: {
            totalScore: totalPoints,
          },
        },
      ],
    });
  };

  const totalPoints = useMemo(() => {
    let total = 0;
    selectedAnswers.forEach(answer => {
      total += answer.points;
    });
    return total;
  }, [selectedAnswers]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentStyle}>
        <Text style={styles.questionTest}>
          Question #{currentQuestionIndex + 1}
        </Text>
        <View style={styles.questionContainer}>
          <View style={styles.questionCard}>
            <Text style={styles.questionText}>
              {questionsData[currentQuestionIndex].question}
            </Text>
            <View style={styles.optionsContainer}>
              {questionsData[currentQuestionIndex].options.map(item => {
                return (
                  <RadioContainer
                    option={item.title}
                    key={item.id}
                    onPress={() => {
                      onRadioContainerPressed(item);
                    }}
                    isSelected={
                      selectedAnswers?.[currentQuestionIndex]?.id === item.id
                    }
                  />
                );
              })}
            </View>
          </View>
        </View>

        <Button
          title={isLastQuestion ? 'Finish' : 'Next'}
          disabled={!selectedAnswers[currentQuestionIndex]}
          style={styles.btnStyle}
          onPress={isLastQuestion ? onFinishPressed : onNextPressed}
        />
      </View>
    </SafeAreaView>
  );
};

export default QuestionsScreen;
