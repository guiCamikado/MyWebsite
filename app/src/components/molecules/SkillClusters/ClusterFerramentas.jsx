import blender_icon from "../../../assets/images/Logos/blender_icon_1024x1024.png"
import SkillDescriptionCard from "../../atoms/SkillDescriptionCard"
import CardHolderChild from "../../atoms/CardHolderChild"

export default function ClusterFerramentas({darkMode}) {

    const blender_tool = {
        icon: blender_icon,
        icon_alt_text: "Blender Foundation",
        title: "Blender 3D",
        subtitle: "3D Software",
        text: " Um software de computação gráfica 3D gratuito de código aberto, criado pelo cofundador Ton Roosendaal em 2 de janeiro de 1994, utilizado principalmente por artistas para a criação de modelos 3D, animações, efeitos visuais, simulações e jogos."
    }

    return (<>
        <CardHolderChild darkMode = { darkMode } title = { "Ferramentas"} element = {
            <>
            <SkillDescriptionCard darkMode={darkMode} itensData={blender_tool}/>
            </>
        } />
    </>)
}