import { useState } from "react"
import { Menu, Home, Settings } from "lucide-react"
import SidebarClickOption from "../atoms/SidebarClickOption"

function Sidebar() {
    const [isActive, setIsActive] = useState(true)

    const ButtonStyle = `rounded-xl
        bg-[#807C8020]
        p-1
        cursor-pointer
        transition-all
        duration-200
        hover:text-[#DD01E6]
        hover:scale-105`
    const TextOpaccityAnimation = `font-semibold
        text-lg
        whitespace-nowrap
        transition-all
        duration-300
        ease-in-out ${isActive
            ? "opacity-100 translate-x-0 delay-200"
            : "opacity-0 -translate-x-4 pointer-events-none"
        }`
    return (
        <aside
            className={`
                h-screen bg-black text-amber-50
                transition-all duration-500 ease-in-out
                ${isActive ? "w-64" : "w-16"}
            `}
        >
            <span className={TextOpaccityAnimation}>
            </span>
            {/* Header */}
            <div className="flex items-center justify-between p-4">
                {/* Título */}
                {isActive && (
                    <span className="font-semibold text-lg transition-all duration-200">

                    </span>
                )}

                {/* Grupo de botões à direita */}
                <div className="flex items-center gap-2">
                    {isActive && (<>
                        <Home size={32} onClick={() => navigate("/")} className={`${ButtonStyle} homeObserver`} />
                        <Settings size={32} onClick={() => navigate("/")} className={`${ButtonStyle} homeObserver`} />
                    </>
                    )}
                    <Menu size={32} onClick={() => setIsActive(!isActive)} className={`${ButtonStyle} homeObserver`} />
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
                            ? "opacity-100 translate-y-0 delay-300 max-h-[500px]"
                            : "opacity-0 translate-y-2 max-h-0 pointer-events-none"
                        }
                    `}
                >
                    <b className="text-2xl">Perfil</b>
                    <SidebarClickOption text="Sobre" link="#" />
                    <SidebarClickOption text="Experiência" link="#" />
                    <SidebarClickOption text="Formação Acadêmica" link="#" />
                    <SidebarClickOption text="Habilidades" link="#" />
                    <SidebarClickOption text="Projetos" link="#" />
                    <hr className="m-4 border-white/10" />
                </div>
            )}
        </aside>
    )
}

export default Sidebar
