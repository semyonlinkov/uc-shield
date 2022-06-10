import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import Prices from './components/Prices/Prices';
import Education from './components/Education/Education';
import ScrollButton from './components/ScrollButton/ScrollButton';
import Documents from './components/Documents/Documents';
import Exams from './components/Exams/Exams';
import FireSafety from './components/FireSafety/FireSafety';
import CrewTraining from './components/CrewTraining/CrewTraining';
import GunTraining from './components/GunTraining/GunTraining';

function App() {
	const [burgerActive, setBurgerActive] = useState(false);


	return (
		<>
			<BrowserRouter>
				<BurgerMenu active={burgerActive} setActive={setBurgerActive} />
				<Header active={burgerActive} setActive={setBurgerActive} />
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/about' element={<AboutUs />} />
					<Route path='/education' element={<Education />} />
					<Route path='/docs' element={<Documents />} />
					<Route path='/exams' element={<Exams />} />
					<Route path='/fire-safety' element={<FireSafety />} />
					<Route path='/crew-training' element={<CrewTraining />} />
					<Route path='/prices' element={<Prices />} />
					<Route path='/weapon-training' element={<GunTraining />} />
					<Route path='/contacts' element={<></>} />
				</Routes>
				<Footer />
				<ScrollButton />
			</BrowserRouter>
		</>
	);
}

export default App;
