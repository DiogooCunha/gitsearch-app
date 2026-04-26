import type { ComponentProps } from 'react';
import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';

type WrapperProps = {
	$open?: boolean;
} & ComponentProps<'div'>;

export const Wrapper = styled.div<WrapperProps>(({ $open }) => ({
	display: 'flex',
	minWidth: $open ? '255px' : '80px',
	flexDirection: 'column',
	position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    zIndex: 100,
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

export const Li = styled.div({
	marginTop: '20px',
	marginLeft: '60px',
});

export const NavLink = styled(RouterNavLink)({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    color: 'inherit',
    padding: '8px 16px',
    borderRadius: '8px',
    '&:hover': {
        backgroundColor: '#3E444C',
    },
});