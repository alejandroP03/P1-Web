import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// 1. import `HeroUIProvider` component
import { HeroUIProvider } from '@heroui/react';
import './App.css';
import Auth from './pages/Auth';
import Detail from './pages/Detail';
import Home from './pages/Home';

function App() {
	// 2. Wrap HeroUIProvider at the root of your app
	return (
		<HeroUIProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Auth />} />
					<Route path='/home' element={<Home />} />
					<Route path='/home/:type' element={<Detail />} />
				</Routes>
			</BrowserRouter>
		</HeroUIProvider>
	);
}

export default App;
