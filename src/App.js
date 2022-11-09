import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards';
import Card from './components/Card';
function App() {
  return (
    <div className="App">

      <h1  className='toot'>Memory-Game</h1>
      {/* <div className='container'></div> */}
      <Cards/>
    </div>
    
  );
}

export default App;


