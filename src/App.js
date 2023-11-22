import React, {useEffect, useState} from 'react';
import './App.css';
import FormStyle from './PhoneMask.js'
import {chekEmail} from './EmailReg.js'


export default function RegisterForm() {
// Phone
useEffect(() => {
    const components = document.querySelectorAll('[maska="phone"]')
    if(!components) return

    components.forEach(item => {
      FormStyle(item)
    })


    chekEmail()
}, [])


const [inputValue, setinputValue] = useState('')
const [mail, setMail] = useState('')
const [userName, setUserName] = useState('')


  const inputNumberChange = (e) => {
    const timeValue = e.target.value
    setinputValue(timeValue)

  }

  const inputEmailChange = (e) => {
    const timeValue = e.target.value
    setMail(timeValue)

  }

  const inputUserName = (e) => {
    const timeValue = e.target.value
    setUserName(timeValue)
  }
  return(
      <div>
          <form className='regBlock' >
              <input type='text'placeholder='ФИО'value={userName} onChange={inputUserName}/>
                <input type='text' maska="phone" placeholder=' +996' value={inputValue} onChange={inputNumberChange}/>
                  <div className='.wrapper__input'>
                    <input type='text' className='email' value={mail} onChange={inputEmailChange}/>
                      </div>
                        <button className='testBtn'>проверка почты</button>
                          <span className='result'></span>
                        <button>Авторизоваться</button>
                      </form>
                    <div className='inputValue'>
                  <p>{inputValue} {inputNumberChange}</p>
                <p>{mail} {inputEmailChange}</p>
              <p>{userName} {inputUserName}</p>
          </div>
      </div>
  )
}