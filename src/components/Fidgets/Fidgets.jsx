import React from 'react'
import "./fidgets.scss"

export default function Fidgets() {
  const data = [
  {  
    id: 1,
    name: "Fidget Spinner",
    img: "assets/fidgetspinner.png",
    icon: "assets/spin.png",
    desc: "Play with the fidget spinner by using your mouse to spin the toy and earn points!",
    
  },
  {  
    id: 2,
    name: "Cookie Clicker",
    img: "assets/cookie.png",
    icon: "assets/click.png",
    desc: "Click on cookies to earn more cookies, and spend earned cookies for power-ups!",
    featured: true,
  },
  {  
    id: 3,
    name: "Pop It!",
    img: "assets/popit.jpeg",
    icon: "assets/pop.png",
    desc: "Play with colorful pokable bubbles, similar to bubble wrap, that can be flipped and re-used!",
  },
];

  return (
    <div className="fidgets" id="fidgets">
        <h1>Fidgets</h1>
        <div className="container">
          {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/play.png" className="left" alt=""/>
              <img src={d.img} className="item" alt="" />
              <img src={d.icon} className="right" alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4 onClick={()=> {window.open('http://localhost:8080/FidgetTool/FidgetTool.html', '_blank');}}>Play.</h4>
            </div>
          </div>
          ))}
        </div>
    </div>
  )
}
