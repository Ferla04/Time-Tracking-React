import Menu from './components/Menu';
import data from './data';
import './App.css';
import Activities from './components/Activities';
import { useState } from 'react';

function App() {

	const [time, setTime] = useState('weekly');

	return (
		<div className='principal'>
			<Menu data={data} setTime={setTime}/>
			<Activities data={data} time={time}/>
		</div>
	)
}

export default App;
