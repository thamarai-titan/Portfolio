import { Github } from "../../icons/github"
import { Linkedin } from "../../icons/Linledin"
import { Leetcode } from "../../icons/Leetcode"
import { X } from "../../icons/X"
import { Home } from "../../icons/Home"
import { Resume } from "../../icons/Resume"
import { User } from "../../icons/User"
import { Projects } from "../../icons/Projects"

export const Nav = ()=>{
    return <>
    
    <div className="w-full flex justify-center p-2 text-white">
        <div className="bg-[#2b2b2b] w-4xl flex px-2 py-4 rounded-xl justify-center">
            <div className="w-full flex justify-between pr-4">
                <div className="">
                    <span className="bg-white text-black p-3 px-5 rounded-xl">T.</span>
                </div>
                <div className="flex items-center gap-5">
                    <span><Home/></span>
                    <span><Projects/></span>
                    <span><Resume/></span>
                    <span><User/></span>
                </div>
            </div>
            <div className="border-l border-gray-300"></div>
            <div className="flex w-full justify-between pl-5">
                <div className="flex items-center gap-5">
                    <span><Github/></span>
                    <span><Linkedin/></span>
                    <span><Leetcode/></span>
                    <span><X/></span>
                </div>
                <div>
                    <button>toggle</button>
                </div>

            </div>
        </div>
    </div>
    </>
}
