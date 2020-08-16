import React from 'react'
import './signIn.css'

const SignIn = props => {
  return (
    <div className='signIn' >
      <div className='signIn_cover' >
        <div className="signIn_cover_first">
          <div className="signIn_cover_first_child">
            <form action="post" className='signIn_form' >
              <div className="signIn_form_username">
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
        <div className="signIn_cover_second">
          <div className="signIn_cover_second_child">
            <img src="./images/img/sign/Login_1.svg" alt="login" width='100%' height='100%' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn