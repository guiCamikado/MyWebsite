import blender_icon from "../../../assets/images/logos/toolIcons/blender_icon_1024x1024.png"
import unity_icon from "../../../assets/images/logos/toolIcons/unity_icon.svg"
import office365_icon from "../../../assets/images/logos/toolIcons/office365_icon.png"
import wireshark_icon from "../../../assets/images/logos/toolIcons/wireshark_icon.png"
import sleuthkit_icon from "../../../assets/images/logos/toolIcons/sleuthkit_icon.png"
import github_icon from "../../../assets/images/logos/toolIcons/github_icon.png"

import SkillDescriptionCard from "../../atoms/SkillDescriptionCard"
import CardHolderChild from "../../atoms/CardHolderChild"

export default function ClusterOutros({ darkMode }) {

    const data = [
        {
            icon: "https://cdn-icons-png.flaticon.com/512/732/732225.png",
            icon_alt_text: "Windows",
            title: "Windows",
            subtitle: "Sistema Operacional",
            text: "Sistema operacional desenvolvido pela Microsoft, amplamente utilizado em computadores pessoais, ambientes corporativos e servidores."
        }, {
            icon: "https://cdn-icons-png.flaticon.com/512/6124/6124995.png",
            icon_alt_text: "Linux",
            title: "Linux",
            subtitle: "Sistema Operacional Open Source",
            text: "Família de sistemas operacionais de código aberto baseada no kernel Linux, amplamente utilizada em servidores, desenvolvimento e ambientes de segurança."
        }, {
            icon: "https://cdn-icons-png.flaticon.com/512/919/919837.png",
            icon_alt_text: "Bash",
            title: "Bash",
            subtitle: "Shell & Scripting",
            text: "Shell de linha de comando e linguagem de script usada principalmente em sistemas Linux e Unix para automação de tarefas e administração do sistema."
        }, {
            icon: "https://logo.svgcdn.com/devicon/powershell-original.png",
            icon_alt_text: "Shell",
            title: "Shell",
            subtitle: "Interface de Linha de Comando",
            text: "Interface que permite a interação direta com o sistema operacional por meio de comandos de texto, como Bash, Zsh e PowerShell."
        }, {
            icon: "https://cdn-icons-png.flaticon.com/512/136/136525.png",
            icon_alt_text: "JSON",
            title: "JSON",
            subtitle: "Formato de Dados",
            text: "Formato leve de troca de dados baseado em texto, amplamente utilizado em APIs e aplicações web para comunicação entre sistemas."
        }, {
            icon: "https://cdn-icons-png.flaticon.com/512/136/136526.png",
            icon_alt_text: "XML",
            title: "XML",
            subtitle: "Linguagem de Marcação",
            text: "Linguagem de marcação extensível utilizada para estruturar, armazenar e transportar dados entre sistemas."
        }, {
            icon: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
            icon_alt_text: "Markdown",
            title: "Markdown",
            subtitle: "Linguagem de Marcação Leve",
            text: "Linguagem simples para formatação de texto, muito utilizada em documentações, READMEs, wikis e anotações técnicas."
        }
    ]

    return (<>
        <CardHolderChild darkMode={darkMode} title={"Outros"} element={
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