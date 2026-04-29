import { Button, PATHS, t, Typography } from '~/shared';
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
			<Typography tag='h1'>Opssss! {t('notFoundPage:pageNotFound')}</Typography>
			<Typography tag='p'>
				{t('notFoundPage:pageDoesntExist')}
			</Typography>
			<Button onClick={() => navigate(PATHS.HOME)}>{t('notFoundPage:backToHome')}</Button>
		</Wrapper>
	);
};

export default NotFoundPage;
