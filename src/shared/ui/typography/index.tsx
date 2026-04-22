import { type CSSProperties, type ReactNode } from 'react';
import { DynamicTypography } from './styles';

export type TagVariants =
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6'
	| 'p'
	| 'span';

type TypographyProps = {
	tag?: TagVariants;
	children: ReactNode;
} & CSSProperties;

const Typography = ({ tag = 'p', children, ...cssProps }: TypographyProps) => {
	return (
		<DynamicTypography $tag={tag} style={cssProps}>
			{children}
		</DynamicTypography>
	);
};

export default Typography;
