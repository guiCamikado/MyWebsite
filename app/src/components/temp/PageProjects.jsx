import { useEffect, useState } from "react"

// Temp
import java_icon from "../../assets/images/Logos/languageIcons/java_icon.svg"
import javaScript_icon from "../../assets/images/Logos/languageIcons/javascript_icon.png"
import python_icon from "../../assets/images/Logos/languageIcons/python_icon.svg"
import Csharp_icon from "../../assets/images/Logos/languageIcons/Csharp_logo.svg.png"
import sql_icon from "../../assets/images/Logos/languageIcons/sql_icon.png"
import CardHolder from "../atoms/CardHolder"
import ImageSlider from "../molecules/ImageSlider"
import CurrentStatus from "../atoms/CurrentStatus"
import TecnologiesColumn from "../atoms/TecnologiesColumn"
import DescriptionColumn from "../molecules/DescriptionColumn"

/** Docs
 * @startDate 25/12/25
 * @lastUpdate 25/12/25 
 * 
 * Componente responsável por exibir um projeto.
 *
 * @param {Object} props
 * @param {boolean} props.darkMode - Define se o tema escuro está ativo.
 * @param {Object} props.content - Objeto que contém todas as informações do projeto.
 *
 * @param {string} props.content.title - Título do projeto.
 * @param {string} props.content.dataInicio - Data de início do projeto (dd/mm/yyyy).
 * @param {string} props.content.dataFim - Data de término do projeto (dd/mm/yyyy).
 * @param {Array<string | JSX.Element>} props.content.images - Lista de imagens ou componentes visuais do projeto.
 * @param {JSX.Element} props.content.description - Descrição do projeto em formato JSX.
 * @param {Array<string>} props.content.technologies - Lista de tecnologias utilizadas.
 * @param {string | undefined} props.content.status - Status atual do projeto (opcional).
 * @param {string} props.content.link - Link externo relacionado ao projeto.
 *
 * @example
 * const content = {
 *   title: "Undefined",
 *   dataInicio: "dd/mm/yyyy",
 *   dataFim: "dd/mm/yyyy",
 *   images: [testImage, testImage2],
 *   description: (
 *     <>
 *       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
 *     </>
 *   ),
 *   technologies: [java_icon, javaScript_icon, python_icon, Csharp_icon, sql_icon],
 *   status: undefined,
 *   link: "www.linkTest.com"
 * };
 */
export default function PageProjects({ darkMode, content }) {
    
    const data = content ? content : {
        title: "Undefined",
        dataInicio: "dd/mm/yyyy",
        dataFim: "dd/mm/yyyy",
        images: [],
        description: <>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae ut commodi magnam iure, illo necessitatibus fugit sequi autem aut doloremque maiores tempore consequatur earum voluptate illum ab sint repellat eos.</p>
        </>,
        technologies: [java_icon, javaScript_icon, python_icon, Csharp_icon, sql_icon],
        status: undefined,
        link: "www.linkTest.com"
    }

    return (
        <div className="grid grid-cols-2 ml-4 h-[90%] w-auto justify-center">

            {/* CARD PRINCIPAL */}
            <div
                className={`flex flex-row h-auto rounded-2xl m-4 origin-top-left 
                hover:rotate-1 hover:scale-105 transition-transform duration-600
                ${darkMode ? "bg-[#403E4022]" : "bg-[#E2E0E2]"}`}
            >

                {/* CONTEÚDO */}
                <div className="flex flex-col flex-1 min-w-0 p-4">

                    {/* HEADER */}
                    <div
                        className={`grid grid-cols-2 mb-4 
                        ${darkMode ? "text-[#FFE3C8]" : "text-[#403E40]"}`}
                    >
                        <h2 className="text-4xl">{data.title}</h2>
                        <span className="pt-4 text-right">
                            {data.dataInicio} - {data.dataFim}
                        </span>
                    </div>

                    {/* IMAGEM */}
                    <ImageSlider switchInterval={5000} imageArray={data.images} />

                    {/* DESCRIÇÃO */}
                    <DescriptionColumn
                        description={data.description}
                        darkMode={darkMode}
                    />

                    {/* STATUS + LINK */}
                    <div className="flex items-center gap-4 mt-2">
                        <CurrentStatus status={data.status} />

                        <a
                            href={data.link}
                            className={`underline transition-colors
                            ${darkMode
                                    ? "text-[#FFE3C8] hover:text-white"
                                    : "text-[#403E40] hover:text-black"
                                }`}
                        >
                            Link do projeto
                        </a>
                    </div>
                </div>

                {/* TECNOLOGIAS */}
                <TecnologiesColumn data={data.technologies} />
            </div>
        </div>
    );
}