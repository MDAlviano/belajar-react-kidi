import logo from './logo.svg';
import './App.css';
import Alvin from './components/hello';
import Greetings from './components/Greetings';
import Guten from './components/Guten';
import Follow from './components/Follow';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Halo Semuanya!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
