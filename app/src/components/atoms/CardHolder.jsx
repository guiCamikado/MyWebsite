import { useEffect } from "react"
import SkillDescriptionCard from "../atoms/SkillDescriptionCard"
/**
 * @startDate 22/12/25
 * @lastUpdate 22/12/25 
 * 
 * @use
 *  1. Serve para segurar os cards de SkillDescriptionCard só isso
 * 
 * @returns
 */
export default function CardHolder({ title, element, darkMode }) {
    return (
        <>
            <div className={`${darkMode ? "text-[#FFE3C8] bg-[#201F20]" : "text-[#000000] bg-[#DEDCDE]"}`}>

                <div className={`text-4xl pl-5 pt-3 pb-1 pr-5`}>
                    {title ? title : ""}
                </div>

                <div className={`
                pl-6 pb-1 pt-1 pr-6
                grid
                grid-cols-1
                gap-2
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
                content-start ${darkMode 
                ? "bg-[#201F20] text-[#FFE3C8]" 
                : "text-[#000000] bg-[#DEDCDE]" }`}>
                    {element ? element : "Definir elemento Ver SkillDescriptionCard.jsx"}
                </div>
            </div>
        </>
    )
}