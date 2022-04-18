import { useEffect, useRef } from "react"
import { init } from 'ityped'
import "./home.scss"

export default function Home() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true, 
      backDelay: 2000,
      backSpeed: 30,
      strings: ["Fun!","Engaging!","Cool!"],
    });

  }, [])

  return (
    <div className="home" id="home">
      <div className="left">
          <div className="imgContainer">
            <img src="assets/smile.png" alt="" />
          </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hey there! Welcome to</h2>
          <h1>Stimulation Station</h1>
          <h3>
            It's <span ref={textRef}></span>
            </h3>
        </div>
        <a href="#games">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
