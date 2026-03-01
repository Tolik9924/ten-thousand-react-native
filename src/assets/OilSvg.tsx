import React from 'react';
import Svg, { Path } from 'react-native-svg';

const OilSvg = () => (
	<Svg width={15} height={20} viewBox="0 0 15 20" fill="none">
		<Path
			d="M14.9399 11.9519C14.9399 5.22897 7.46995 0 7.46995 0C7.46995 0 0 5.22897 0 11.9519C0 13.9331 0.78701 15.8331 2.1879 17.234C3.58879 18.6349 5.4888 19.4219 7.46995 19.4219C9.45111 19.4219 11.3511 18.6349 12.752 17.234C14.1529 15.8331 14.9399 13.9331 14.9399 11.9519Z"
			fill="#606773"
		/>
		<Path
			d="M11.9519 11.9519C11.9519 13.1406 11.4797 14.2806 10.6392 15.1211C9.79867 15.9617 8.65866 16.4339 7.46997 16.4339"
			stroke="#C1C4CB"
			strokeWidth={1.375}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</Svg>
);

export default OilSvg;
