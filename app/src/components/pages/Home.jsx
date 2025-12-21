import Sidebar from "../organisms/Sidebar";
import TopMenu from "../organisms/TopMenu";

export default function Home() {
    /** Docs
     * @startDate 21/12/25
     * @lastUpdate 21/12/25 
     * 
     * @use Essa página é a HomePage tem como função:
     *      1. Oferecer uma página funcional de navegação após o login e as coisas mais importantes
     *      2. Redirecionar caso usuário esteja conectado e link não ir a lugar nenhum 
     */

    return (
        <>
            <div className="bg-[#201F20]">
                {/* <TopMenu /> WIP não está legal */}
                <Sidebar />
            </div>
        </>
    )
}