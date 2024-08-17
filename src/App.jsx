import { useContext, useEffect } from 'react'
import './App.css'
import Counter from './components/Counter'
import { CounterContext } from './contexts/CounterContext'
import ItemCard from './components/ItemCard';
import Cart from './components/Cart';
import ThemeSwitcher from './components/ThemeSwitcher';
import { getThemeContext } from './contexts/ThemeSwitch';
import ResetCounter from './components/ResetCounter';

function App() {
  const counteState = useContext(CounterContext);
  const t = getThemeContext();

  useEffect(() => {
    var html = document.querySelector('html').classList;
    html.remove('light', 'dark');
    html.add(t.themeMode);
  }, [t.themeMode]);

  return (
    <>
      <div className='App'>
        <ThemeSwitcher />

        <h1>Count is {counteState.count}</h1>
        <div style={{ width: "270px", margin: "auto" }}>
          <Counter />
          <Counter />
          <Counter />
          <Counter />
          <ResetCounter />
        </div>

        <hr />
        <div className='products'>
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
