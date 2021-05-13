import logo from './logo.svg';
import './App.css';
import Kiosk from './components/d3/Kiosk';
import ProductList from './components/d3/ProductList';
import TodoContainer from "./components/d4/TodoContainer";

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
      {/* <ExLayout>
      <CountContainer></CountContainer>
      <CountContainer></CountContainer>
      <CountContainer></CountContainer>
      <CountContainer></CountContainer>
      </ExLayout> */}

      {/* day3 */}
      {/*<Kiosk>
      </Kiosk>*/}

      {/* day4 */}
      <TodoContainer>

      </TodoContainer>
      

    </div>
  );
}

export default App;
