import { useGitHubLogin } from '@react-oauth/github';
import { CLIENT_ID, GithubIcon, Typography } from '~/shared';
import { onAuthError } from '../lib/on-error';
import { onAuthSuccess } from '../lib/on-success';
import { LoginButton } from './styles';

const GithubAuth = () => {
  const { initiateGitHubLogin, isLoading } = useGitHubLogin({
    clientId: CLIENT_ID,
    onSuccess: onAuthSuccess,
    onError: onAuthError,
  });

  return (
    <LoginButton disabled={isLoading} onClick={initiateGitHubLogin}>
      <GithubIcon />
      <Typography fontWeight='500' color='#f6f8fa'>
        Sign In With Github
      </Typography>
    </LoginButton>
  );
};

export default GithubAuth;
