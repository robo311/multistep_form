import React, { useEffect, useState } from 'react'

function Addons({ setData, data, setPage }) {

  const [isChecked, setChecked] = useState({
    1: false,
    2: false,
    3: false,
  })

  console.log(isChecked)

  const handleAddonsPick = (id) =>{
    setChecked({
      ...isChecked,
      [id]: !isChecked[id]
    })
  }

  useEffect(()=>{
    handleData()
  },[isChecked])


  const handleData = () => {

    

    setData({
      ...data,
      addons:[isChecked]
    })
  }


  return (
    <>
      <section className='addons'>
        <div>
          <h1>Pick add-ons</h1>
          <p>Add-ons enhance your gaming experience.</p>
        </div>
        <div className='addons_wrapper'>
          <div className='card' 
            onClick={() => handleAddonsPick(1)}
            style={{ border: isChecked[1] ? "1px solid hsl(243, 100%, 62%)": "1px solid hsl(229, 24%, 87%)"}}
          >
              <input readOnly type="checkbox" checked={isChecked[1]} />
              <div>
                <h3>Online service</h3>
                <p>Access to multiplayer games</p>
              </div>
              <p className='price'>+$1/mo</p>
          </div>
          <div className='card' 
            onClick={() => handleAddonsPick(2)}
            style={{ border: isChecked[2] ? "1px solid hsl(243, 100%, 62%)": "1px solid hsl(229, 24%, 87%)"}}
          >
              <input readOnly type="checkbox" checked={isChecked[2]} />
              <div>
                <h3>Larger storage</h3>
                <p>Extra 1TB of cloud save</p>
              </div>
              <p className='price'>+$2/mo</p>
          </div>
          <div className='card' 
            onClick={() => handleAddonsPick(3)}
            style={{ border: isChecked[3] ? "1px solid hsl(243, 100%, 62%)": "1px solid hsl(229, 24%, 87%)"}}
          >
              <input readOnly type="checkbox" checked={isChecked[3]} />
              <div>
                <h3>Customizable profile</h3>
                <p>Custom theme on your profile</p>
              </div>
              <p className='price'>+$2/mo</p>
          </div>
        </div>
      
      </section>

      <div className='buttons'>
        <p onClick={()=> setPage(prevPage => prevPage - 1)} className="back_button">Go Back</p>
        <button className="next_button" onClick={()=>setPage(prevPage => prevPage + 1)} type="button">Next Step</button>
      </div>
    </>
  )
}

export default Addons