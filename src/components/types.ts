export type Question = {
  text: string;
  choices: string[];
};

export type Answer = {
  category: Category;
  choice: string;
};

export type Category = "Gryffindor" | "Ravenclaw" | "Slytherin" | "Hufflepuff";
