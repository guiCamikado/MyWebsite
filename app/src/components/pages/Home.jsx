import { useEffect, useState } from "react";

import FormDataManager from "../../utils/FormDataManager";

import Sidebar from "../organisms/Sidebar";
import CardHolder from "../atoms/CardHolder";

// Clusters
import ClusterFerramentas from "../molecules/SkillClusters/ClusterFerramentas";
import ClusterLinguagens from "../molecules/SkillClusters/ClusterLinguagens";
import ClusterFrameworks from "../molecules/SkillClusters/ClusterFrameworks";
import ClusterOutros from "../molecules/SkillClusters/ClusterOutros";
/** Docs
 * @startDate 21/12/25
 * @lastUpdate 21/12/25 
 * 
 * @use Essa página é a HomePage tem como função:
 *      1. Oferecer uma página funcional de navegação após o login e as coisas mais importantes
 *      2. Redirecionar caso usuário esteja conectado e link não ir a lugar nenhum 
 */

export default function Home() {
    const [data, setData] = useState(JSON.parse(localStorage.getItem("GuisProfile")) || "")

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
                <Sidebar data={data} handleEventInput={handleEventInput} element={

                    // Isso deverá virar um organism
                    <CardHolder darkMode={data.darkMode} title={""} element={
                        <>
                            <ClusterLinguagens darkMode={data.darkMode} />
                            <ClusterFerramentas darkMode={data.darkMode} />
                            <ClusterFrameworks darkMode={data.darkMode}/>
                            <ClusterOutros darkMode={data.darkMode}/>
                        </>
                    } />
                } />
            </div>
        </>
    )
}