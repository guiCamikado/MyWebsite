import blender_icon from "../../../assets/images/logos/toolIcons/blender_icon_1024x1024.png"
import flask_icon from "../../../assets/images/logos/frameworkIcons/flask_icon.svg"
import springboot_icon from "../../../assets/images/logos/frameworkIcons/spring_boot_icon.svg"
import react_icon from "../../../assets/images/logos/frameworkIcons/react_icon.svg"
import mui_icon from "../../../assets/images/logos/frameworkIcons/mui_logo.png"
import tailwind_icon from "../../../assets/images/logos/frameworkIcons/tailwind_logo.svg"
import asp_icon from "../../../assets/images/logos/frameworkIcons/asp_icon.png"


import SkillDescriptionCard from "../../atoms/SkillDescriptionCard"
import CardHolderChild from "../../atoms/CardHolderChild"

export default function ClusterFrameworks({ darkMode }) {

    const data = [
        {
            icon: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
            icon_alt_text: "Scrum",
            title: "Scrum",
            subtitle: "Framework Ágil",
            text: "Framework ágil utilizado para gerenciamento de projetos complexos, baseado em ciclos curtos chamados sprints, promovendo colaboração, transparência e melhoria contínua."
        },
        {
            icon: flask_icon,
            icon_alt_text: "Flask",
            title: "Flask",
            subtitle: "Python Web Framework",
            text: "Um microframework web em Python, leve e flexível, criado por Armin Ronacher em 2010. É muito utilizado para o desenvolvimento de APIs, aplicações web pequenas e médias, oferecendo simplicidade, extensibilidade e total controle sobre a arquitetura."
        }, {
            icon: springboot_icon,
            icon_alt_text: "Spring Boot",
            title: "Spring Boot",
            subtitle: "Java Framework",
            text: "Um framework baseado no ecossistema Spring, lançado pela Pivotal em 2014, que facilita a criação de aplicações Java standalone e prontas para produção. Automatiza configurações, integra servidores embutidos e é amplamente usado no desenvolvimento de APIs REST e microsserviços."
        }, {
            icon: react_icon,
            icon_alt_text: "React",
            title: "React",
            subtitle: "JavaScript Library",
            text: "Uma biblioteca JavaScript criada pelo Facebook em 2013 para a construção de interfaces de usuário. Baseada em componentes reutilizáveis e no conceito de Virtual DOM, é amplamente utilizada para criar aplicações web modernas, dinâmicas e performáticas. Inclusive está sendo utilizada nessa página"
        }, {
            icon: mui_icon,
            icon_alt_text: "Material UI",
            title: "MUI",
            subtitle: "React UI Framework",
            text: "Uma biblioteca de componentes para React baseada no Material Design do Google. Fornece componentes prontos, acessíveis e altamente customizáveis, acelerando o desenvolvimento de interfaces modernas e consistentes."
        }, {
            icon: tailwind_icon,
            icon_alt_text: "Tailwind CSS",
            title: "Tailwind CSS",
            subtitle: "CSS Utility Framework",
            text: "Um framework CSS utilitário criado para acelerar o desenvolvimento de interfaces. Em vez de componentes prontos, oferece classes utilitárias que permitem criar layouts e estilos diretamente no HTML ou JSX, proporcionando alta produtividade e grande controle visual."
        }, {
            icon: asp_icon,
            icon_alt_text: "ASP.NET",
            title: "ASP Classic",
            subtitle: "Web Framework",
            text: "Framework Legado Estrutura de bibliotecas básicas para processamento de linguagens de script no lado servidor para geração de conteúdo dinâmico na Web. Aprendi o mesmo utilizando VBScript durante meu período como aprendiz na tecumseh"
        }
    ]

    return (<>
        <CardHolderChild darkMode={darkMode} title={"Frameworks"} element={
            <>
                {data.map((value, index) => (
                    <SkillDescriptionCard
                        key={index}
                        darkMode={darkMode}
                        itensData={value}
                    />
                ))}
            </>
        } />
    </>)
}