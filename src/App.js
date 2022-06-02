import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import { useState } from 'react';

function App() {
	const [burgerActive, setBurgerActive] = useState(false);

	const items = [
		{ value: 'Главная1', href: '/main1' },
		{ value: 'Главная2', href: '/main2' },
		{ value: 'Главная3', href: '/main3' },
	]

	return (
		<>
			<BurgerMenu active={burgerActive} setActive={setBurgerActive} header={'Меню'} items={items} />
			<Header active={burgerActive} setActive={setBurgerActive} />
			<MainPage />
			<Footer />
		</>
	);
}

export default App;
