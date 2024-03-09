import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Flashcard from './component/Flashcard'
import Button from './component/Button'
import French from './component/french.json'

function App() {
  const [index, setIndex] = useState(0);
  const [card, setCard] = useState(French[0]);

  function prevCard() {
    setIndex(prevIndex => prevIndex-1)
  }

  function nextCard() {
    setIndex(nextIndex => nextIndex+1)
  }

  return (
    <div className="container">
      <div className="head">
        <h1>You think you can speak French?</h1>
        <h2>Examinez vos capacités ici!</h2>
        <h2>Number of cards: {French.length}</h2>
      </div>
      <Flashcard 
        {...French[index]}
      />
      <Button onClick={prevCard} disabled = {index === 0 ? true:false}>&larr;</Button>
      <Button onClick={nextCard} disabled = {index === French.length - 1 ? true:false}>&rarr;</Button>
    </div>    
  )
}

export default App
