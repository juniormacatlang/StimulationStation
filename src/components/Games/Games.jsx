import React from 'react'
import "./games.scss"
import { puzzlesPortfolio, educationalPortfolio } from '../../data'
import { useEffect, useState } from 'react'
import GamesList from '../GamesList/GamesList'
export default function Games() {

  const [selected, setSelected] = useState("educational")
  const [data, setData] = useState([])

const list = [
  {
      id: "educational",
      title: "Educational",
  },
  {
      id: "puzzles",
      title: "Puzzles",
  },
];

{/*Method for button that switches between view of two game types*/}
useEffect(()=>{

  switch(selected){
      case "educational":
          setData(educationalPortfolio);
          break;
      case "puzzles":
          setData(puzzlesPortfolio);
          break;
      default:
          setData(educationalPortfolio);
  }


},[selected])


  return (
    <div className="games" id="games">
      <h1>Games</h1>
      <ul>
        {list.map(item=>( 
          <GamesList 
           title={item.title} 
           active = {selected === item.id} 
           setSelected ={setSelected}
           id={item.id}
           link={item.link}
           />
          ))}
        </ul>
        {/*Above loads list of games with the applicable variables from portfolio*/}
      <div className="container">
          {data.map((d) => (
           <div className="item">
           	<img src={d.img} alt="" onClick={()=> {window.open('http://localhost:8080/MathGame.html', '_blank');}}/>
           	{/*Hosting Games locally on port 8080, would be changed for similar local server if actually running or to cloud server*/}
           	<h3>{d.title}</h3>
           </div>
           ))}
      </div>
    </div>
  )
}
