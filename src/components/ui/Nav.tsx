import { useState } from "react"
import { Burger } from "../../icons/Burger"
import { Github } from "../../icons/github"
import { Home } from "../../icons/Home"
import { Leetcode } from "../../icons/Leetcode"
import { Linkedin } from "../../icons/Linledin"
import { Moon } from "../../icons/Moon"
import { Projects } from "../../icons/Projects"
import { Resume } from "../../icons/Resume"
import { User } from "../../icons/User"
import { X } from "../../icons/X"
import { Sun } from "../../icons/Sun"
import { Backspace } from "../../icons/Backspace"

type NavProps = {
    toggle:boolean,
    toggleFunction:()=>void
}

export const Nav:React.FC<NavProps> = ({toggle,toggleFunction})=>{

  
    const [isOpen , SetisOpen] = useState<boolean>(false)

   

    const burgerOpen = ()=>{
        SetisOpen(!isOpen)
    }
    const NavHoverStyles = "hover:bg-[#3f3f44] hover:rounded p-3 hover:text-blue-300"
    return <>
           <div className={`${isOpen ? "hidden" : "flex justify-center"}`}>
             <div className="flex justify-between items-center w-[250px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px] bg-[#323232] py-4 px-2 mt-4 rounded-xl dark:bg-[#cacaca] dark:text-black text-white">
                <div className="pr-10">
                    <span className="bg-white text-black py-3 px-4 rounded-xl  dark:bg-black dark:text-white">T.</span>
                </div>
                 {/* Mobile Menu Icon */}
                <div className="md:hidden px-1" onClick={burgerOpen}>
                    <Burger />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-5 w-full ml-4 items-center">
                    <ul className="flex gap-4">
                        <li><Home/></li>
                        <li><Resume/></li>
                        <li><User/></li>
                        <li><Projects/></li>
                    </ul>
                    <hr  className="w-2"/>
                    <div className="flex justify-between w-full items-center">
                        <div className="">
                            <ul className="flex gap-4 items-center">
                            <li><Github/></li>
                            <li><Leetcode/></li>
                            <li><Linkedin/></li>
                            <li><X/></li>
                            </ul>
                        </div>
                        <div className="px-2" onClick={toggleFunction}>
                            {toggle ? <Moon/> : <Sun/>}
                        </div>
                    </div>
                </div>
            </div>
           </div>

        <div className={`${isOpen ? "bg-[#323232] text-white w-full h-full md:hidden" : "hidden" }`}>
                <nav className={` flex justify-end p-8 `} onClick={burgerOpen}>
                    <Backspace />
                </nav>
                <div className="p-10 text-xl">
                    <div className="flex justify-center w-full items-center ">
                        <div className="flex flex-col">
                        <div className={NavHoverStyles}>Home</div>
                        <div className={NavHoverStyles}>Resume</div>
                        <div className={NavHoverStyles}>User</div>
                        <div className={NavHoverStyles}>Projects</div>
                        </div>
                    </div>
                    <hr className="h-2 m-10"/>
                    <div className="flex justify-center w-full items-center">
                        <div className="flex flex-col">
                        <div className={NavHoverStyles}>Github</div>
                        <div className={NavHoverStyles}>LinkedIn</div>
                        <div className={NavHoverStyles}>Leetcode</div>
                        <div className={NavHoverStyles}>X</div>
                        </div>
                    </div>
                </div>
        </div>
       
           
    </>
}