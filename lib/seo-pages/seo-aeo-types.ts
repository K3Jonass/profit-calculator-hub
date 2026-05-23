export type DefinitionBlock = {
  title: string;
  body: string;
};

export type ComparisonRow = {
  aspect: string;
  alternative: string;
  profithub: string;
};

export type ComparisonSection = {
  title: string;
  intro: string;
  rows: ComparisonRow[];
};

export type SeoAeoContent = {
  quickAnswer: string;
  definition: DefinitionBlock;
  howToTitle: string;
  howToIntro: string;
  howToSteps: string[];
  comparison: ComparisonSection;
};
