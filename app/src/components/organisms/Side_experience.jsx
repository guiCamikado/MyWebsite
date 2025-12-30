import tecumseh_logo_white from "../../assets/images/Logos/Company/tecumseh_logo_white.png"
import tecumseh_logo_black from "../../assets/images/Logos/Company/tecumseh_logo_black.png"

/**
 * 
 * @typedef {Object} ExperienceItem
 * @property {string} logo - Logo da empresa
 * @property {string} logo_alt_text - Texto alternativo do logo
 * @property {string} company - Nome da empresa
 * @property {string} role - Cargo / Função exercida
 * @property {string} startDate - Data de início
 * @property {string} endDate - Data de término
 * @property {string} description - Descrição das atividades
 * 
 * @param {{
 *   darkMode?: boolean,
 *   itensData: ExperienceItem
 * }} props
 */

export default function ExperienceCard({ darkMode, itensData }) {

    // Exemplo padrão
    const itens = itensData ? itensData : {
        logo: darkMode ? tecumseh_logo_white : tecumseh_logo_black,
        logo_alt_text: "Company Logo",
        company: "Tecumseh do Brasil LTDA",
        role: "Desenvolvedor Fullstack Jovem Aprendiz",
        startDate: "Ago 2024",
        endDate: "Dez 2025",
        description:
            <>
                <p className="indent-4 mt-4">
                    Como meu primeiro emprego de carteira assinada trabalhei como desenvolvedor em uma plataforma ASP Classic criando
                    e realizando manutenções no código legado da empresa.
                    Durante esse período realizei o desenvolvimento de páginas para o gerenciamento do laboratório de análise e desenvolvimento que
                    realizava testes em protótipos de compressores e maquinário de refrigeração e afins envolvendo um sistema de gerenciamento de insumos, controle de ensaios, indicadores de desempenho de diversas áreas do setor, além da criação de backlogs, gráficos de desempenho e resolução de eventuais bugs que apareciam com certa frequência maior do que deveriam.
                </p>
                <p className="indent-2 mt-4">
                    Guardo essa oportunidade com muito carinho, pois conheci pessoas incríveis dentro da empresa.
                    Além disso, aprendi muito sobre desenvolvimento, com ênfase na melhoria da minha capacidade de
                    isolar problemas, já que o código era legado e, muitas vezes, difícil de compreender.
                    Também desenvolvi habilidades de trabalho em equipe, criação de software voltado ao usuário
                    e aprimoramento da minha lógica de programação.
                </p>
            </>
    }

    return (
        <div className="justify-center p-4 m-4">
            <div className={`${darkMode
                ? "text-[#FFE3C8] bg-[#00000044] border-2 border-[#201F20] hover:border-[#DD01E6]"
                : "text-[#403E40] bg-[#e2e0e2] border-2 border-[#EEECEE] hover:border-[#FFFF20]"
                } w-full rounded-xl p-4 origin-top hover:scale-102 transition-transform duration-900 ease-in-out`}>

                {/* Header */}
                <div className="flex gap-4 items-center">
                    <img
                        src={itens.logo}
                        alt={itens.logo_alt_text}
                    />

                    <div>
                        <h3 className="text-2xl font-bold">
                            {itens.company}
                        </h3>

                        <p className="text-sm opacity-80">
                            {itens.role}
                        </p>

                        <p className="text-xs opacity-60">
                            {itens.startDate} — {itens.endDate}
                        </p>
                    </div>
                </div>

                {/* Descrição */}
                <div className="pt-4">
                    <p className="text-[100%] leading-relaxed">
                        {itens.description}
                    </p>
                </div>

            </div>
        </div>
    )
}
