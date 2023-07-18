import React, { useState } from 'react'

function PersonalInfo({ setData, data, setPage, page }) {

  const [invalidInput, setInvalidInput] = useState("")

  const handleNameChange = (event) => {
    setData({
      ...data,
      name: event.target.value
    })
  }

  const handleEmailChange = (event) => {
    setData({
      ...data,
      email: event.target.value
    })
  }

  const handlePhoneChange = (event) => {
    setData({
      ...data,
      phone_number: event.target.value
    })
  }

  const handleNext = () => {
    if (data.name && data.email && data.phone_number){
      setPage(page + 1)
      setInvalidInput("")
    }else{
      if(!data.name){
        setInvalidInput("input1")
      }else if(!data.email){
        setInvalidInput("input2")
      }else if(!data.phone_number){
        setInvalidInput("input3")
      }
    }
  }

  return (
    <>
      <section section className='personal_info'>
        <div>
          <h1>Personal Info</h1>
          <p>Please provide your name, email address, and phone number.</p>
        </div>
        <div>
          <div className='label_input'>
            <label htmlFor="">Name</label>
            {invalidInput === "input1" ? <small className='notice'>This field is required</small> : ""}
          </div>
          <input value={data.name} placeholder='e.g. Stephen King' required type="text" onChange={handleNameChange} style={{borderColor: invalidInput === "input1" ? "red" : "hsl(231, 11%, 63%)"}}/>
        </div>
        <div>
          <div className='label_input'>
            <label htmlFor="">Email Address</label>
            {invalidInput === "input2" ? <small className='notice'>This field is required</small> : ""}
          </div>
          <input value={data.email} placeholder='e.g. stephenking@mail.com' required type="email" onChange={handleEmailChange} style={{borderColor: invalidInput === "input2" ? "red" : "hsl(231, 11%, 63%)"}}/>
        </div>
        <div>
          <div className='label_input'>
            <label htmlFor="">Phone Number</label>
            {invalidInput === "input3" ? <small className='notice'>This field is required</small> : ""}
          </div>
          <input value={data.phone_number} placeholder='e.g. +1 234 567 890' required type="tel" onChange={handlePhoneChange} style={{borderColor: invalidInput === "input3" ? "red" : "hsl(231, 11%, 63%)"}}/>
        </div>
      </section>
      <div className='buttons'>
        <div></div>
        <button className="next_button" onClick={handleNext} type="button">Next Step</button>
      </div>
    </>
  )
}

export default PersonalInfo