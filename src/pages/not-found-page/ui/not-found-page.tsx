import { type ReactElement } from 'react';
import styled from 'styled-components';
import { Typography } from '~/shared';
import { useNavigate } from 'react-router-dom'
import Button from '../../../shared/ui/button';

const Wrapper = styled.div({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	height: '100vh',
	alignItems: 'center',
	backgroundColor: '#000000',
})

const GradientText = styled.h1({
	fontSize: '200px',
	background: 'linear-gradient(180deg, #000000 0%, #0d0d0d 20%, #1a4d3a 50%, #34D49D 100%)',
	WebkitBackgroundClip: 'text',
	WebkitTextFillColor: 'transparent',
	backgroundClip: 'text',
	margin: 0,
	fontWeight: 'bold',
})

const NotFoundPage = (): ReactElement => {
	const navigate = useNavigate()
	return (
		<Wrapper>
			<Typography tag='h1'><GradientText>404</GradientText></Typography>
			<Typography tag='h1'>Opssss! Page Not Found</Typography>
			<Typography tag='p'>The page you were looking for doesn't exist</Typography>
			<Button onClick={() => navigate('/')}>Back to Home</Button>
		</Wrapper>
	);
};

export default NotFoundPage;