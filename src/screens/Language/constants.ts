export const LANGUAGES = {
	en: 'en',
	ar: 'ar',
} as const;

export type Language = (typeof LANGUAGES)[keyof typeof LANGUAGES];
