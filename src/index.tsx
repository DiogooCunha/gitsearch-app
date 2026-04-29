import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App.tsx';
import { HTMLHead } from '~/shared';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root not found');

const root = createRoot(rootElement);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<HTMLHead />
			<App />
		</BrowserRouter>
	</React.StrictMode>,
);
