import { useEffect, useState } from "react";


import FormDataManager from "../../utils/FormDataManager";
import Sidebar from "../templates/Sidebar";

// Clusters
import SkillsSidebar from "../organisms/Side_skill";
import ProjectsSidebar from "../organisms/Side_project";
import SobreSidebar from "../organisms/Side_about";
import ExperienceCard from "../organisms/Side_experience";
import EducationCard from "../organisms/Side_education";
import LoginPage from "../organisms/Side_LoginPage";
import RegisterPage from "../organisms/Side_Register";
import StatisticsPage from "../organisms/Side_statistics";

// Api Managers
import ApiService from "../../utils/PostManager";

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
    const [data, setData] = useState(JSON.parse(localStorage.getItem("GuisProfile")) || { sideMenuOpen: true, darkMode: true });

    // WIP REATIVAR !! Obtem IP do usuário e o envia para back-end
    // useEffect(() => {
    //     const getIp = async () => {
    //         try {
    //             const data = await ApiService.Get("https://api.ipify.org?format=json");
    //             ApiService.Post("/api/ipManager/register", { ipAddress: data.ip })
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     getIp();
    // }, []);

    // Obtem URL para renderizar paginas de acordo com a constante renderContent 
    useEffect(() => {
        const page = new URLSearchParams(window.location.search);
        setRenderedPage(page.get("page"));
    }, []);

    // Botão Darkmode
    useEffect(() => {
        const html = document.documentElement;
        if (data.darkMode) { html.classList.add("dark"); }
        else { html.classList.remove("dark"); }
    }, [data.darkMode]);

    const handleEventInput = async (e) => {
        await FormDataManager.handleEventInput(e, data, setData).then((result) => {
            localStorage.setItem("GuisProfile", JSON.stringify(result));
        });
    };

    const renderContent = () => {
        switch (renderedPage) {
            default: return <SobreSidebar darkMode={data.darkMode} />;
            case "experience": return <ExperienceCard darkMode={data.darkMode} />;
            case "formation": return <EducationCard darkMode={data.darkMode} />;
            case "skills": return <SkillsSidebar darkMode={data.darkMode} />;
            case "projects": return <ProjectsSidebar darkMode={data.darkMode} />;
            case "login": return <LoginPage darkMode={data.darkMode} />;
            case "register": return <RegisterPage darkMode={data.darkMode} />;
            case "statistics": return <StatisticsPage darkMode={data.darkMode} />
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