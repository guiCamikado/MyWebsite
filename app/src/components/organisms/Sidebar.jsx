import { useEffect, useState } from "react"
import { Menu, Home, Settings, SunMoon, UserCog } from "lucide-react"
import SidebarClickOption from "../atoms/SidebarClickOption"
/** Docs
* @startDate 21/12/25
* @lastUpdate 21/12/25 
* 
* @use
*   1. Menu de navegação intuitiva expansivel com botões para futuros widgets de customização
*/
function Sidebar({ data, handleEventInput }) {
    const [isActive, setIsActive] = useState(data.sideMenuOpen || "")
    const [darkMode, setDarkMode] = useState(data.darkMode || "")

    // Controls DarkMode
    useEffect(() => {
        const darkmodeData = {
            target: {
                name: 'darkMode',
                value: darkMode
            }
        }
        handleEventInput(darkmodeData)
    }, [darkMode])

    // Controls Menu State
    useEffect(() => {
        const isMenuOpenData = {
            target: {
                name: 'sideMenuOpen',
                value: isActive
            }
        }
        handleEventInput(isMenuOpenData)
    }, [isActive])

    const ButtonStyle = (darkMode ? `rounded-xl bg-[#807C8020] p-1 cursor-pointer transition-all duration-200 hover:text-[#DD01E6] hover:scale-105` :
        `rounded-xl bg-black/5 p-1 cursor-pointer transition-all duration-300 hover:text-[#FFFF20] hover:bg-black/10 hover:scale-105 text-[#000000]`)
    const TextOpaccityAnimation = `font-semibold text-lg whitespace-nowrap transition-all duration-300 ease-in-out ${isActive ? "opacity-100 translate-x-0 delay-200" : "opacity-0 -translate-x-4 pointer-events-none"}`

    return (
        <aside className={(darkMode
            ? `h-screen bg-black text-amber-50 transition-all duration-300 ease-in-out ${isActive ? "w-64" : "w-16"}`
            : `h-screen bg-[#E2E0E2] text-black transition-all duration-300 ease-in-out ${isActive ? "w-64" : "w-16"}`)}>

            <span className={TextOpaccityAnimation}>
            </span>
            {/* Header */}
            <div className="flex items-center justify-between p-4">
                {/* Título */}
                {isActive && (
                    <span className="font-semibold text-lg transition-all duration-300">

                    </span>
                )}

                {/* Grupo de botões à direita */}
                <div className="flex items-center gap-2">
                    {isActive && (<>
                        <UserCog  size={32} onClick={() => navigate("/")} className={`${ButtonStyle}`} />
                        <SunMoon  size={32} onClick={() => { setDarkMode(!darkMode); }} className={`${ButtonStyle}`} />
                        <Home     size={32} onClick={() => navigate("/")} className={`${ButtonStyle}`} />
                        <Settings size={32} onClick={() => navigate("/")} className={`${ButtonStyle}`} />
                    </>
                    )}
                    <Menu size={32} onClick={() => setIsActive(!isActive)} className={`${ButtonStyle}`} />
                </div>
            </div>


            {/* Conteúdo */}
            {isActive && (
                <div
                    className={`
                            flex flex-col gap-2 px-4
                            overflow-hidden
                            transition-all duration-500 ease-in-out
                            ${isActive
                            ? "opacity-100 translate-y-0 delay-300"
                            : "opacity-0 translate-y-2 max-h-0 pointer-events-none"
                        }
                    `}
                >
                    <b className="text-2xl">Perfil</b>
                    <SidebarClickOption darkMode={darkMode} text="Sobre" link="#" />
                    <SidebarClickOption darkMode={darkMode} text="Experiência" link="#" />
                    <SidebarClickOption darkMode={darkMode} text="Formação Acadêmica" link="#" />
                    <SidebarClickOption darkMode={darkMode} text="Habilidades" link="#" />
                    <SidebarClickOption darkMode={darkMode} text="Projetos" link="#" />
                    <hr className="mt-2 border-white/10" />
                    <SidebarClickOption darkMode={darkMode} text="Sobre esse Projeto" link="#" />
                </div>
            )}
        </aside>
    )
}

export default Sidebar
