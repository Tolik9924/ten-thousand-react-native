import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
	name: string;
	photo: string;
	language: 'en' | 'ar';
}

const initialState: UserState = {
	name: '',
	photo: '',
	language: 'en',
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setName(state, action: PayloadAction<string>) {
			state.name = action.payload;
		},
		setPhoto(state, action: PayloadAction<string>) {
			state.photo = action.payload;
		},
		setLanguage(state, action: PayloadAction<'en' | 'ar'>) {
			state.language = action.payload;
		},
		resetUser(state) {
			state.name = '';
			state.photo = '';
			state.language = 'en';
		},
	},
});

export const { setName, setPhoto, setLanguage, resetUser } = userSlice.actions;
export default userSlice.reducer;
