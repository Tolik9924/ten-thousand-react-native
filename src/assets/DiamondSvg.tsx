import React from 'react';
import Svg, { Path } from 'react-native-svg';

const DiamondSVG = () => (
	<Svg width={16} height={25} viewBox="0 0 16 25" fill="none">
		<Path d="M7.73071 0V9.1499L15.4639 12.6059L7.73071 0Z" fill="white" fillOpacity={0.602} />
		<Path d="M7.7332 0L0 12.6059L7.7332 9.1499V0Z" fill="white" />
		<Path
			d="M7.73071 18.5327V24.7499L15.4684 14.0435L7.73071 18.5327Z"
			fill="white"
			fillOpacity={0.602}
		/>
		<Path d="M7.7332 24.7499V18.5327L0 14.0435L7.7332 24.7499Z" fill="white" />
		<Path
			d="M7.73071 17.0944L15.4639 12.6052L7.73071 9.14917V17.0944Z"
			fill="white"
			fillOpacity={0.2}
		/>
		<Path d="M0 12.6052L7.7332 17.0944V9.14917L0 12.6052Z" fill="white" fillOpacity={0.602} />
	</Svg>
);

export default DiamondSVG;
