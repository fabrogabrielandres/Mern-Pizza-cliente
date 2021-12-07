
export interface Pizza {
    name:        string;
    varients:    Varient[];
    prices:      Price[];
    category:    string;
    image:       string;
    description: string;
  }
  
  export interface Price {
    small:  number;
    medium: number;
    large:  number;
  }
  
  export enum Varient {
    Large = "large",
    Medium = "medium",
    Small = "small",
  }
  