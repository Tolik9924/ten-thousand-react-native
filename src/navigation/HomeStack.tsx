import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/Home/HomeScreen/HomeScreen';
import PostScreen from '../screens/Home/PostScreen';
import SearchScreen from '../screens/Home/SearchScreen/SearchScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen name="PostScreen" component={PostScreen} options={{ title: 'Post Details' }} />
			<Stack.Screen name="Search" component={SearchScreen} />
			<Stack.Screen name="Settings" component={SettingsScreen} />
		</Stack.Navigator>
	);
}
