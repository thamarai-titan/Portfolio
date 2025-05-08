import { ReactElement } from "react"

type Variants = "black" | "purple" | "green" | "white"

export interface ButtonProps{
    text:string,
    rightIcon?:ReactElement,
    leftIcon?:ReactElement,
    onclick?:()=>void,
    variant:Variants,
    size?:"sm"|"md"|"lg"
}

export const VariantStyles = {
    "black" : "bg-black text-white ",
    "white" :"bg-white text-black",
    "purple":"bg-purple-100 text-black",
    "green":"bg-green text-white",
}

const defaultStyles = "p-2 px-4 rounded border-1"


export const Buttons = (props:ButtonProps) =>{
    return <>
    <button className={`${VariantStyles[props.variant]} ${defaultStyles}`}>{props.text    }</button>
    </>
}

