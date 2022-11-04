import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import Home from './Home';
import Header from './Header';
function App() {
	return (
		<Router>
			<div className="app">
				<Routes>
					<Route path="/checkout" element={[<Header />, <Checkout />]} />
					<Route path="/login" element={[<Login />]} />
					<Route path="/" element={[<Header />, <Home />]} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
