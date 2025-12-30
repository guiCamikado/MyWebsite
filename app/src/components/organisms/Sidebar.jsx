import { useEffect, useState } from "react"
import { Menu, Home, SunMoon } from "lucide-react"
import SideBarCluster from "../molecules/SidebarCluster"
/** Docs
* @startDate 21/12/25
* @lastUpdate 21/12/25 
* 
* @use
*   1. Menu de navegação intuitiva expansivel com botões para futuros widgets de customização
*/
function Sidebar({ data, handleEventInput, element }) {
    // WIP fazer com que a sidebar ocupe toda a tela se ativa && em mobile 
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
        ? "rounded-xl text-[#FFE3C8] bg-[#00000044] p-1 cursor-pointer transition-all duration-200 hover:text-[#DD01E6] hover:scale-105"
        : "rounded-xl bg-black/5 p-1 cursor-pointer transition-all duration-300 hover:text-[#FFEF20] hover:bg-black/10 hover:scale-105 text-[#000000]";

    return (
        <>
            <div className="flex h-screen overflow-hidden">

                <aside
                    className={darkMode
                        ? `min-h-screen sticky top-0 bg-black text-[#FFE3C8] transition-all duration-300 ease-in-out ${isActive ? "w-64" : "w-16"}`
                        : `min-h-screen sticky top-0 bg-[#D4D3D4] text-black transition-all duration-300 ease-in-out ${isActive ? "w-64" : "w-16"}`
                    }
                >

                    {/* Header */}
                    <div className={`flex justify-between p-4 transition-all duration-300 ease-in-out ${isActive ? "w-64" : "w-16"}`}>
                        {/* Grupo de botões*/}
                        <div className="flex items-center gap-3">
                            {isActive ? (<>
                                <SunMoon size={32} onClick={() => { setDarkMode(!darkMode); }} className={`${ButtonStyle}`} />
                                <Home size={32} onClick={() => window.location.href = "/?page=about"} className={`${ButtonStyle}`} />

                                <div className="absolute right-4 top-4">
                                    <Menu size={32} onClick={() => setIsActive(!isActive)} className={`${ButtonStyle}`} />
                                </div>

                            </>) : (<>
                                <div className="grid grid-cols-1 gap-4">
                                    <Menu size={32} onClick={() => setIsActive(!isActive)} className={`${ButtonStyle}`} />
                                    <SunMoon size={32} onClick={() => { setDarkMode(!darkMode); }} className={`${ButtonStyle}`} />
                                    <Home size={32} onClick={() => window.location.href = "/?page=about"} className={`${ButtonStyle}`} />
                                </div>
                            </>)}

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
                                    { text: "Sobre", link: "?page=about" },
                                    { text: "Experiência", link: "?page=experience" },
                                    { text: "Formação Acadêmica", link: "?page=formation" },
                                    { text: "Habilidades", link: "?page=skills" },
                                    { text: "Projetos", link: "?page=projects" },
                                ]
                            } />

                        </div>
                    </>
                    )}
                </aside>
                <div className="flex overflow-y-auto">
                    {element}
                </div>
            </div>
        </>

    )
}

export default Sidebar
