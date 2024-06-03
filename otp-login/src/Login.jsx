import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate();
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (number.length !== 10) {
      alert("Enter 10 numbers");
      return;
    }
    navigate("/otp");
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px'}}>
      <h1>Login via OTP</h1>
      <input type='text' placeholder='Enter your Mobile Number' style={{ border: '1px solid white', padding: '10px', borderRadius: '8px', color: 'white', backgroundColor: 'transparent', width: '250px'}} onChange={(e) => setNumber(e.target.value)} />
      <button style={{ color: 'white', backgroundColor: 'transparent', border: '1px solid white', padding: '10px', borderRadius: '8px'}} onClick={handleSubmit}>Submit</button>
    </div>
  )
}
