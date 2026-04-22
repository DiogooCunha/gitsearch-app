import type { ComponentProps } from 'react';
import styled from 'styled-components';

type WrapperProps = {
	$open?: boolean;
} & ComponentProps<'div'>;

export const Wrapper = styled.div<WrapperProps>(({ $open }) => ({
	display: 'flex',
	minWidth: $open ? '255px' : '80px',
	flexDirection: 'column',
}));

type TitleProps = {
	$fontColor?: string;
} & ComponentProps<'h1'>;

export const Title = styled.h1<TitleProps>(({ $fontColor }) => ({
	fontSize: '1.5em',
	textAlign: 'center',
	color: $fontColor || 'black',
	margin: '0px',
}));
