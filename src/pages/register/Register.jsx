import { useRef } from 'react'
import { useState } from 'react'
import './register.scss'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const emailRef = useRef()
    const passwordRef = useRef()

    const handleStart = () => {
        setEmail(emailRef.current.value)
    }
    const handleFinish = () => {
        setPassword(passwordRef.current.value)
    }

  return (
    <div className='register'>
        <div className="top">
            <div className="wrapper">
            <img src="logo.png" className='logo' alt="" />
            <button className="loginButton">Sing In</button>
            </div>
        </div>
        <div className="container">
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, consectetur!
            </p>
            {
                !email ? (
                    <div className="input">
                <input type="email" name="" id="" placeholder='Enter email' ref={emailRef} />
                <button className="registerButton" onClick={handleStart}>Get Started</button>
            </div>
                
            ) : (
                <form className="input">
                <input type="password" name="" id="" placeholder='Enter password' ref={passwordRef} />
                <button className="registerButton" onClick={handleFinish}>Start</button>
            </form>
            )
        }
        </div>
    </div>
  )
}
export default Register