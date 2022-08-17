import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          APRETA EL BOTON
        </p>
        <Button variant="info">Info</Button>{' '}
      </header>
    </div>
  );
}

export default App;
