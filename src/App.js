import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

const [search, setSearch] = useState("")

const handleChange = (event) => {
  setSearch(event.target.value)
}

const handleSubmit = () => {
  
}

  return (
    <div className="App">
        
      <form onSubmit = {handleSubmit}>
          <input value = {search} onChange = {handleChange} type="text" />
          <input type="submit" />
      </form>

    </div>
  );
}

export default App;
