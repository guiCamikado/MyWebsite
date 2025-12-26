import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


import FormDataManager from "../../utils/FormDataManager";

import Sidebar from "../organisms/Sidebar";
import CardHolder from "../atoms/CardHolder";

// Clusters
import SkillsSidebar from "../organisms/SkillsSidebar";
import PageProjects from "../temp/PageProjects";
import ProjectsSidebar from "../organisms/ProjectsSidebar";
/** Docs
 * @startDate 21/12/25
 * @lastUpdate 21/12/25 
 * 
 * @use Essa página é a HomePage tem como função:
 *      1. Oferecer uma página funcional de navegação após o login e as coisas mais importantes
 *      2. Redirecionar caso usuário esteja conectado e link não ir a lugar nenhum 
 */

export default function Home() {
    const [renderedPage, setRenderedPage] = useState("")
    const [data, setData] = useState(JSON.parse(localStorage.getItem("GuisProfile")) || "")

    // Controls page rendering
    const onSidebarClick = (e) => {


    }
    useEffect(() => {
        const page = new URLSearchParams(window.location.search)
        setRenderedPage(page.get("page"))
    }, [window.location.search])

    // Obtem atualizações com valor targe{name, value} e envia para localStorage
    const handleEventInput = async (e) => {
        await FormDataManager.handleEventInput(e, data, setData).then((result) => {
            localStorage.setItem("GuisProfile", JSON.stringify(result))
        })
    }

    return (
        <>
            <div className={data.darkMode ? "bg-[#201F20]" : "bg-[#EEECEE]"}>
                {/* <TopMenu /> WIP não está legal */}
                <Sidebar data={data} handleEventInput={(e) => { handleEventInput(e), onSidebarClick(e) }} element={
                    <>
                        {renderedPage === "skills" ? <SkillsSidebar darkMode={data.darkMode} /> : ""}
                        {renderedPage === "projects" ? <ProjectsSidebar darkMode={data.darkMode} /> : ""}
                    </>
                } />
            </div>
        </>
    )
}