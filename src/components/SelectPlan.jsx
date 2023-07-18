import React, { useEffect, useState } from 'react'
import arcade from "../img/icon-arcade.svg"
import advanced from "../img/icon-advanced.svg"
import pro from "../img/icon-pro.svg"

function SelectPlan({ setData, data, setPage, page }) {

  const [isChecked, setChecked] = useState(null)
  const [biling, setBiling] = useState(data.biling)
  const [planId, setPlanId] = useState(data.plan_id)
  const [invalidInput, setInvalidInput] = useState("")
    

  const handlePlanPick = () => {
    setChecked(planId)
    handleData()
  }

  useEffect(()=>{
    handlePlanPick()
    console.log(data)
  },[planId, biling])
  



  const handleData = () => {
    setData({
      ...data,
      plan: planId,
      biling: biling,
      plan_id: planId
    })
  }

  


  const handleBiling = () => {
    const bilingButton = document.getElementById("biling").checked
    
    if(!bilingButton){
      setBiling(1)
    }else{
      setBiling(2)
    }
  }


  const handleNext = () => {
    if (data.plan !== 0){
      setPage(page + 1)
      setInvalidInput("")
    }else{
      setInvalidInput("plan")
    }
  }



  return (
    <>
      <section className='select_plan'>
        <div>
          <h1>Select your plan</h1>
          <p>You have the option of monthly or yearly billing.</p>
          {invalidInput === "plan" ? <small className='notice'>Please select one plan.</small> : ""}
        </div>
        <div className='plan_wrapper'>
          <div className='card' onClick={() => setPlanId(1)}
            style={{ border: isChecked === 1 ? "1px solid hsl(243, 100%, 62%)": "1px solid hsl(229, 24%, 87%)"}}>
              
              <img src={arcade} alt="arcade" />
              
              <div>
                  <h3>Arcade</h3>
                  {biling === 1 ? <p>$9/mo</p> : <p>$90/yr</p>}
                  {biling === 2 && <p className='months_free'>2 months free</p>}
              </div>
          </div>
          <div className='card' onClick={() => setPlanId(2)}
            style={{ border: isChecked === 2 ? "1px solid hsl(243, 100%, 62%)": "1px solid hsl(229, 24%, 87%)"}}>
              <img src={advanced} alt="advanced" />
              <div>
                  <h3>Advanced</h3>
                  {biling === 1 ? <p>$12/mo</p> : <p>$120/yr</p>}
                  {biling === 2 && <p className='months_free'>2 months free</p>}
              </div>
          </div>
          <div className='card' onClick={() => setPlanId(3)}
            style={{ border: isChecked === 3 ? "1px solid hsl(243, 100%, 62%)": "1px solid hsl(229, 24%, 87%)"}}>
              <img src={pro} alt="pro" />
              <div>
                  <h3>Pro</h3>
                  {biling === 1 ? <p>$15/mo</p> : <p>$150/yr</p>}
                  {biling === 2 && <p className='months_free'>2 months free</p>}
              </div>
          </div>
        </div>

        <div className='biling'>
          <p style={{ color: biling === 1 ? "hsl(213, 96%, 18%)" : "hsl(231, 11%, 63%)"}}>Monthly</p>
          <label className="switch">
            <input onChange={handleBiling} id='biling' type="checkbox"/>
            <span className="slider"></span>
          </label>
          <p style={{ color: biling === 2 ? "hsl(213, 96%, 18%)" : "hsl(231, 11%, 63%)"}}>Yearly</p>
        </div>
      </section>

      <div className='buttons'>
        <p onClick={()=> setPage(prevPage => prevPage - 1)} className="back_button">Go Back</p>
        <button className="next_button" onClick={handleNext} type="button">Next Step</button>
      </div>
    </>
  )
}

export default SelectPlan