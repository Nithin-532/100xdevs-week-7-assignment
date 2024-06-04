
import { useState } from 'react'
import './App.css'
import { useRef } from 'react';

function App() {
  const [name, setName] = useState('');
  const [showCards, setShowCards] = useState(false);
  const inputRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    console.log(value)
    setName(value);
    setShowCards(true);
    inputRef.current.value = '';
  }

  return (
    <div className='app'>
      {!showCards ? 
      <div className='input-box'>
        <h2>Enter Your Name</h2>
        <input ref={inputRef} type='text' placeholder='Enter Your Name' />
        <button onClick={onSubmit}>Done</button>
      </div>
      :
      <>
        <BirthDayCards name={name} />
      </>}
    </div>
  )
}

function BirthDayCards({name}) {
  const wishes = [
    "Count your life by smiles, not tears. Count your age by friends, not years.",
    "A wish for you on your birthday, whatever you ask may you receive, whatever you seek may you find, whatever you wish may it be fulfilled on your birthday and always.",
    "Happy birthday! Your life is just about to pick up speed and blast off into the stratosphere. Wear a seat belt and be sure to enjoy the journey. ",
  ]

  return (
    wishes.map((val, index) => {
      return (
        <div className='card' key={index}>
          <h3>
            <em>{val}</em>
          </h3>
          <hr style={{ border: '1px solid black', width: '100%'}}></hr>
          <div>
            <h2>Happy Birthday!</h2>
            <h2 style={{ textTransform: 'capitalize' }}>{name}</h2>
          </div>
        </div>
      )
    })
  )
}

export default App
