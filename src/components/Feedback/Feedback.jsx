import React, { useState } from 'react'
import "./feedback.scss"

export default function Feedback() {

  const [message, setMessage] = useState(false)
  const handleSubmit = (e) =>{
    e.preventDefault();
    setMessage(true)
  }
  return (
    <div className="feedback" id="feedback">
      <div className="left">
        <img src="assets/feedback.png" alt="" />
      </div>
      <div className="right">
        <h2>Contact Us!</h2>
        <form onSubmit={handleSubmit}>
          <input type ="text" placeholder="Email"/>
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thank you for your feedback!</span>}
        </form>
      </div>
    </div>
  )
}
