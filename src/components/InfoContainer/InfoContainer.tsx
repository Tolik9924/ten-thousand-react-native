import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';
import { Wrapper } from '../Wrapper/Wrapper';
import { styles } from './InfoContainer.styles';

export const InfoContainer = ({
	firstIcon,
	secondIcon,
	thirdIcon,
	title,
	backgroundColors,
}: {
	firstIcon: ReactNode;
	secondIcon: ReactNode;
	thirdIcon: ReactNode;
	title: string;
	backgroundColors: string[];
}) => {
	return (
		<Wrapper>
			<View style={styles.circleItems}>
				<View
					style={[styles.circleItem, { backgroundColor: backgroundColors[0], borderRadius: 50 }]}
				>
					{firstIcon}
				</View>
				<View
					style={[
						styles.circleItem,
						{
							backgroundColor: backgroundColors[1],
							borderRadius: 50,
							position: 'absolute',
							margin: 'auto',
							zIndex: 100,
						},
					]}
				>
					{secondIcon}
				</View>
				<View
					style={[styles.circleItem, { backgroundColor: backgroundColors[2], borderRadius: 50 }]}
				>
					{thirdIcon}
				</View>
			</View>
			<Text style={styles.description}>{title}</Text>
		</Wrapper>
	);
};
