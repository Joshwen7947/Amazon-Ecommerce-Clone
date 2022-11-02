import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import Home from './Home';
function App() {
	return (
		<Router>
			<div className="app">
				<Routes>
					<Route path="/checkout" element={<Checkout />} />
					<Route path="/login" element={<Login />} />
					<Route path="/" element={<Home />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
