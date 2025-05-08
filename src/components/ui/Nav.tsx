import { Github } from "../../icons/github"
import { Linkedin } from "../../icons/Linledin"
import { Leetcode } from "../../icons/Leetcode"
import { X } from "../../icons/X"
import { Home } from "../../icons/Home"
import { Resume } from "../../icons/Resume"
import { User } from "../../icons/User"
import { Moon } from "../../icons/Moon"
import { Sun } from "../../icons/Sun"
import { Projects } from "../../icons/Projects"
import { useEffect, useState } from "react"

export const Nav = ()=>{
    const [Toggle , SetToggle] = useState<boolean>(false)

    useEffect(()=>{
      if(Toggle){
        document.documentElement.classList.add('dark')
      }
      else{
        document.documentElement.classList.remove('dark')
      }
    },[Toggle])
  
    const ToggleFunction = ()=>{
      SetToggle(!Toggle)
    }
  
    return <>
    
    <div className="md:w-full sm:w-3xl flex justify-center p-2 text-white dark:text-black ">
        <div className="bg-[#2b2b2b] w-4xl flex px-2 py-4 rounded-xl justify-center dark:bg-white dark:border-1 dark:border-black">
            <div className="w-full flex justify-between pr-4 items-center">
                <div className="">
                    <span className="bg-white text-black p-3 px-5 rounded-xl dark:border-1 darl:border-black dark:bg-[#2b2b2b] dark:text-white">T.</span>
                </div>
                <div className="flex items-center gap-5">
                    <span><Home/></span>
                    <span><Projects/></span>
                    <span><Resume/></span>
                    <span><User/></span>
                </div>
            </div>
            <div className="border-l border-gray-500"></div>
            <div className="flex w-full justify-between items-center pl-5">
                <div className="flex  items-center gap-5">
                    <span><Github/></span>
                    <span><Linkedin/></span>
                    <span><Leetcode/></span>
                    <span><X/></span>
                </div>
                <div className="px-2 items-center">
                    <button onClick={ToggleFunction} >{Toggle ? <Moon/> : <Sun/>}</button>
                </div>

            </div>
        </div>
    </div>
    </>
}
