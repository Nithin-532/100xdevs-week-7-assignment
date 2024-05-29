import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('white');

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <>
      <div style={{ padding: '20px', boxShadow: '0px 0px 4px 4px rgba(0, 0, 0, 0.5)', bottom: '50px', display: 'flex', gap: '10px' }}>
        {['red', 'yellow', 'black', 'purple', 'green', 'blue', 'default'].map(val => {
          return <button 
            key={val} 
            style={{ backgroundColor: val === 'default' ? 'orange' : val, color: val === 'black' ? 'white' : 'black', padding: '10px', borderRadius: '8px' }} 
            onClick={() => {
              if (val === 'default') setColor('white');
              else setColor(val);
            }}
          >{val}</button>
        })}
      </div>
    </>
  )
}

export default App
