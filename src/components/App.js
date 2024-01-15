
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let [input,setInp] = useState("");
  function greet(e){
    setInp("Hello "+e.target.value)
  }
  return (
    <div>
      <p>Enter your name:</p>
      <input type="text" id="user" onChange={greet}/>
      <p>{input}</p>
    </div>
  )
}

export default App
