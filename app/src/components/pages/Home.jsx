import Sidebar from "../organisms/Sidebar";
import TopMenu from "../organisms/TopMenu";
import DivParalelo from "../temp/nightButtonTest";
import FormDataManager from "../../utils/FormDataManager";
import { useEffect, useState } from "react";

export default function Home() {
    /** Docs
     * @startDate 21/12/25
     * @lastUpdate 21/12/25 
     * 
     * @use Essa página é a HomePage tem como função:
     *      1. Oferecer uma página funcional de navegação após o login e as coisas mais importantes
     *      2. Redirecionar caso usuário esteja conectado e link não ir a lugar nenhum 
     */

    const [data, setData] = useState(JSON.parse(localStorage.getItem("GuisProfile")) || "")

    const mockedData = {
        target: {
            name: "teste",
            value: "valorTest"
        }
    }
    // Obtem atualizações com valor targe{name, value} e envia para localStorage
    const handleEventInput = async (e) => {
        await FormDataManager.handleEventInput(e, data, setData).then((result) => {
            localStorage.setItem("GuisProfile", JSON.stringify(result))
        })
    }

    return (
        <>
            <div className={data.darkMode ? "bg-[#201F20]" : "bg-[#FFFFFF"}>
                {/* <TopMenu /> WIP não está legal */}
                <Sidebar data={data} handleEventInput={handleEventInput}/>
                <DivParalelo />
            </div>

            <button onClick={() => { handleEventInput(mockedData) }}>BOTAO</button>
        </>
    )
}