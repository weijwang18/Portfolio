import React from 'react';
import './App.css';
import Header from './components/header/header.jsx';
import Home from './components/home/home';

const App = () => {
	return (
		<>
		<Header />
		<main className="main">
			<Home />
		</main>
		</>
	)}

export default App;
