import React from 'react'
import Svg, { Circle, Path } from 'react-native-svg'

export const AccountIcon = ({ size = 16, color = 'white' }) => {
	return (
		<Svg
			width={size}
			height={size}
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			stroke-width='2'
			stroke-linecap='round'
			stroke-linejoin='round'
		>
			<Path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
			<Circle cx='12' cy='7' r='4' fill={color} />
		</Svg>
	)
}
