import { Checkbox } from '@ark-ui/react';
import styled from 'styled-components';

export const Root = styled(Checkbox.Root)({
	display: 'inline-flex',
	alignItems: 'center',
	verticalAlign: 'top',
	gap: '0.5rem',
	position: 'relative',

	'&[data-disabled]': {
		opacity: '0.5',
		filter: 'grayscale(100%)',
	},
});

export const Control = styled(Checkbox.Control)({
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexShrink: 0,
	width: '1.25rem',
	height: '1.25rem',
	background: 'transparent',
	color: 'white',
	border: '1px solid #de5045',
	borderRadius: '0.25rem',

	'&[data-state="checked"], &[data-state="indeterminate"]': {
		background: '#eb5e41',
		borderColor: '#eb5e41',
	},

	'&[data-state="unchecked"]': {
		background: 'transparent',
		borderColor: '#ccc',
	},

	'& svg': {
		width: '0.875rem',
		height: '0.875rem',
	},
});

export const Indicator = styled(Checkbox.Indicator)({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
});
