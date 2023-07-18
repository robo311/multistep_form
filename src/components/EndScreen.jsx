import React from 'react'
import thankYou from "../img/icon-thank-you.svg"

function EndScreen() {
  return (
    <>
        <section className='end_screen'>
            <div>
                <img src={thankYou} alt="end_img" />
            </div>
            
            <h1>Thank you!</h1>
            <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free email us at support@loremgaming.com.</p>
            
        </section>
    
    </>
  )
}

export default EndScreen