import { ark } from '@ark-ui/react';
import { css, styled, type CSSProp } from 'styled-components';
import type { BoxProps } from './types';

const Box = styled(ark.div)<BoxProps>`
	${({ display }) =>
		display &&
		css`
			display: ${display};
		`}
	${({ flexDirection }) =>
		flexDirection &&
		css`
			flex-direction: ${flexDirection};
		`}
  ${({ alignItems }) =>
		alignItems &&
		css`
			align-items: ${alignItems};
		`}
  ${({ justifyContent }) =>
		justifyContent &&
		css`
			justify-content: ${justifyContent};
		`}
  ${({ gap }) =>
		gap &&
		css`
			gap: ${gap};
		`}
  ${({ padding, p }) =>
		(padding || p) &&
		css`
			padding: ${padding ?? p};
		`}
  ${({ margin, m }) =>
		(margin || m) &&
		css`
			margin: ${margin ?? m};
		`}
  ${({ width }) =>
		width &&
		css`
			width: ${width};
		`}
  ${({ height }) =>
		height &&
		css`
			height: ${height};
		`}
  ${({ bgcolor }) =>
		bgcolor &&
		css`
			background-color: ${bgcolor};
		`}
  ${({ color }) =>
		color &&
		css`
			color: ${color};
		`}
  ${({ borderRadius }) =>
		borderRadius &&
		css`
			border-radius: ${borderRadius};
		`}
  ${({ sx }) =>
		sx &&
		css`
			${sx as CSSProp}
		`}
`;

export default Box;
