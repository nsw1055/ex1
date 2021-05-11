import logo from './logo.svg';
import './App.css';
import Hello from './components/d1/Hello';
import ProductDisplay from './components/d1/ProductDisplay';
import ChildEX from './components/d1/ChildEX';
import ExLayout from './components/d2/ExLayout';
import Kiosk from './components/d2/Kiosk';

function App() {

  const product = {
    pno:1,
    name: 'Apple',
    price: 3000
  }

 const clickHandler = (value) => {
   alert(value)
 }

  return (
    <div className="App">
      <Kiosk>

      </Kiosk>

    </div>
  );
}

export default App;
