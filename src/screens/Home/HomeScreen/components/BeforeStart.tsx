import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { VARIANT } from '@/screens/Home/HomeScreen/constants';
import { Variant } from '@/screens/Home/HomeScreen/types';

import { styles } from './BeforeStart.styles';

export const BeforeStart = ({
	title,
	stepsCount,
	variant = VARIANT.primary,
}: {
	title: string;
	stepsCount: number;
	variant?: Variant;
}) => (
	<View style={[styles.startItem, variant === VARIANT.secondary && styles.startItemSecondary]}>
		<View style={styles.titleContainer}>
			<View style={styles.logoStart}>
				<Ionicons
					name="link-outline"
					size={16.73}
					color={variant === VARIANT.primary ? '#ffffff' : '#00A385'}
				/>
			</View>
			<Text
				style={[styles.startTitle, variant === VARIANT.secondary && styles.startTitleSecondary]}
			>
				{title}
			</Text>
		</View>
		<View style={styles.stepsContainer}>
			<Text
				style={[styles.stepsCount, variant === VARIANT.secondary && styles.stepsCountSecondary]}
			>
				{stepsCount} steps
			</Text>
			<MaterialIcons
				name="arrow-forward"
				size={24}
				color={variant === VARIANT.primary ? '#ffffff' : '#606773'}
			/>
		</View>
	</View>
);
