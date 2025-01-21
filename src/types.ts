export type Language = {
  id: string;
  name: string;
  extension: string;
};

export type TranslationError = {
  message: string;
  line?: number;
};