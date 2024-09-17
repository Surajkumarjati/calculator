import React from 'react'
import styles from "./App.module.css"
import Display from './componets/Display'
import ButtonContainer from './componets/ButtonContainer'
import{useState} from "react"

function App() {

let [calVal,setCalval]=useState("");
const onButtonClick=(buttonText)=>
  {
    
    if (buttonText === 'C'){
      setCalval("")

    }
    else if(buttonText === '='){
      const result= eval(calVal)
      setCalval(result)

    }
    else{
      const newDisplayValue=calVal + buttonText
      setCalval(newDisplayValue)
    }
  }




  return (
    <>
    <div className={styles.calculator}>
    <Display displayValue={calVal}></Display>
      <ButtonContainer 
      onButtonClick={onButtonClick}
      
      ></ButtonContainer>
    </div>
    </>
  )
}

export default App