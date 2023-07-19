import React, { useEffect, useRef, useState } from 'react'
import Alert from './Alert'

export default function Formular() {

    const [show, setShow] = useState(false)
    const [submit,setSubmit] = useState(false)
    const [values,setValues] = useState({
        user_name: "",
        email: "",
        password: "",
    })
   


    const inputName = useRef(null) 
    const inputEmail = useRef(null) 
    const inputPassword = useRef(null) 

    useEffect(() => {
        inputName.current.focus()
    },[])
    
    const nameChange = (e) => {
        setValues({...values, user_name: e.target.value})
    }
    const emailChange = (e) => {
        setValues({...values, email: e.target.value})
    }
    const passwordChange = (e) => {
        setValues({...values, password: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!values.user_name) {
            inputName.current.focus()
        }
        else if(!values.email) {
            inputEmail.current.focus()
        }
        else if(!values.password){
            inputPassword.current.focus()
        }
        setSubmit(true)
    }

    const handleShow = () => {
        if(values.user_name && values.email && values.password){
            setShow(true)
            console.log(show)
        }
    }

  

  return (
        <div>
        {show && submit ?  <Alert /> :(<form className='container' onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter your name' ref={inputName} onChange={nameChange}/>
            {!values.user_name && <label>Please enter your name</label>}
            <input type="email" placeholder='Enter your email'ref={inputEmail} onChange={emailChange}/>
            {!values.email && <label>Please enter your email</label>}
            <input type="password" placeholder='Enter your password'ref={inputPassword} onChange={passwordChange}/>
            {!values.password && <label>Please enter your password</label>}
            <button onClick={handleShow}>Register</button>
        </form>
       
        )}
            
        </div>
  )
}
