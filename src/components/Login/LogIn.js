import React, { Component } from 'react'

import './LogIn.css'

class LogIn extends Component {
  render () {
    return (
        <div>

            <div>
                <h2>Log In</h2>

                <form>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='text' name='email' onChange={this.props.handleInput} />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='text' name='password' onChange={this.props.handleInput} />
                </div>
                <input value='Submit' type='submit' onClick={this.props.handleLogIn} />
                </form>
            </div>

            <div>
                <h2>Sign Up</h2>

                <form>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='text' name='email' onChange={this.props.handleInput} />
                </div>

                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='text' name='password' onChange={this.props.handleInput} />
                </div>
                <input value='Submit' type='submit' onClick={this.props.handleSignUp} />
                </form>
            </div>
        </div>
    )
  }
}

export default LogIn;
