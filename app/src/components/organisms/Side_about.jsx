import CardHolder from "../atoms/CardHolders";
import CardHolderChild from "../atoms/CardHolderChild";
import TextCamp from "../atoms/TextCamp";

import picture_01 from "../../assets/images/photos/myPhotos/picture_01.jpg"
import picture_02 from "../../assets/images/photos/myPhotos/picture_02.jpg"
import picture_03 from "../../assets/images/photos/myPhotos/picture_03.jpg"

export default function AboutSidebar({ darkMode }) {
    return (
        <>
            <div className="justify-center itens-center h-auto w-auto">

                {/* polygon(0 25%, 25% 0, 49% 0, 85% 0%, 100% 0, 100% 15%, 100% 85%, 100% 100%, 85% 100%, 15% 100%, 0 100%, 0% 85%); */}

                {/* Perfil Geral */}
                <TextCamp
                    darkMode={darkMode}
                    text={
                        <div className="md:flex md:gap-8 items-center">

                            {/* IMAGEM COM CLIP-PATH */}
                            <div
                                style={{
                                    clipPath:
                                        "circle(40% at 50% 50%)",
                                    overflow: "hidden",
                                }}
                                className=" md:w-[15%] h-[20%] border-2 hover:scale-120 hover:border-[#DD01E6] shrink-0 transition-transform  duration-500  ease-in-out  hover:rotate-28800"
                            >
                                <img
                                    src={picture_03}
                                    alt="Foto de Guilherme Camikado"
                                    className="md:w-full md:h-full"
                                />
                            </div>

                            {/* TEXTO */}
                            <div className="md:flex md:flex-col gap-1">
                                <p className="md:text-4xl font-semibold">Guilherme Andrade Camikado</p>
                                <p className="md:text-2xl text-gray-400">Desenvolvedor Full-Stack Jr</p>

                                <div className="md:mt-4 space-y-1 text-1x1">
                                    <p><strong>Local:</strong> Brasil – São Carlos, SP</p>
                                    <p><strong>Telefone:</strong> (16) 99328-2169</p>
                                    <p>
                                        <strong>E-mail:</strong>{" "}
                                        <a href="mailto:guilherme.camikado@gmail.com" className="text-blue-400 hover:underline">
                                            guilherme.camikado@gmail.com
                                        </a>
                                    </p>
                                    <p>
                                        <strong>LinkedIn:</strong>{" "}
                                        <a
                                            href="https://www.linkedin.com/in/guiacamikado"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-blue-400 hover:underline"
                                        >
                                            linkedin.com/in/guiacamikado
                                        </a>
                                    </p>
                                    <p>
                                        <strong>GitHub:</strong>{" "}
                                        <a
                                            href="https://github.com/guiCamikado"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-blue-400 hover:underline"
                                        >
                                            github.com/guiCamikado
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div class="hidden md:flex h-70 w-px bg-gray-400"></div>

                            <div className="flex flex-col w-[40%]">
                                <p className="font-semibold text-lg "></p>

                                <div className="hidden md:flex flex-wrap gap-2 text-center">

                                    {["Java", "Python", "JavaScript", "C#", "SQL", "Blender", "Unity", "Office 365", "Wireshark", "Sleuth Kit", "GitHub", "Scrum", "Flask", "Spring Boot", "React", "MUI", "Tailwind CSS", "ASP Classic", "Windows", "Linux", "Bash", "Shell", "JSON", "XML", "Markdown"].map((tech) => (
                                        <span
                                            className={`
                                            inline-block px-3 py-2 pr-8 text-sm rounded-full 
                                            transition-transform duration-300 hover:scale-110 hover:border
                                            ${darkMode
                                                    ? "bg-zinc-800 text-white hover:border-[#DD01E6]"
                                                    : "bg-white text-black border-gray-300 hover:border-[#FFEF20]"
                                                }
                                            `}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    }
                />

                {/* Sobre */}
                <TextCamp darkMode={darkMode}
                    title="Sobre o Site"
                    text={
                        <>
                            <p className="pt-2">
                                Olá, seja bem-vindo ao meu site. Desenvolvi este projeto com o intuito de permitir
                                que pessoas — principalmente recrutadores — possam conhecer e avaliar minhas
                                habilidades, comprovando minha capacidade em React, JavaScript e outras
                                ferramentas, como o Tailwind e arquitetura atomic.
                            </p>

                            <p className="pt-2">
                                No futuro, pretendo também incorporar ao site um pequeno CRUD em uma linguagem
                                que ainda não domino, como forma de praticá-la, além de adicionar a funcionalidade
                                de comentários para interação com você, leitor.
                            </p>
                        </>
                    }
                />

                {/* BLOCO 2  História*/}
                <TextCamp darkMode={darkMode}
                    title="Sobre mim"
                    text={
                        <>
                            <p className="pt-2">
                                Meu primeiro contato com um computador foi muito cedo, lembro que ele possuía Windows XP,
                                era antigo e ainda utilizava aquelas telas de tubo CRT com sinal analógico e conector VGA.
                            </p>

                            <p className="pt-2">
                                Desde então, sempre fui voltado a assuntos relacionados a computadores, videogames
                                e à resolução de problemas, como incompatibilidades de programas, versões do .NET,
                                Java ou antivírus bloqueando arquivos legítimos, o que muitas vezes atrapalhavam
                                minhas jogatinas. Por volta dos 14 - 15 anos, comecei a mexer com editores HEX para
                                modificar jogos de Facebook para obter vantagens e a visualizar código HTML na escola para evitar
                                atividades que demandavam muito tempo. Depois disso, aprofundei meus conhecimentos
                                em redes para criar servidores de jogos sem depender do uso de Hamachi ou outros programas de conexão de rede, montei meu primeiro computador e, durante a pandemia, aprendi inglês jogando jogos sociais que exigiam
                                comunicação constante. Por volta de 2021 aprendi a mexer em blender e unity como forma de tentar criar um jogo do qual infelizmente não foi para frente e em 2023, decidi oficialmente seguir carreira na área de tecnologia e iniciei minha formação acadêmica.
                            </p>

                            <p className="pt-2">
                                Apesar de minha trajetória ter começado anos antes, considero que me
                                tornei oficialmente desenvolvedor em 2024, quando conquistei meu primeiro emprego
                                como Jovem Aprendiz na empresa Tecumseh, fabricante de compressores. Acredito que
                                essa oportunidade surgiu tanto pelo meu conhecimento em inglês quanto pela
                                experiência adquirida ao trabalhar com meu pai como autônomo na montagem de
                                câmaras frias.
                            </p>

                            <p className="pt-2">
                                Se você é recrutador, provavelmente já tem conhecimento disso, mas atualmente possuo um
                                diploma de tecnólogo em <b>Análise e Desenvolvimento de Sistemas</b> pela
                                <b> Unicep</b> e outro de <b>Técnico em Desenvolvimento de Sistemas</b> pelo <b>SENAI</b>.
                            </p>
                        </>
                    }
                />
            </div>
        </>
    );
}