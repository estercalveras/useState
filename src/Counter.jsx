import './App.css'
import { useState } from 'react';


function Counter() {

  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>{count}</h1>
        <div className='flex gap-4 p-4 justify-center'>
          <button onClick={() => setCount(count - 1)}>-</button>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      </div>
    </>
  )
}

function App() {
  return (
    <>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </>
  )
}

export default App;
