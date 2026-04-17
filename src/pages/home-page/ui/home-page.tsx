import { toaster } from '~/shared';

const HomePage = () => {
	return (
		<div>
			Home Page
			<button
				onClick={() => {
					toaster({
						title: 'test',
						message: 'test',
						type: 'success',
					});
				}}
			>
				CLICK
			</button>
		</div>
	);
};

export default HomePage;
