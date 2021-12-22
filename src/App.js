import React, { useState } from 'react'
import { CLOSING } from 'ws'
const Header = (props)=>{
  return(
  <h1>{props.name}</h1>
  )
}
const Statistic = ({text, value}) => {
  if (text === "positive") {
    return (
      <tr>
        <td>{text} {value} %</td> 
        </tr>
    )
  }
  return (
    <tr>
      <td>{text} {value}</td>
      </tr>
  )
}


const Statistics = ({click}) => {
  const total = click.good+click.bad+click.neutral
  const average = (click.good * 1 + click.bad* -1) /total
  const positive = (click.good/total)*100

  if(total === 0){
    return(
      <div>
        No feedback given bro
      </div>
    )
    
  }
  return(
    <div>
      <table>
      <Statistic text="good" value={click.good} />
          <Statistic text="all" value={total} />
          <Statistic text="average" value={average} />
          <Statistic text="positive" value={positive} />
        </table>
    </div>
  )
}
const Button = ({onClick, text})=>{
return(
  <button onClick={onClick}>{text}</button>
)
}


const App = () => {
  // save clicks of each button to its own state
 
 const [clicks, setClicks] = useState({
   good:0 , neutral:0, bad:0
 })
  const handleGoodClick = ()=>{
    setClicks({...clicks, good: clicks.good + 1})
  }

  const handleNeutralClick = ()=>{
    setClicks({...clicks, neutral: clicks.neutral + 1})
  }
  const handleBadClick = ()=>{
    setClicks({...clicks, bad: clicks.bad + 1})
  }

  
  return (
    <div>   
      <Header name = "Give Feedback"/>
      <Button onClick={handleGoodClick} text="good"/>
      <Button onClick={handleNeutralClick} text="neutral"/>
      <Button onClick={handleBadClick} text="bad"/>
     <br/>
      <Statistics click = {clicks}/>
    
    </div>
  )
}                         



export default App




























