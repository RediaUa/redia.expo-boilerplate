export enum SupportedLanguages {
  EN = 'en-US', // English (USA)
  UK = 'uk', // Ukrainian
  ES = 'es', // Spanish
  AR = 'ar', // Arabic
  JA = 'ja', // Japanese
}

export const DEFAULT_LANGUAGE = SupportedLanguages.EN

export const SUPPORTED_LANGUAGES_ARRAY: SupportedLanguages[] = Object.values(SupportedLanguages)
