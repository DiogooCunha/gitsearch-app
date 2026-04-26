import styled from "styled-components";

const Button = styled.button({
	marginTop: '40px',
	display: 'inline-flex',
	alignItems: 'center',
	gap: '8px',
	padding: '12px 28px',
	fontSize: '14px',
	fontWeight: 600,
	letterSpacing: '0.05em',
	color: '#34D49D',
	background: 'transparent',
	border: '1px solid white',
	borderRadius: '8px',
	cursor: 'pointer',
	position: 'relative',
	overflow: 'hidden',
	transition: 'all 0.3s ease',
	boxShadow: '0 0 10px rgba(52, 212, 157, 0.1)',

	'&:hover': {
		color: '#fff',
		borderColor: '#34D49D',
		boxShadow: `
      0 0 8px rgba(52, 212, 157, 0.4),
      0 0 20px rgba(52, 212, 157, 0.2),
      0 0 40px rgba(52, 212, 157, 0.1)
    `,
		transform: 'translateY(-1px)',
	},

	'&:active': {
		transform: 'translateY(0)',
		boxShadow: '0 0 6px rgba(52, 212, 157, 0.3)',
	},
})

export default Button;
