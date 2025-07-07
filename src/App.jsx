import {PrimeReactProvider} from 'primereact/api';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
	return (
			<PrimeReactProvider>
				<Router>
					<div className="wrapper">
						<Header/>
						<main id="main-content" className="min-h-screen bg-gray-900 text-gray-300">
							<Routes>
								<Route path="/" element={<Home/>}/>
								<Route path="/home" element={<Home/>}/>
								<Route path="/about-me" element={<About/>}/>
								<Route path="/projects" element={<Projects/>}/>
								<Route path="/contact" element={<Contact/>}/>
							</Routes>
						</main>
					</div>
					<Footer/>
				</Router>
			</PrimeReactProvider>
	);
}

export default App;
