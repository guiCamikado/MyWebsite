import CardHolderChild from "../atoms/CardHolderChild"
import CardHolder from "../atoms/CardHolder"
import { useState } from "react"
import TextCamp from "../atoms/TextCamp"

export default function RegisterPage({ darkMode }) {
    return (
        <>
            <div className={`w-screen min-h-screen flex items-center justify-center border-4 border-amber-50 ${darkMode
                ? "text-[#ffffff]"
                : "text-[#000000]"
                }`}>


                <div>
                    <InputCamp darkmode={darkMode} placeholder={"email@example.com"} />
                    <InputCamp darkmode={darkMode} placeholder={"Password"} type={"password"} />
                    <CheckBox placeholder={
                        <>
                            Li e Aceito os <Link darkMode={darkMode} link={"TermosDeUso"} text={"Termos de uso"} />.
                        </>
                    } />
                </div>

            </div >
        </>
    )
}

// NewAtoms
function InputCamp({ darkmode, onChange, placeholder, type }) {
    const inputStyle = darkmode
        ? "w-full px-3 py-2 text-[#ffffff] placeholder:text-[#ffffff88] border-2 border-[#DD01E6] rounded-md focus:outline-none focus:ring-2 focus:ring-[#DD01E6] focus:border-[#DD01E6] m-1" // DarkMode
        : "w-full px-3 py-2 text-[#000000] placeholder:text-[#00000088] border-2 border-[#000000] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFFF20] focus:border-[#FFFF20] m-1" // WhiteMode
    return (
        <>
            <div>
                <input type={type}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={inputStyle} />
            </div >
        </>
    )
}

function CheckBox({ darkmode, onChange, placeholder }) {
    const inputStyle = darkmode
        ? "px-3 py-2 border border-[#DD01E6] rounded-md focus:outline-none" // DarkMode
        : "px-3 py-2 border border-[#000000] rounded-md focus:outline-none" // WhiteMode

    return (
        <>
            <div>
                <input type="checkbox" className={"appearance-auto bg-red-600"} />
                <label> {placeholder ? placeholder : "Definir 'placeholder' "}</label>
            </div>
        </>
    )
}

function Link({ darkMode, link, text }) {
    return (
        <a
            href={link}
            className={darkMode
                ? "text-[#DD01E6] underline"
                : "text-[#000ff0] underline"}>
            {text ?? "Defina um texto"}
        </a >
    )
}