import React, { Component, useState } from "react"
import person from "../../assets/images/sumra/icon-person.svg"
import lock from "../../assets/images/sumra/icon-lock.svg"
import logout from "../../assets/images/sumra/icon-logout.svg"
import { connect } from "react-redux"
import { getUserAccessToken } from "../../store/authSumra/actions"
import { withAuthMain } from "../../components/hoc/withAuthMain"
import { compose } from "redux"
import { withHomeRedirect } from "../../components/hoc/withHomeRedirect"
import { Link, Redirect } from "react-router-dom"
const LoginForm = ({ className, getUserAccessToken }) => {
  const [username, setUsername] = useState("VOLODYMYRB")
  const [password, setPassword] = useState("vSi0PcykN5")

  className += " login-form"

  const changeUserName = event => {
    setUsername(event.target.value)
  }

  const changePassword = event => {
    setPassword({ password: event.target.value })
  }

  const onFormSubmit = event => {
    event.preventDefault()

    if (username && password) {
      getUserAccessToken({ username, password })
    }
    debugger
    return <Redirect to={"/"} />
  }

  return (
    <div className={className}>
      <h1 className="h1-title">Login with Sumra ID</h1>

      <form onSubmit={onFormSubmit}>
        <fieldset className="sumra-input-fieldset">
          <legend>User name</legend>

          <img
            className="sumra-input-fieldset-icon"
            src={person}
            alt="person"
          />

          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={changeUserName}
          />
        </fieldset>

        <fieldset className="sumra-input-fieldset">
          <legend>Password</legend>

          <img className="sumra-input-fieldset-icon" src={lock} alt="lock" />

          <input
            type="text"
            placeholder="Enter password"
            value={password}
            onChange={changePassword}
          />
        </fieldset>

        <button className="sumra-Button" type="submit">
          <img
            className="sumra-Button-icon-left"
            src={logout}
            width="18"
            alt="logout"
          />
          <span>Sign up</span>
        </button>

        <div className="sumra-link-forgotPassword">Forgot password?</div>
        <div className="sumra-link-createUser">
          New user?
          <Link to="/auth">
            <span>Create a Sumra ID</span>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default compose(
  connect(null, { getUserAccessToken }),
  withHomeRedirect,
  withAuthMain
)(LoginForm)
