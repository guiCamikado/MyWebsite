import { useEffect } from "react"
// import blender_icon from "../../assets/images/Logos/ToolIcon/blender_icon_1024x1024.png"
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
export default function CardHolderChild({ title, element, darkMode }) {
    return (
        <>
            <div className={` ${darkMode
                ? "text-[#FFE3C8] bg-[#201F20] hover:text-[#DD01E6]"
                : "text-[#403E40] bg-[#E2E0E2] hover:text-[#FFFF20]"}
                 +  transition-transform duration-6000 ease-in-out hover:z-10`}>

                <div className={`text-3xl pl-5 pt-3 pb-1 ${darkMode ? "" : "bg-[#E2E0E2]"} rounded-2xl`}>
                    {title ? title : <div>Habilidades</div>}
                </div>

                <div className={`
                pl-5 pb-1 pt-1
                gap-2
                content-start ${darkMode ? "bg-[#201F20] text-[#FFE3C8]" : "text-[#403E40] bg-[#E2E0E2]"}`}>
                    {element ? element : "Definir elemento Ver SkillDescriptionCard.jsx"}
                </div>
            </div>
        </>
    )
}