import React from "react"
import { UserDocument } from "userscope-data-models"

interface ProfileNavProps {
  user: UserDocument
}

const ProfileNav = (props: ProfileNavProps) => {
  if (props.user) {
    return (
      <ul className="nav navbar-nav">
        <li className="nav-item dropdown">
          <button
            id="profile-menu-dropdown"
            className="btn btn-link nav-link dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {props.user.displayName}
          </button>
          <ul className="dropdown-menu bg-dark border-dark" aria-labelledby="profile-menu-dropdown">
            <li className="nav-item">
              <a className="nav-link" href="/account">
                My Account
              </a>
            </li>
            <li className="dropdown-divider"></li>
            <li className="nav-item">
              <a className="nav-link" href="/logout">
                Logout
              </a>
            </li>
          </ul>
        </li>
      </ul>
    )
  }

  return (
    <ul className="nav navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="/login">
          Login
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/signup">
          Create Account
        </a>
      </li>
    </ul>
  )
}

interface HeaderProps {
  user: UserDocument
}

const Header = (props: HeaderProps) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <a href="/" className="navbar-brand">
        UserScope
      </a>

      <button type="button" data-toggle="collapse" data-target=".navbar-collapse" className="navbar-toggler">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse">
        <div className="dropdown-divider"></div>

        <ul className="nav navbar-nav mr-auto">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
        </ul>

        <ProfileNav user={props.user} />
      </div>
    </div>
  </nav>
)

export default Header
