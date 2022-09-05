import { useState } from 'react'
import './App.css'
import Die from '../components/Die' 

function App() {
  

  const [dice,setDice] = useState(allNewDice())
  
  function allNewDice() {
    let numberArray = []
    for(let count = 0; count < 10; count ++){
    
      numberArray.push({
        value:Math.floor(Math.random() * 6),
        isHeld:true,
        }
      )
    }
    return numberArray
  } 
   
  const eachDie = dice.map(
    number => 
    <Die value={number.value} 
    toggle={trueOrFalse}
    />
  )

  function trueOrFalse (){
     console.log("cc")
  }

  function rollDice() {
    setDice(allNewDice())
  }



  return (
    <div className="App">
      <main>
        <div className="dice-container">{eachDie}</div>
        <button className="roll-dice" onClick={rollDice}>
          Roll dice
        </button>
      </main>
    </div>
  )
}

export default App
