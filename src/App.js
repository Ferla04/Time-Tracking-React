import Menu from './components/Menu';
import data from './data';
import './App.css';
import Activities from './components/Activities';

function App() {
	return (
		<div className='principal'>
			<Menu data={data}/>
			<Activities data={data}/>
		</div>
	)
}

export default App;
