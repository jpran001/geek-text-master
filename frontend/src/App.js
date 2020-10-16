import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [msg, setMsg] = useState('');
  useEffect(() => {
    async function test(){
      const res = await fetch('http://localhost:8080')
      const data = await res.text();
      setMsg(data);
    }

    test();
  },[])

  return (
    <div>
      <h1>hi</h1>
      <h1>{msg}</h1>
    </div>
  );
}

export default App;
