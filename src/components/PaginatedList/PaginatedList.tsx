import { useCallback, useMemo, useRef, useState } from 'react';
import { ActivityIndicator, FlatList, ListRenderItem, View } from 'react-native';

import { styles } from './PaginatedList.styles';

type Props<T> = {
	data: T[];
	renderItem: ListRenderItem<T>;
	pageSize?: number;
	keyExtractor?: (item: T, index: number) => string;
};

export const PaginatedList = <T,>({ data, renderItem, pageSize = 10, keyExtractor }: Props<T>) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [isLoading, setIsLoading] = useState(false);

	const isLoadingRef = useRef(false);

	const visibleItems = useMemo(
		() => data.slice(0, currentPage * pageSize),
		[data, currentPage, pageSize],
	);

	const hasMore = visibleItems.length < data.length;

	const loadMore = useCallback(() => {
		if (isLoadingRef.current || !hasMore) return;

		isLoadingRef.current = true;
		setIsLoading(true);

		setTimeout(() => {
			setCurrentPage((prev) => prev + 1);
			setIsLoading(false);
			isLoadingRef.current = false;
		}, 0);
	}, [hasMore]);

	const resolvedKeyExtractor = useMemo(
		() => keyExtractor ?? ((_item: T, index: number) => index.toString()),
		[keyExtractor],
	);

	const renderFooter = useCallback(() => {
		if (!isLoading) return null;
		return (
			<View style={styles.footer}>
				<ActivityIndicator size="small" color="#FA8A34" />
			</View>
		);
	}, [isLoading]);

	return (
		<FlatList<T>
			data={visibleItems}
			renderItem={renderItem}
			keyExtractor={resolvedKeyExtractor}
			onEndReached={loadMore}
			onEndReachedThreshold={0.3}
			ListFooterComponent={renderFooter}
		/>
	);
};
