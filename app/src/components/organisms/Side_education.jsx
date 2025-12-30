import unicep_logo from "../../assets/images/Logos/education/Unicep-Vetor.png"
import senai_sp_logo from "../../assets/images/Logos/education/senai_sp_logo.png"
import EducationItem from "../atoms/EducationItem";

/**
 * 
 * @typedef {Object} EducationItem
 * @property {string} logo - Imagem da instituição
 * @property {string} logo_alt_text - Texto alternativo da imagem
 * @property {string} institution - Nome da instituição
 * @property {string} startDate - Data de início
 * @property {string} endDate - Data de término
 * @property {string} description - Descrição do curso/formação
 * 
 * @param {{
 *   darkMode?: boolean,
 *   itensData: EducationItem
 * }} props
 */

export default function EducationSidebar({ darkMode, itensData }) {

    const itens = itensData ? itensData : [{
        logo: unicep_logo,
        logo_alt_text: "Instituição de Ensino",
        formationLevel: "Tecnólogo",
        institution: "Unicep",
        formation: "Análise e Desenvolvimento de Sistemas",
        startDate: "Jan 2023",
        endDate: "Dez 2025",
        description:
            <>
                <section className="space-y-4 text-sm leading-relaxed">

                    <h3 className="text-lg font-semibold">
                        Descrição das Atividades – Formação (2.000 horas)
                    </h3>

                    <p className="opacity-90">
                        Participação em um programa intensivo de formação tecnológica, com foco em
                        desenvolvimento de sistemas, inovação e computação moderna. Ao longo de
                        2.000 horas, foram desenvolvidas competências técnicas e práticas nas
                        seguintes áreas:
                    </p>

                    <ul className="list-disc list-inside space-y-2 pl-2">
                        <li>
                            <strong>Inovação, Prototipação e IoT:</strong> criação de soluções conectadas,
                            redes e sistemas integrados.
                        </li>
                        <li>
                            <strong>Prototipação de Aplicativos Low-Code:</strong> lógica de programação,
                            algoritmos, UX e desenvolvimento rápido de aplicações.
                        </li>
                        <li>
                            <strong>Desenvolvimento Web Responsivo:</strong> construção de aplicações web
                            utilizando boas práticas de design e arquitetura.
                        </li>
                        <li>
                            <strong>Análise de Sistemas e Banco de Dados:</strong> modelagem de dados,
                            engenharia de software e criação de painéis de BI.
                        </li>
                        <li>
                            <strong>Engenharia de Software Moderna:</strong> levantamento de requisitos,
                            design orientado a sistemas e desenvolvimento de projetos completos.
                        </li>
                        <li>
                            <strong>Inteligência Artificial:</strong> fundamentos de IA e Machine Learning,
                            com foco em segurança e privacidade de dados.
                        </li>
                        <li>
                            <strong>Computação em Nuvem:</strong> gestão de projetos (PMI, PMBoK, Agile),
                            infraestrutura em cloud e bancos NoSQL.
                        </li>
                        <li>
                            <strong>Business Intelligence e Big Data:</strong> análise de dados, Python,
                            desenvolvimento de bancos de dados e dashboards analíticos.
                        </li>
                        <li>
                            <strong>Frameworks Full Stack:</strong> integração front-end e back-end, APIs
                            e automação de testes.
                        </li>
                        <li>
                            <strong>Desenvolvimento Mobile Avançado:</strong> foco em UX, segurança,
                            testes e criação de aplicações mobile.
                        </li>
                    </ul>

                    <p className="pt-2 opacity-90">
                        O programa incluiu o desenvolvimento de diversos projetos práticos, como
                        sistemas web completos, aplicações mobile, soluções com inteligência
                        artificial, dashboards analíticos e protótipos funcionais em ambiente de nuvem.
                    </p>

                </section>
            </>
    }, {
        logo: senai_sp_logo,
        logo_alt_text: "Instituição de Ensino",
        formationLevel: "Técnico",
        institution: "Faculdade de Tecnologia e Escola SENAI Antonio Adolpho Lobbe",
        formation: "Desenvolvimento de Sistemas",
        startDate: "Jun 2024",
        endDate: "Dez 2025",
        description:
            <>
                <section className="space-y-4 text-sm leading-relaxed">

                    <h3 className="text-lg font-semibold">
                        Curso Técnico em Desenvolvimento de Sistemas — 2.000 horas
                    </h3>

                    <p className="opacity-90">
                        Formação voltada à capacitação de profissionais para o desenvolvimento,
                        teste, documentação e implantação de sistemas computacionais, com foco em
                        qualidade, segurança da informação, usabilidade e boas práticas de engenharia
                        de software.
                    </p>

                    <ul className="list-disc list-inside space-y-2 pl-2">
                        <li>
                            <strong>Lógica de Programação e Algoritmos:</strong> fundamentos da programação,
                            estruturas lógicas, versionamento com Git/GitHub e boas práticas de codificação.
                        </li>

                        <li>
                            <strong>Sistemas Operacionais e Segurança:</strong> uso de ambientes Windows e Linux,
                            redes de computadores, segurança da informação, políticas de acesso e noções de legislação.
                        </li>

                        <li>
                            <strong>Levantamento e Análise de Requisitos:</strong> documentação técnica, modelagem
                            de sistemas, metodologias ágeis (Scrum, Kanban) e Design Thinking.
                        </li>

                        <li>
                            <strong>Redes e Internet das Coisas (IoT):</strong> arquitetura de redes, protocolos,
                            dispositivos embarcados e integração de sistemas conectados.
                        </li>

                        <li>
                            <strong>Banco de Dados:</strong> modelagem relacional, SGBDs, consultas SQL,
                            análise de dados e fundamentos de Big Data.
                        </li>

                        <li>
                            <strong>Desenvolvimento Web (Front-end e Back-end):</strong> HTML, CSS, JavaScript,
                            design responsivo, APIs REST, arquitetura MVC e boas práticas de desenvolvimento.
                        </li>

                        <li>
                            <strong>Desenvolvimento Mobile:</strong> criação de aplicações móveis, integração com APIs,
                            uso de recursos do dispositivo, testes e publicação de aplicativos.
                        </li>

                        <li>
                            <strong>Testes de Software:</strong> planejamento, execução e documentação de testes,
                            garantia de qualidade e validação de sistemas.
                        </li>

                        <li>
                            <strong>Projetos de Software:</strong> desenvolvimento de soluções completas,
                            gerenciamento de projetos e entrega de produtos funcionais.
                        </li>
                    </ul>

                    <p className="pt-2 opacity-90">
                        A formação incluiu o desenvolvimento de projetos práticos como sistemas web,
                        aplicações mobile, soluções IoT e plataformas completas, aplicando conceitos
                        modernos de engenharia de software e computação em nuvem.
                    </p>

                </section>
            </>
    }]

    return (
        <div>
            {itens.map((item, index) => (
                <EducationItem
                    key={index}
                    data={item}
                    darkMode={darkMode}
                />
            ))}
        </div>
    );
}
