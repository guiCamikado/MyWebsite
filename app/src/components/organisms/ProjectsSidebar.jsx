import ioturn_1 from "../../assets/images/photos/ioturn/ioturn_1.jpeg"
import ioturn_2 from "../../assets/images/photos/ioturn/ioturn_2.png"
import ioturn_3 from "../../assets/images/photos/ioturn/ioturn_3.png"

// Temp
// React
// JS
// TypeScript
// C
// Kubernets
// MQTT
// MUI
import java_icon from "../../assets/images/Logos/languageIcons/java_icon.svg"
import javaScript_icon from "../../assets/images/Logos/languageIcons/javascript_icon.png"
import python_icon from "../../assets/images/Logos/languageIcons/python_icon.svg"
import Csharp_icon from "../../assets/images/Logos/languageIcons/Csharp_logo.svg.png"
import sql_icon from "../../assets/images/Logos/languageIcons/sql_icon.png"

import ImageSlider from "../molecules/ImageSlider"
import CurrentStatus from "../atoms/CurrentStatus"
import TecnologiesColumn from "../atoms/TecnologiesColumn"
import DescriptionColumn from "../molecules/DescriptionColumn"

/**
 * Componente responsável por exibir um projeto.
 *
 * @param {Object} props
 * @param {boolean} props.darkMode - Define se o tema escuro está ativo.
 * @param {Object} props.content - Objeto com os dados do projeto title(Str), dataInicio(Str), dataFim(Str), images(Array), description(<>obj<>), technologies(Array), status("concluido, progresso, parado, undefined"), link(String).
 */
export default function ProjectsSidebar({ darkMode, content }) {

    const data = content ?? [{
        title: "IoTurn",
        dataInicio: "01/01/2025",
        dataFim: "12/12/2025",
        images: [ioturn_1, ioturn_2, ioturn_3],
        description: (
            <>
                <p>
                    Projeto técnico desenvolvido no SENAI São Carlos como trabalho de conclusão de curso.
                    O projeto consistiu na criação de um sistema voltado à integração entre os conceitos
                    da Indústria 3.0 e Indústria 4.0, utilizando sensores acoplados a um torno industrial
                    e conectados a um microcontrolador ESP32.
                </p>
                <br />
                <p>
                    A comunicação entre os dispositivos era realizada por meio de rádio, permitindo o envio
                    contínuo de dados a um servidor responsável pela análise das informações, aplicação de
                    modelos de aprendizado de máquina e detecção de anomalias em tempo real. O sistema
                    também contava com uma interface completa, apresentando gráficos em tempo real,
                    cadastro de dispositivos, validações de acesso e um módulo de autenticação, além de
                    integração com ferramentas de inteligência artificial para consultas rápidas e
                    contextualizadas a partir dos dados coletados.
                </p>
            </>
        ),
        technologies: [java_icon, javaScript_icon, python_icon, Csharp_icon, sql_icon],
        status: "concluido",
        link: "https://github.com/SENAISP-Unid601-Projetos/IoTurn"
    },]

    return (
        <div className="grid grid-cols-2 ml-4 h-[90%] w-auto justify-center">

            {data.map((item, index) => (
                <div
                    key={index}
                    className={`flex flex-row h-auto rounded-2xl m-4 origin-top-left 
        hover:rotate-1 hover:scale-105 transition-transform duration-600
        ${darkMode ? "bg-[#403E4022]" : "bg-[#E2E0E2]"}`}
                >

                    <div className="flex flex-col flex-1 min-w-0 p-4">

                        <div className={`grid grid-cols-2 mb-4 
                ${darkMode ? "text-[#FFE3C8]" : "text-[#403E40]"}`}>
                            <h2 className="text-4xl">{item.title}</h2>
                            <span className="pt-4 text-right">
                                {item.dataInicio} - {item.dataFim}
                            </span>
                        </div>

                        <ImageSlider switchInterval={5000} imageArray={item.images} />

                        <DescriptionColumn
                            description={item.description}
                            darkMode={darkMode}
                        />

                        <div className="flex items-center gap-4 mt-2">
                            <CurrentStatus status={item.status} />

                            <a
                                href={item.link}
                                className={`underline transition-colors pt-4
                    ${darkMode
                                        ? "text-[#FFE3C8] hover:text-white"
                                        : "text-[#403E40] hover:text-black"
                                    }`}
                            >
                                Link do projeto
                            </a>
                        </div>
                    </div>

                    <TecnologiesColumn data={item.technologies} />
                </div>
            ))}


        </div>
    )
}
