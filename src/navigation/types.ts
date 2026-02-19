import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
	AuthStack: undefined;
	PostScreen: { postId: string };
	Search: undefined;
	Settings: undefined;
	Home: undefined;
	Register: undefined;
	Auth: undefined;
	Login: undefined;
	CreatePin: undefined;
	PinCode: undefined;
	HomeStack: undefined;
};

export type ScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
	RootStackParamList,
	T
>;

export type Post = {
	id: string;
	title: string;
	userId: string;
	body: string;
};
