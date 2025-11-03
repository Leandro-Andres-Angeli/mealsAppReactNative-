export interface IMeal {
  id: any;
  categoryId: Array<string | number>;
  title: string;
  affordability: string;
  complexity: string;
  imageUrl: string;
  duration: string;
  ingredients: string[];
  steps: string[];
  isGlutenFree: boolean;
  isVegan: boolean;
  isVegatarian: boolean;
  isLactoseFree: boolean;
}
