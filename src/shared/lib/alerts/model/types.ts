import type { ToastPosition, TypeOptions } from 'react-toastify';

export type MsgProps = {
	title?: string;
	message: string;
};

export type ToasterProps = {
	message: string;
	type?: TypeOptions;
	position?: ToastPosition;
	title?: string;
};
