import java_icon from "../../../assets/images/Logos/languageIcons/java_icon.svg"
import javaScript_icon from "../../../assets/images/Logos/languageIcons/javascript_icon.png"
import python_icon from "../../../assets/images/Logos/languageIcons/python_icon.svg"
import Csharp_icon from "../../../assets/images/Logos/languageIcons/Csharp_logo.svg.png"
import sql_icon from "../../../assets/images/Logos/languageIcons/sql_icon.png"

import SkillDescriptionCard from "../../atoms/SkillDescriptionCard"
import CardHolderChild from "../../atoms/CardHolderChild"

/** 
 * @use
 *  Um cluster de itens referentes a linguagens de programação que eu sei ou já tive experiência
*/

export default function ClusterLinguagens({ darkMode }) {

    const data = [
        {
            icon: java_icon,
            icon_alt_text: "Java Icon",
            title: "Java",
            subtitle: "Linguagem de programação",
            text: "Java é uma linguagem de programação orientada a objetos, Diferentemente das linguagens de programação modernas, que são compiladas para código nativo, Java é compilada para um bytecode que é interpretado por uma máquina virtual tornando a assim flexivel para uso em diversos sistemas."
        }, {
            icon: python_icon,
            icon_alt_text: "Python Icon",
            title: "Python",
            subtitle: "Linguagem de programação",
            text: "Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, de tipagem dinâmica forte prioriza legibilidade do código sobre expressividade fazendo assim com que bons programadores em python tendam a passar longe do mesmo utilizando bibliotécas escritas em C."
        }, {
            icon: javaScript_icon,
            icon_alt_text: "JavaScript Icon",
            title: "JavaScript",
            subtitle: "Linguagem de programação",
            text: "JavaScript geralmente abreviada como JS é uma linguagem de programação interpretada estruturada de tipagem dinâmica fraca e multiparadigma. É um dos 3 pilares da World Wide Web permitindo a criação da interatividade das páginas sendo essencial para aplicativos web inclusive está sendo utilizado nesta página."
        }, {
            icon: Csharp_icon,
            icon_alt_text: "Csharp_icon",
            title: "Csharp | C#",
            subtitle: "Linguagem de programação",
            text: "Uma linguagem de programação, multiparadigma de tipagem forte, desenvolvida pela microsoft como parte da plataforma .NET"
        }, {
            icon: sql_icon,
            icon_alt_text: "SQL_Icon",
            title: "SQL",
            subtitle: "Linguagem de Query",
            text: "SEQUEL (Structured English Query Language) são um conjunto de dialetos de expressões regulares e de emparelhamento, queries recursivas e gatilhos criadas com o objetivo de gerenciar dados relacionais em um sistema de gerenciamento de banco de dados."
        }
    ]

    return (
        <CardHolderChild
            darkMode={darkMode}
            title="Linguagens"
            element={
                <>
                    {data.map((value, index) => (
                        <SkillDescriptionCard
                            key={index}
                            darkMode={darkMode}
                            itensData={value}
                        />
                    ))}
                </>
            }
        />
    )
}
