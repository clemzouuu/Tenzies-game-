import { useState } from 'react'
import './App.css'
import Die from '../components/Die'

function App() {
  

  const [dice,setDice] = useState(allNewDice())

  function allNewDice() {
    let numberArray = []
    for(let count = 0; count < 10; count ++){
     numberArray.push(Math.floor(Math.random() * 6))
    }
    return numberArray
  } 
  console.log(dice)
   
  const eachDie = dice.map(
    number => 
    <Die value={number} />
  )

  return (
    <div className="App">
      <main>
        <div className="dice-container">
          {eachDie}
        </div>
      </main>
    </div>
  )
}

export default App
