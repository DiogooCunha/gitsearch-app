import { Button, PATHS, Typography } from '~/shared';
import { type ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { GradientText, Wrapper } from './styles';

const NotFoundPage = (): ReactElement => {
	const navigate = useNavigate();
	return (
		<Wrapper>
			<Typography tag='h1'>
				<GradientText>404</GradientText>
			</Typography>
			<Typography tag='h1'>Opssss! Page Not Found</Typography>
			<Typography tag='p'>
				The page you were looking for doesn't exist
			</Typography>
			<Button onClick={() => navigate(PATHS.HOME)}>Back to Home</Button>
		</Wrapper>
	);
};

export default NotFoundPage;
