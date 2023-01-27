import React from 'react';
import './App.css';
import Header from './components/header/header.jsx';
import Home from './components/home/home';
import About from './components/about/about';
import Skills from './components/skills/skills';

const App = () => {
	return (
		<>
		<Header />
		<main className="main">
			<Home />
			<About />
			<Skills />
		</main>
		</>
	)}

export default App;
