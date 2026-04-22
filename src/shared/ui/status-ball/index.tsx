import { Avatar } from '@ark-ui/react';
import { Root } from './styles';

type StatusBallProps = {
	status: 'APROVED' | 'DECLINED';
};

const StatusBall = ({ status }: StatusBallProps) => {
	return (
		<Root $status={status}>
			<Avatar.Fallback></Avatar.Fallback>
		</Root>
	);
};

export default StatusBall;
