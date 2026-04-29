import type { HTMLArkProps } from '@ark-ui/react';
import type { CSSProperties } from 'styled-components';

type BoxStyleProps = {
	display?: CSSProperties['display'];
	flexDirection?: CSSProperties['flexDirection'];
	alignItems?: CSSProperties['alignItems'];
	justifyContent?: CSSProperties['justifyContent'];
	gap?: CSSProperties['gap'];
	padding?: CSSProperties['padding'];
	p?: CSSProperties['padding'];
	margin?: CSSProperties['margin'];
	m?: CSSProperties['margin'];
	width?: CSSProperties['width'];
	height?: CSSProperties['height'];
	bgcolor?: CSSProperties['backgroundColor'];
	color?: CSSProperties['color'];
	borderRadius?: CSSProperties['borderRadius'];
	sx?: CSSProperties;
};

export type BoxProps = HTMLArkProps<'div'> & BoxStyleProps;
