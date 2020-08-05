import React, { useState } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import GifCards from './Components/GifCards/GifCards';


function App() {
  const [UserInput, setUserInput] = useState<string>('')

  return (
    <div className="App">
      <SearchBar
        setUserInput={(value: string) => setUserInput(value)}
      />
      <GifCards
        userInput={UserInput}
      />
    </div>
  );
}

export default App;
