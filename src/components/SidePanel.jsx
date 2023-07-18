import React, { useState } from 'react'



function SidePanel({ page }) {


  console.log(page)

  return (
    <section className='panel'>
      <div className='text_wrapper'>
        <div className={page === 0 ? 'circle_activated' : 'circle'}>1</div>
        <div>
          <h2>STEP 1</h2>
          <h1>YOUR INFO</h1>
        </div>
      </div>
      <div className='text_wrapper'>
        <div className={page === 1 ? 'circle_activated' : 'circle'}>2</div>
        <div>
          <h2>STEP 2</h2>
          <h1>SELECT PLAN</h1>
        </div>
      </div>
      <div className='text_wrapper'>
        <div className={page === 2 ? 'circle_activated' : 'circle'}>3</div>
        <div>
          <h2>STEP 3</h2>
          <h1>ADD-ONS</h1>
        </div>
      </div>
      <div className='text_wrapper'>
        <div className={page === 3 || page === 4 ? 'circle_activated' : 'circle'}>4</div>
        <div>
          <h2>STEP 4</h2>
          <h1>SUMARRY</h1>
        </div>
      </div>
    </section>
  )
}

export default SidePanel