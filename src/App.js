import logo from './logo.svg';
import './App.css';
import Hello from './components/d1/Hello';
import ProductDisplay from './components/d1/ProductDisplay';
import ChildEX from './components/d1/ChildEX';
import ExLayout from './components/d2/ExLayout';
import Kiosk from './components/d2/Kiosk';
import InputEx from './components/d2/InputEx';
import CountContainer from './components/d2/CountContainer';

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
      {/* day1 */}
      {/* <ChildEX children>
        <ProductDisplay {...product}></ProductDisplay>
      </ChildEX> */}

      {/* day2 */}
      {/* Layout 개념 */}
      {/* <ExLayout>
        <Hello name={'World'}></Hello>
      </ExLayout> */}
      {/* <Kiosk></Kiosk> */}
      <ExLayout>
      <CountContainer></CountContainer>
      <CountContainer></CountContainer>
      <CountContainer></CountContainer>
      <CountContainer></CountContainer>
      </ExLayout>
      

    </div>
  );
}

export default App;
