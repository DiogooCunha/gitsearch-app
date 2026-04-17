import type { TagVariants } from '.';
import type { ComponentProps } from 'react';

import { createElement } from 'react';

import styled, { css } from 'styled-components';

type DynamicTypographyProps = {
	$tag?: TagVariants;
} & ComponentProps<'span'>;

const variants: Record<TagVariants, ReturnType<typeof css>> = {
	h1: css({
		fontSize: '2.5rem',
		fontWeight: 700,
		lineHeight: 1.2,
		letterSpacing: '-0.02em',
	}),
	h2: css({
		fontSize: '2rem',
		fontWeight: 600,
		lineHeight: 1.3,
		letterSpacing: '-0.01em',
	}),
	h3: css({ fontSize: '1.5rem', fontWeight: 600, lineHeight: 1.4 }),
	h4: css({ fontSize: '1.25rem', fontWeight: 500, lineHeight: 1.4 }),
	h5: css({ fontSize: '1.1rem', fontWeight: 500, lineHeight: 1.4 }),
	h6: css({ fontSize: '1rem', fontWeight: 500, lineHeight: 1.4 }),
	p: css({ fontSize: '1rem', fontWeight: 400, lineHeight: 1.6 }),
	span: css({
		fontSize: 'inherit',
		fontWeight: 'inherit',
		lineHeight: 'inherit',
	}),
};

export const DynamicTypography = styled(
	({ $tag = 'span', ...props }: DynamicTypographyProps) =>
		createElement($tag, props),
)<DynamicTypographyProps>`
	margin: 0;
	font-family: inherit;
	${({ $tag = 'span' }) => variants[$tag]}
`;
