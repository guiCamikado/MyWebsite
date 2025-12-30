import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


import FormDataManager from "../../utils/FormDataManager";

import Sidebar from "../organisms/Sidebar";
import CardHolder from "../atoms/CardHolder";

// Clusters
import SkillsSidebar from "../organisms/Side_skill";
import ProjectsSidebar from "../organisms/Side_project";
import SobreSidebar from "../organisms/Side_about";
import ExperienceCard from "../organisms/Side_experience";
import EducationCard from "../organisms/Side_education";

/** Docs
 * @startDate 21/12/25
 * @lastUpdate 21/12/25 
 * 
 * @use Essa página é a HomePage tem como função:
 *      1. Oferecer uma página funcional de navegação após o login e as coisas mais importantes
 *      2. Redirecionar caso usuário esteja conectado e link não ir a lugar nenhum 
 */

export default function Home() {
    const [renderedPage, setRenderedPage] = useState("");
    const [data, setData] = useState(
        JSON.parse(localStorage.getItem("GuisProfile")) || {}
    );

    useEffect(() => {
        const page = new URLSearchParams(window.location.search);
        setRenderedPage(page.get("page"));
    }, []);

    // 🔥 AQUI É O CORRETO
    useEffect(() => {
        const html = document.documentElement;

        if (data.darkMode) {
            html.classList.add("dark");
        } else {
            html.classList.remove("dark");
        }
    }, [data.darkMode]);

    const handleEventInput = async (e) => {
        await FormDataManager.handleEventInput(e, data, setData).then((result) => {
            localStorage.setItem("GuisProfile", JSON.stringify(result));
        });
    };

    const renderContent = () => {
        switch (renderedPage) {
            case "skills": return <SkillsSidebar darkMode={data.darkMode} />;
            case "projects": return <ProjectsSidebar darkMode={data.darkMode} />;
            case "experience": return <ExperienceCard darkMode={data.darkMode} />;
            case "formation": return <EducationCard darkMode={data.darkMode} />;
            default: return <SobreSidebar darkMode={data.darkMode} />;
        }
    };

    return (
        <div className={data.darkMode ? "bg-[#201F20]" : "bg-[#EEECEE]"}>
            <Sidebar
                data={data}
                handleEventInput={handleEventInput}
                element={renderContent()}
            />
        </div>
    );
}