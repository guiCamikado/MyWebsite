import { useEffect, useState } from "react"
import { Menu, Home, Settings, SunMoon, UserCog } from "lucide-react"
import SidebarClickOption from "../atoms/SidebarClickOption"
import SideBarCluster from "../molecules/SidebarCluster"
/** Docs
* @startDate 21/12/25
* @lastUpdate 21/12/25 
* 
* @use
*   1. Menu de navegação intuitiva expansivel com botões para futuros widgets de customização
*/
function Sidebar({ data, handleEventInput, element }) {
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

    const ButtonStyle = darkMode
        ? "rounded-xl text-[#FFE3C8] bg-[#807C8020] p-1 cursor-pointer transition-all duration-200 hover:text-[#DD01E6] hover:scale-105"
        : "rounded-xl bg-black/5 p-1 cursor-pointer transition-all duration-300 hover:text-[#FFEF20] hover:bg-black/10 hover:scale-105 text-[#000000]";

    return (
        <>
            <div className="flex">

                <aside
                    className={darkMode
                        ? `min-h-screen sticky top-0 bg-black text-[#FFE3C8] transition-all duration-300 ease-in-out ${isActive ? "w-64" : "w-16"}`
                        : `min-h-screen sticky top-0 bg-[#E2E0E2] text-black transition-all duration-300 ease-in-out ${isActive ? "w-64" : "w-16"}`
                    }
                >

                    {/* Header */}
                    <div className={`flex justify-between p-4 transition-all duration-300 ease-in-out ${isActive ? "w-64" : "w-16"}`}>
                        {/* Grupo de botões à direita */}
                        <div className="flex items-center gap-3">
                            {isActive && (<>
                                <UserCog size={32} onClick={() => navigate("/")} className={`${ButtonStyle}`} />
                                <SunMoon size={32} onClick={() => { setDarkMode(!darkMode); }} className={`${ButtonStyle}`} />
                                <Home size={32} onClick={() => navigate("/")} className={`${ButtonStyle}`} />
                                <Settings size={32} onClick={() => navigate("/")} className={`${ButtonStyle}`} />
                            </>
                            )}
                            <Menu size={32} onClick={() => setIsActive(!isActive)} className={`${ButtonStyle}`} />
                        </div>
                    </div>


                    {/* Conteúdo */}
                    {isActive && (<>
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
                            <SideBarCluster darkMode={darkMode} ClusterTitle="Perfil" ClusterData={
                                [
                                    { text: "Sobre", link: "#" },
                                    { text: "Experiência", link: "#" },
                                    { text: "Formação Acadêmica", link: "#" },
                                    { text: "Habilidades", link: "#" },
                                    { text: "Projetos", link: "#" },
                                ]
                            } />

                        </div>
                    </>
                    )}
                </aside>
                <div>
                    {element}
                </div>
            </div>
        </>

    )
}

export default Sidebar
