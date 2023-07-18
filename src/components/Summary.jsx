import React, { useState } from 'react'

function Summary({ data, setPage }) {

 

  const handlePlan = (data) => {
    const selectedPlan = []
    if(data?.plan === 1){
      selectedPlan.push({plan_name: "Arcade", price: data.biling === 1 ? 9 : 90})
    }else if(data?.plan === 2){
      selectedPlan.push({plan_name: "Advanced", price: data.biling === 1 ? 12 : 120})
    }else if(data?.plan === 3){
      selectedPlan.push({plan_name: "Pro", price: data.biling === 1 ? 15 : 150})
    }
    return selectedPlan
  }

  const selectedPlan = handlePlan(data)
  console.log(selectedPlan)

  
  const handleBiling = (data) => {
    const selectedBiling = []
    if(data?.biling === 1){
      selectedBiling.push({biling_name: "Month", biling_type: "Monthly", price_type: "mo"})
    }else if(data?.biling === 2){
      selectedBiling.push({biling_name: "Year", biling_type: "Yearly", price_type: "yr"})
    }
    return selectedBiling
  }

  const selectedBiling = handleBiling(data)

  console.log(selectedBiling)


  const handleAddons = (data) => {
    const selectedAddons = [];

    if(data?.addons[0][1]){
      selectedAddons.push({name: "Online Service", price: data.biling === 1 ? 1 : 10})
    }
    if(data?.addons[0][2]){
      selectedAddons.push({name: "Larger Storage", price: data.biling === 1 ? 2 : 20})
    }
    if(data?.addons[0][3]){
      selectedAddons.push({name: "Customizable Profile", price: data.biling === 1 ? 2 : 20})
    }
    return selectedAddons
  }

  const selectedAddons = handleAddons(data)


  const handleTotalPrice = () =>{
    let price = 0
    selectedAddons.map((item)=> {
      price = price + item.price
    })
    price = price + selectedPlan[0].price
    return price
  }
 

  return (
    <>
      <section className='summary'>
        <div className='header'>
          <h1>Finishing up</h1>
          <p>Double-check if everything looks OK before confirming.</p>
        </div>
        <div className='plan_biling'>
          <div>
            <h3>{selectedPlan[0].plan_name} ({selectedBiling[0].biling_type})</h3>
            <p onClick={()=> setPage(1)}>Change</p>
          </div>

          <h3>${selectedPlan[0].price}/{selectedBiling[0].price_type}</h3>
        </div>

        <hr />

        <div className='additional'>
          {selectedAddons.map((item, index)=>(
            <div key={index}>
              <p>{item.name}</p>
              <h3>+{item.price}$/{selectedBiling[0].price_type}</h3>
            </div>
          ))}
        </div>

        <div className='total_price'>
          <p>Total (per {selectedBiling[0].biling_name})</p>
          <h2>${handleTotalPrice()}/{selectedBiling[0].biling_type}</h2>
        </div>
        
      </section>


      <div className='buttons'>
        <p onClick={()=> setPage(prevPage => prevPage - 1)} className="back_button">Go Back</p>
        <button className="next_button" onClick={()=>setPage(prevPage => prevPage + 1)} type="button">Confirm</button>
      </div>
    </>
  )
}

export default Summary