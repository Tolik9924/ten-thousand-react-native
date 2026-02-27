export const colors = {
	primary: '#FA8A34',
	textPrimary: '#06070A',
	textSecondary: '#606773',
	textMuted: '#858C94',
	border: '#CED5E0',
	borderLight: '#E6EBF5',
	white: '#fff',
	background: '#fff',
	error: '#D63C41',
	success: '#00A385',
	inactive: '#858C94',
	inputBackground: '#EBEFF5',
	disabledBackground: '#f0f0f0',
	disabledBorder: '#ccc',
} as const;

export type ColorKey = keyof typeof colors;
