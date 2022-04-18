import React from "react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-Logo">
        <img
          src="https://ice-nas.fra1.digitaloceanspaces.com/development/play/logo-white.svg"
          alt="logo"
        />
      </div>
      <div className="Footer-Navigation-box">
        <ul className="Footer-Navigation">
          <li>HOME</li>
          <br></br>
          <li>STORIES</li>
          <br></br>
          <li>FEATURES</li>
          <br></br>
          <li>PRICING</li>
          <br></br>
        </ul>
      </div>

      <div className="Footer-Copyright-Button-Container">
        <p className="Footer-Copyright">Copyright 2019. All Rights Reserved</p>
        <Link to="/">
          <button className="Footer-Button">
            GET AN INVITE &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
            <span className="Article-Arrow-White">&#10230;</span>
          </button>
        </Link>
      </div>
    </div>
  )
}
