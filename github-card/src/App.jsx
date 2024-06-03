import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Card from "./Card";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [username, setUsername] = useState('');

  async function fetchGithubData(e) {
    e.preventDefault();
    if (username === '') return;
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      console.log(response.data)
      setData(response.data);
    } catch(e) {
      console.log("error occured", e);
    }
  }

  return (
    <>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent:'center'}}>
        <p>Enter Username</p>
        <input type="text" placeholder="John Doe" onChange={(e) => setUsername(e.target.value)}></input>
        <button onClick={fetchGithubData}>Fetch</button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {data && <Card data={data} />}
      </div>
    </>
  )
}

export default App
