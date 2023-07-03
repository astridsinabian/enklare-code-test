export enum JOKE_TYPE {
  Single = "single",
  TwoPart = "twopart",
}

export interface ApiJokeData {
  error: boolean;
  amount: number;
  jokes: Joke[];
}

export interface Joke {
  id: number;
  category: string;
  type: JOKE_TYPE;
  flags: JokeFlag;
  safe: boolean;
  lang: string;
  setup?: string;
  delivery?: string;
  joke?: string;
}

export interface JokeFlag {
  nsfw: boolean;
  religious: boolean;
  political: boolean;
  racist: boolean;
  sexist: boolean;
  explicit: boolean;
}

export interface ErrorMessage {
  message: unknown;
  isError: boolean;
}
