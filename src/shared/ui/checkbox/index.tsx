import { Checkbox as ArkCheckbox } from '@ark-ui/react';
import { CheckIcon } from 'lucide-react';
import { Control, Indicator, Root } from './styles';

type CheckboxProps = {
	onClick: () => void;
};

const Checkbox = ({ onClick }: CheckboxProps) => {
	return (
		<Root>
			<Control>
				<Indicator onClick={onClick}>
					<CheckIcon />
				</Indicator>
			</Control>
			<ArkCheckbox.Label>Checkbox</ArkCheckbox.Label>
			<ArkCheckbox.HiddenInput />
		</Root>
	);
};

export default Checkbox;
