import logo from './logo.svg';
import './App.css';
import DarkMode from "./components/DarkMode/DarkMode";
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>
        REACT MINI PROJECT
        </h1>  
        <DarkMode/>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
