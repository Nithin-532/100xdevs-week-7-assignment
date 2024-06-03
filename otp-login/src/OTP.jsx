import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

export default function OTP() {
  const ref0 = useRef('');
  const ref1 = useRef('');
  const ref2 = useRef('');
  const ref3 = useRef('');
  const [divIndex, setDivIndex] = useState(0);

  useEffect(() => {
    switch(divIndex) {
      case 0: {
        ref0.current.focus();
        break;
      }
      case 1: {
        ref1.current.focus();
        break;
      }
      case 2: {
        ref2.current.focus();
        break;
      }
      case 3: {
        ref3.current.focus();
        break;
      }
      default: {
        break;
      }
    }
  }, [divIndex]);

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px'}}>
      <h1>Login via OTP</h1>
      <div style={{ display: 'flex', gap: '10px' }}>
        <input ref={ref0} type="text" inputMode="numeric" pattern="[0-9]" maxLength="1" style={{ width: '15px', height: '15px', backgroundColor: 'transparent', border: '1px solid white', color: 'white', padding: '15px', fontSize: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center'}} onChange={() => setDivIndex(1)}/>
        <input ref={ref1} type="text" inputMode="numeric" pattern="[0-9]" maxLength="1" style={{ width: '15px', height: '15px', backgroundColor: 'transparent', border: '1px solid white', color: 'white', padding: '15px', fontSize: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center'}} onChange={() => setDivIndex(2)}/>
        <input ref={ref2} type="text" inputMode="numeric" pattern="[0-9]" maxLength="1" style={{ width: '15px', height: '15px', backgroundColor: 'transparent', border: '1px solid white', color: 'white', padding: '15px', fontSize: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center'}} onChange={() => setDivIndex(3)}/>
        <input ref={ref3} type="text" inputMode="numeric" pattern="[0-9]" maxLength="1" style={{ width: '15px', height: '15px', backgroundColor: 'transparent', border: '1px solid white', color: 'white', padding: '15px', fontSize: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center'}} onChange={() => setDivIndex('')}/>
      </div>
      <button style={{ color: 'white', backgroundColor: 'transparent', border: '1px solid white', padding: '10px', borderRadius: '8px'}}>Login</button>
    </div>
  )
}
