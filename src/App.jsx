import { useContext } from 'react'
import './App.css'
import Counter from './components/Counter'
import { CounterContext } from './contexts/CounterContext'
import ItemCard from './components/ItemCard';
import Cart from './components/Cart';

function App() {
  // const [count, setCount] = useState(0)

  const counteState = useContext(CounterContext);
  console.log("Context", counteState);

  return (
    <>
      <div className='App'>
        <h1>Count is {counteState.count}</h1>
        <Counter />
        <Counter />
        <Counter />
        <Counter />

        <hr />
        <div style={{display:"flex"}}>
        <ItemCard name="Keyboard" price={350} />
        <ItemCard name="Mouse" price={300} />
        <ItemCard name="Harddisk" price={1200} />
        <ItemCard name="1GB RAM" price={1000} />
        </div>

        <Cart />
      </div>        
    </>
  )
}

export default App
