import { useEffect } from "react"
import SkillDescriptionCard from "./SkillDescriptionCard"
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
			<div className={`${darkMode ? "text-[#FFE3C8] bg-[#000000]" : "text-[#000000] bg-[#DEDCDE]"}`}>

				<div className={`text-4xl md:pl-5 md:pt-3 md:pb-1 md:pr-5`}>
					{title ? title : ""}
				</div>

				<div className={`
                md:pl-6 md:pb-1 md:pt-1 md:pr-6
                grid
                grid-cols-1
                md:gap-2
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
                content-start ${darkMode
						? "bg-[#201F20] text-[#FFE3C8]"
						: "text-[#000000] bg-[#DEDCDE]"}
						`

				}>
					{element ? element : "Definir elemento Ver SkillDescriptionCard.jsx"}
				</div>
			</div>
		</>
	)
}

export function BigCardHolder({ title, element, darkMode }) {
	return (
		<>
			<div className={`w-[95%] ${darkMode
				? "text-[#FFE3C8] bg-[#00000044] md:border-2 border-[#201F20] hover:border-[#DD01E6]"
				: "text-[#000000] bg-[#DEDCDE] md:border-2 border-[#DEDCDE] hover:border-[#FFFF20]"}
				 hover:scale-105 transition-transform duration-600 hover:text-[#DD01E6] transform-gpu hover: rounded-4xl m-10`}>


				<div className={`w-full hover:text-[#DD01E6]`}>

					{title && (
						<div className={`text-2xl font-semiboldpx-5 py-4 text-center`}>
							{title}
						</div>
					)}

					<div className={`w-full`}>
						<div className="px-4 py-3 w-full h-full">
							{element ? (
								<div className="w-full h-full flex items-center justify-center">
									{element}
								</div>
							) : (
								<div className={`text-center p-8 ${darkMode ? "text-[#FFE3C8] bg-[#201F20]" : "text-[#000000] bg-[#DEDCDE]"}`}>
									Definir elemento Ver SkillDescriptionCard.jsx
								</div>
							)}
						</div>
					</div>
				</div>
			</div>

		</>
	)
}