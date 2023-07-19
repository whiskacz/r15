import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import Formular from './components/Formular'

export default function R15App () {
   

    return (
        <div className='wrapper'>
            <Formular />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<R15App />)