import { useEffect } from "react"
import blender_icon from "../../assets/images/logos/blender_icon_1024x1024.png"
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
export default function SkillDescriptionCard({ darkMode, itensData }) {

    // Exemplo de como deve ser
    const itens = (itensData ? itensData : {
        icon: blender_icon,
        icon_alt_text: "Blender Icon",
        title: "Blender 3D",
        subtitle: "The Free and Open Source 3D Creation Suite",
        text: " Um software de computação gráfica 3D gratuito de código aberto, criado pelo cofundador Ton Roosendaal em 2 de janeiro de 1994, utilizado principalmente por artistas para a criação de modelos 3D, animações, efeitos visuais, simulações e jogos."
    })
    return (
        <div className="w-full flex justify-center pt-4 px-10s">
            <div className=" text-[#FFE3C8] bg-[#201F20] border-2 border-[#201F20] hover:border-[#DD01E6] w-full max-w-md min-w-[33vw] min-h-[20vh] rounded-xl p-2 origin-top-left hover:rotate-1 hover:scale-105 transition-transform duration-600 ease-in-out">
                <div className="flex gap-4 flex-wrap sm:flex-nowrap">
                    <img src={itens.icon} alt="Blender Icon" className="size-16 shrink-0" />

                    <b className="text-3xl">
                        <div>
                            {itens.title}
                            <p className="text-[35%]">{itens.subtitle}</p>
                        </div>

                        <div className="pt-4">
                            <p className="text-[50%]">{itens.text}</p>
                        </div>
                    </b>
                </div>
            </div>
        </div>
    )
}