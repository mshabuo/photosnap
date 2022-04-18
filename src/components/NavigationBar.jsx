import React from "react"
import { Link } from "react-router-dom"

export default function NavigationBar() {
  return (
    <div className="NavigationBar">
      <img
        src="https://ice-nas.fra1.digitaloceanspaces.com/development/play/logo.svg"
        alt="logo"
      />
      <div className="NavigationBar-list">
        <ul>
          <Link to="/stories">
            <li>STORIES</li>
          </Link>
          <Link to="/features">
            <li>FEATURES</li>
          </Link>
          <Link to="/pricing">
            <li>PRICING</li>
          </Link>
        </ul>
      </div>
      <h3 className="NavigationBar-Invite">GET AN INVITE</h3>
    </div>
  )
}
