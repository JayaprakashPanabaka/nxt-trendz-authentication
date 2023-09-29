// Write your JS code here
import {useState} from 'react'

import './index.css'

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
    showSubmitErr: false,
    errorMsg: '',
  })

  const onChangeUsername = event => {
    setLoginData({username: event.target.value})
    // console.log(username)
    // console.log(event.target.value)
  }

  const onChangePassword = event => {
    setLoginData({password: event.target.value})
    // console.log(event.target.value)
  }

  const onSubmitSuccess = props => {
    const {history} = props
    console.log(history)
    history.replace('/')
  }

  const onFormSubmit = async event => {
    event.preventDefault()
    const userDetails = {loginData}
    // const userDetails = {u}
    // console.log(userDetails)
    // console.log(username)
    // console.log(password)

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    console.log(response)

    const data = await response.json()
    console.log(data)

    if (response.ok === true) {
      onSubmitSuccess()
    } else {
      setLoginData({
        errorMsg: data.error_msg,
        showSubmitErr: true,
      })
    }
  }

  return (
    <div className="bg-container">
      {/* <h1>LoginForm</h1> */}
      <div className="img-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="website-img"
        />
      </div>

      <div className="form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-logo"
        />

        {/* onSubmit={onSubmitForm} */}
        <form className="login-form" onSubmit={onFormSubmit}>
          <div className="field-container">
            <label htmlFor="username" className="input-label">
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              value={loginData.username}
              className="input-field"
              placeholder="Username"
              onChange={onChangeUsername}
            />
          </div>

          <div className="field-container">
            <label htmlFor="password" className="input-label">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              className="input-field"
              value={loginData.password}
              placeholder="Password"
              onChange={onChangePassword}
            />
          </div>
          <div className="btn-container">
            <button type="submit" className="btn">
              Login
            </button>
          </div>
          {loginData.showSubmitError && (
            <p className="error-msg">*{loginData.errorMsg}</p>
          )}
        </form>
      </div>
    </div>
  )
}

export default LoginForm
