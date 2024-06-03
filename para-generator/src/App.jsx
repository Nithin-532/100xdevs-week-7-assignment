import words from 'an-array-of-english-words';
import { useState } from 'react';

// import './App.css'

function App() {
  const [para, setPara] = useState('');
  const [count, setCount] = useState(0);

  function fullStopRandom() {
    return Math.floor(Math.random() * 25) + 5;
  }

  function randomWordIndex() {
    return Math.floor(Math.random() * 200000);
  }

  const generatePara = (e) => {
    let i = 0;
    let newParagraph = '';
    while (i < count) {
      let fullStop = fullStopRandom();
      for (let j = 0; (j < fullStop) && (i + j < count); j++, i++) {
        newParagraph = newParagraph + words[randomWordIndex()] + " ";
      }
      newParagraph += ". ";
      i++;
    }
    setPara(newParagraph);
    newParagraph = '';
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', justifyContent: 'center' }}>
      <div>
        <h1>Para Generator</h1>
      </div>
      <div style={{ display: 'flex', gap: '24px' }}>
        <input type='text' placeholder='Enter Number of Words' style={{ width: '300px', padding: '10px' }} onChange={(e) => setCount(e.target.value)}/>
        <button style={{ backgroundColor: 'black', color: 'white', padding: '10px', height: '40px', borderRadius: '10px' }} onClick={generatePara}>Generate</button>
      </div>
      <div>
        {para}
      </div>
    </div>
  )
}

export default App
