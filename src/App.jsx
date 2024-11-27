import './App.css'
import { useState } from 'react';


function App() {
  const imageUrl = 'https://static.vecteezy.com/system/resources/previews/007/839/759/non_2x/cute-robot-cartoon-icon-illustration-science-technology-icon-concept-isolated-premium-flat-cartoon-style-vector.jpg'

  const [message, setMessage] = useState('...');


  return (
    <>
      <div
        className={`bg-cover bg-center bg-no-repeat`}
        style={{ backgroundImage: `url(${imageUrl})`, height: '500px', width: '500px' }}
      >
        <h1 className='pt-4 text-customDark font-semibold'>{message}</h1>
      </div>
      {/* <div className='p-4 flex gap-4 justify-center'>
        <button onClick={() => changeMessage('Hello!')}>Say hello!</button>
        <button onClick={() => changeMessage('Goodbye!')}>Say goodbye!</button>
      </div> */}
      <div className='p-4 flex gap-4 justify-center'>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
    </>
  )
}

export default App;
