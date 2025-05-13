import React, { useEffect, useState } from "react"
import { Nav } from "./components/ui/Nav"




const App:React.FC = () => {
   const [toggle , SetToggle] = useState<boolean>(false)

    useEffect(()=>{
        toggle ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
    },[toggle])

    const toggleFunction = ():void => {
        SetToggle(!toggle)
    }
   
  return <>
    <div
      className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[#323232]"
    >
      <Nav toggle={toggle} toggleFunction={toggleFunction}/>
    </div>
  </>
}
export default App