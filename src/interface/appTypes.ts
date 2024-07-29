export type QuestionType = {
  id: string;
  question: string;
  options: OptionType[];
};

export type OptionType = {
  id: string;
  title: string;
  points: number;
};
