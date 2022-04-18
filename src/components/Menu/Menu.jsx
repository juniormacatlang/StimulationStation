import React from 'react'
import "./menu.scss"

export default function  Menu({ menuOpen, setMenuOpen}) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#home">Home</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#games">Games</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#fidgets">Fidgets</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#feedback">Feedback</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#about">About Us</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#settings">Settings</a>
            </li>
        </ul>
    </div>
  )
}
