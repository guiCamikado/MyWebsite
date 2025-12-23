import java_icon from "../../../assets/images/Logos/java_icon.svg"
import javaScript_icon from "../../../assets/images/Logos/javascript_icon.svg"
import python_icon from "../../../assets/images/Logos/python_icon.svg"

import SkillDescriptionCard from "../../atoms/SkillDescriptionCard"
import CardHolderChild from "../../atoms/CardHolderChild"

export default function ClusterLinguagens({ darkMode }) {

    const data = [
        {
            icon: java_icon,
            icon_alt_text: "Java Icon",
            title: "Java",
            subtitle: "Oracle Corporation",
            text: "Java é uma linguagem de programação orientada a objetos, Diferentemente das linguagens de programação modernas, que são compiladas para código nativo, Java é compilada para um bytecode que é interpretado por uma máquina virtual (Java Virtual Machine, abreviada JVM)."
        }, {
            icon: python_icon,
            icon_alt_text: "Python Icon",
            title: "Python",
            subtitle: "Python Software Foundation",
            text: "Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, de tipagem dinâmica forte prioriza legibilidade do código sobre expressividade fazendo assim com que bons programadores em python tendam a passar longe do mesmo utilizando bibliotécas escritas em C."
        }, {
            icon: javaScript_icon,
            icon_alt_text: "JavaScript Icon",
            title: "JavaScript",
            subtitle: "By Brendan Eich",
            text: "JavaScript geralmente abreviada como JS é uma linguagem de programação interpretada estruturada de tipagem dinâmica fraca e multiparadigma. É um dos 3 pilares da World Wide Web permitindo a criação da interatividade das páginas sendo essencial para aplicativos web inclusive está sendo utilizado nesta página."
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
