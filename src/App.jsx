import { useState } from 'react'
import SidePanel from "./components/SidePanel"
import PersonalInfo from "./components/PersonalInfo"
import SelectPlan from "./components/SelectPlan"
import Addons from "./components/Addons"
import Summary from "./components/Summary"
import mobileImg from "./img/bg-sidebar-mobile.svg"
import EndScreen from "./components/EndScreen"


function App() {
  const [page, setPage] = useState(0)

  const [data, setData] = useState({
    name: "",
    email: "",
    phone_number: "",
    plan: "",
    plan_id: 0, 
    biling: 1,
    addons: [],
  })

  

  const pageDisplay = () => {
    if(page === 0){
      return <PersonalInfo page={page} setData={setData} data={data} setPage={setPage}/>
    }else if(page === 1){
      return <SelectPlan page={page} setData={setData} data={data} setPage={setPage}/>
    }else if(page === 2){
      return <Addons page={page} setData={setData} data={data} setPage={setPage}/>
    }else if(page === 3){
      return <Summary data={data} setPage={setPage}/>
    }else if (page === 4){
      return <EndScreen/>
    }
  }

  console.log(data)


  return (
    
    <main className="app">
      <img src={mobileImg} alt="" />
      <div className="app-wrapper">
        <div className="app-inner">
          <SidePanel page={page} />
          <div className="container">
            {pageDisplay()}
          </div>
        </div>
      </div>
    </main>
    
    
  )
}

export default App
