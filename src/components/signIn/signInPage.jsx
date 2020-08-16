import React from 'react'
import './signIn.css'

const SignIn = () => {
  return (
    <div className='signIn_container' >
      <div className="signIn_container_cover">
        <div className="signIn_container_cover_first">
          <img src="./images/img/sign/Login_1.svg" width='100%' height='100%' alt="login"/>
        </div>
        <div className="signIn_container_cover_second">
          <div className="signIn_container_cover_second_form">
            <form action="post">
              <div>
                <div>
                  <label>Username:</label>
                </div>
                <div>
                  <input type="text" />
                </div>
              </div>
              <div>
                <div>
                  <label>Password:</label>
                </div>
                <div>
                  <input type="password" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn