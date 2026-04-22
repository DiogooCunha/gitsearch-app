import styled from 'styled-components';

export const Wrapper = styled.div({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	height: '100vh',
	alignItems: 'center',
	backgroundColor: '#000000',
});

export const GradientText = styled.h1({
	fontSize: '200px',
	background:
		'linear-gradient(180deg, #000000 0%, #0d0d0d 20%, #1a4d3a 50%, #34D49D 100%)',
	WebkitBackgroundClip: 'text',
	WebkitTextFillColor: 'transparent',
	backgroundClip: 'text',
	margin: 0,
	fontWeight: 'bold',
});
