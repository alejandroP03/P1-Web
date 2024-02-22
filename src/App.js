import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// 1. import `HeroUIProvider` component
import { HeroUIProvider } from '@heroui/react';
import Home from './pages/Home';

function App() {
	// 2. Wrap HeroUIProvider at the root of your app
	return (
		<HeroUIProvider>
			<h1>Hello World</h1>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</BrowserRouter>
		</HeroUIProvider>
	);
}

export default App;
