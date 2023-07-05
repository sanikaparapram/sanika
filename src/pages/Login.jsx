import React from 'react'
import "./Login.css"

export const Login = () => {
  return (
    <>
    {/* <div>Login</div> */}

  <form method="post">
    <div className="loginbox">
      <div className="login">
         <h1>Login</h1>
         <div className="tt">
           <label htmlFor="email">Email:</label>
           <input type="text" name="email" id="email"/> 
         </div>
         <div className="t2">
         <label htmlFor="password">Password:</label>
         <input type="password" name="password" id="password" />
         </div>
         <div className="t3">
         <input type="checkbox" id="check" />
         <label htmlFor="check">Show Password</label>
         </div>
         <div className="t4">
            <button>SIGN IN</button>
         </div>
         <div className="t8">
            <div className="a">Forgot <span>Username / Password?</span></div>
            <div className="b">Don't have an account? <span>Sign up</span></div>
         </div>
        </div>
      </div>
    </form>
    </>
    
  )
}
