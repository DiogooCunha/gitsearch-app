import styled from 'styled-components';

export const LoginButton = styled.button({
	display: 'flex',
	gap: '0.5rem',
	border: '1px solid rgba(31, 35, 40, 0.15)',
	borderRadius: '2px',
	padding: '0.4rem',
	flex: 1,
	backgroundColor: 'var(--github-green)',
	width: '100%',
	cursor: 'pointer',
	justifyContent: 'center',
	alignItems: 'center',

	'&:hover': {
		backgroundColor: 'var(--github-green-hovered)',
		borderColor: 'rgba(240, 246, 252, 0.15)',
	},

	'&:disabled': {
		opacity: 0.6,
		cursor: 'not-allowed',
	},
});
