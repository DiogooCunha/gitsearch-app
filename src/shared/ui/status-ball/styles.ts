import { Avatar } from '@ark-ui/react';

import styled from 'styled-components';

type RootProps = {
	$status: 'APROVED' | 'DECLINED';
};

export const Root = styled(Avatar.Root)<RootProps>(({ $status }) => ({
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	fontWeight: 500,
	position: 'relative',
	verticalAlign: 'top',
	flexShrink: 0,
	userSelect: 'none',
	borderRadius: '9999px',
	fontSize: '1rem',
	width: '0.875rem',
	height: '0.875rem',
	backgroundColor: $status === 'APROVED' ? 'green' : 'red',
}));
