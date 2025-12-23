import blender_icon from "../../../assets/images/logos/toolIcons/blender_icon_1024x1024.png"
import unity_icon from "../../../assets/images/logos/toolIcons/unity_icon.svg"
import office365_icon from "../../../assets/images/logos/toolIcons/office365_icon.png"
import wireshark_icon from "../../../assets/images/logos/toolIcons/wireshark_icon.png"
import sleuthkit_icon from "../../../assets/images/logos/toolIcons/sleuthkit_icon.png"
import github_icon from "../../../assets/images/logos/toolIcons/github_icon.png"

import SkillDescriptionCard from "../../atoms/SkillDescriptionCard"
import CardHolderChild from "../../atoms/CardHolderChild"

export default function ClusterFerramentas({ darkMode }) {

    const data = [
        {
            icon: blender_icon,
            icon_alt_text: "Blender Foundation",
            title: "Blender 3D",
            subtitle: "3D Software",
            text: " Um software de computação gráfica 3D gratuito de código aberto, criado pelo cofundador Ton Roosendaal em 2 de janeiro de 1994, utilizado principalmente por artistas para a criação de modelos 3D, animações, efeitos visuais, simulações e jogos."
        }, {
            icon: unity_icon,
            icon_alt_text: "Unity",
            title: "Unity",
            subtitle: "Game Engine",
            text: "Unity é uma engine multiplataforma desenvolvida pela Unity Technologies suportando desktop, móveis, consoles, realidade virtual e aumentada, sendo extremamente popular no desenvolvimento de jogos"
        },
        {
            icon: office365_icon,
            icon_alt_text: "Office365_icon",
            title: "Office 365",
            subtitle: "Pacote de utilidades",
            text: "O Microsoft 365 é um conjunto/família de softwares de produtividade e serviços baseados em nuvem englobando aplicativos como Word, Excel, PowerPoint, Outlook, Microsoft Teams e OneDrive."
        },
        {
            icon: wireshark_icon,
            icon_alt_text: "wireshark_icon",
            title: "Wireshark",
            subtitle: "Analisador de pacotes",
            text: "Uma ferramenta utilizada para análise, troubleshooting e comunicação de protocolos, observando o trafico de pacotes que circulam por uma rede conectada."
        },
        {
            icon: sleuthkit_icon,
            icon_alt_text: "Sleuthkit_icon",
            title: "SleuthKit",
            subtitle: "Biblioteca C",
            text: "Uma ferramenta capas de analisar e extrair dados de discos rigidos em formatos NTFS, FAT, ExFAT, UFS, Ext2, Ext3, Ext4, HFS, ISO 9660 em formato raw."
        },
        {
            icon: github_icon,
            icon_alt_text: "Sleuthkit_icon",
            title: "GitHub",
            subtitle: "Plataforma de desenvolvimento",
            text: "Uma plataforma que permite desenvolvedores criar, armasenar, manusear, e compartilhar código utilizando Git para distribuir versões de controle. A plataforma git em sí proporciona controle de acesso, bug tracking e manuseio por meio de interface."
        }
    ]

    return (<>
        <CardHolderChild darkMode={darkMode} title={"Ferramentas"} element={
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