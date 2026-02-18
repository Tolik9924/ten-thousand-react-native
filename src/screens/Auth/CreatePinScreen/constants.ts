export const NUMBERS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', 'del'] as const;

export type NumberKey = (typeof NUMBERS)[number];
