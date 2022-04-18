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
           />
          ))}
        </ul>
      <div className="container">
          {data.map((d) => (
           <div className="item">
           <img src={d.img} alt="" />
            <h3>{d.title}</h3>
                </div>
                ))}
      </div>
    </div>
  )
}
