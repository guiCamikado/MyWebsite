import { useEffect } from "react"
// import blender_icon from "../../assets/images/logos/blender_icon_1024x1024.png"
import SkillDescriptionCard from "../atoms/SkillDescriptionCard"
/**
 * @startDate 22/12/25
 * @lastUpdate 22/12/25 
 * 
 * @use
 *  1. Cards customizados de visualização de itens no caso criados para mostrar minhas skills com programas e técnologias
 * 
 * @typedef {Object} SkillItem
 * @property {string} icon - Path or URL of the image icon
 * @property {string} icon_alt_text - Alternative text for the icon
 * @property {string} title - Main title of the skill
 * @property {string} subtitle - Subtitle or short description
 * @property {string} text - Detailed description
 * @param {{
 *   darkMode?: boolean,
 *   itensData: SkillItem
 * }} props
 * 
 * @returns
 */
export default function SolutionForManyCardsInOneTab({ darkMode, itensData, title }) {

    const skills = [
        itensData ?? {
            // icon: blender_icon,
            icon_alt_text: "Blender Icon",
            title: "Blender 3D",
            subtitle: "The Free and Open Source 3D Creation Suite",
            text: "Um software de computação gráfica 3D gratuito de código aberto, criado pelo cofundador Ton Roosendaal em 2 de janeiro de 1994, utilizado principalmente por artistas para a criação de modelos 3D, animações, efeitos visuais, simulações e jogos."
        },
        {
            icon: "https://logo.svgcdn.com/logos/unity.png",
            icon_alt_text: "Unity Icon",
            title: "Unity",
            subtitle: "Real-time 3D Development Platform",
            text:
                "A powerful cross-platform game engine widely used for developing 2D and 3D games and interactive experiences."
        },
        {
            icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
            icon_alt_text: "React Icon",
            title: "React",
            subtitle: "A JavaScript Library for Building UIs",
            text:
                "A popular JavaScript library for building fast, scalable, and component-based user interfaces."
        }
    ]

    return (
        <>
            <div className="text-[#FFE3C8] text-4xl bg-[#141314] pl-4 pt-3 pb-1">
                {title ? title : <div>Habilidades</div>}
            </div>

            <div className="
                grid
                grid-cols-1
                gap-2
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
                h-full content-start bg-[#141314]
                pb-10"
            >
                {skills.map((skill, index) => (
                    <SkillDescriptionCard
                        key={index}
                        itensData={skill}
                    />
                ))}
            </div>
        </>
    )
}