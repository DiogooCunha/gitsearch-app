import type { MsgProps, ToasterProps } from '../model/types';
import type { ReactElement } from 'react';

import * as Toastify from 'react-toastify';

import { Root, Title } from './styles';

const Msg = ({ title, message }: MsgProps): ReactElement => (
	<Root>
		{title && <Title style={{ fontSize: '13px' }}>{title}</Title>}
		<div>{message}</div>
	</Root>
);

function Toaster({
	message,
	type = 'error',
	position = 'top-right',
	title,
	...rest
}: ToasterProps): void {
	Toastify.toast(<Msg title={title} message={message} />, {
		type,
		position,
		...rest,
	});
}

export default Toaster;
