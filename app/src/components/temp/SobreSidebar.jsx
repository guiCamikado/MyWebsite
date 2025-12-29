import CardHolder from "../atoms/CardHolder";
import CardHolderChild from "../atoms/CardHolderChild";
import TextCamp from "../atoms/TextCamp";

export default function SobreSidebar({ darkMode }) {
    return (
        <>
            <div className="justify-center itens-center h-screen w-screen">

                {/* BLOCO 1 Sobre */}
                <TextCamp darkMode={darkMode}
                    title="Sobre"
                    text={
                        <>
                            Olá seja bem-vindo ao meu Site, fiz ele com o intuito de pessoas principalmente recrutadores pudessem ver e avaliar minha pessoa e minhas habilidades para comprovar minha capacidade em React, JavaScript além de outras ferramentas por assim dizer menores como tailwind.
                            No futuro planejo também incorporar ao site um pequeno CRUD em uma linguagem que ainda não aprendi como forma de pratica-la.
                            <p>
                                Dito isso apesar de minha trajetória ter começado anos antes oficialmente sou desenvolvedor desde 2024 ao conseguir meu primeiro emprego como Jovem Aprendiz na empresa Tecumseh uma fabricante de compressores, vaga essa que consegui entrar devido a acredito eu possuir inglês fluente e de ter trabalhado junto de meu pai como autônomo na montagem de camaras frias.
                            </p>
                            <p>
                                Se você é recrutador ja deve ter conhecimento disso mas possuo até então um diploma de tecnólogo em <b>Análise e Desenvolvimento de Sistemas</b> pela <b>Unicep</b> e outro de <b>Desenvolvimento de Sistemas</b> pelo <b>SENAI</b>.
                            </p>
                        </>
                    }
                />

                {/* BLOCO 2  História*/}
                <TextCamp darkMode={darkMode}
                    title="Minha Trajetória"
                    text={
                        <>
                            <p>
                                Meu primeiro contato com um computador foi de muito novo, ele possuía Windows XP, era velho além de ainda ter aquela tela CRT de sinal analógico que vinha com conector VGA.
                            </p>
                            <p>
                                Desde então sempre fui muito ligado a computadores, videogames e a eventualmente resolver problemas de compatibilidade de programas, versões do .NET, Java ou antivírus bloqueando arquivos legítimos me atrapalhando na minha jogatina Sei que por volta dos 15 anos comecei a mexer com editores HEX para modificar jogos de Facebook e visualizar código HTML na escola para não ter de fazer as atividades que demandavam muito tempo. Depois disso me aprofundei em redes para criar servidores de jogos sem depender de Hamachi, montei meu primeiro computador e, durante a pandemia, aprendi inglês jogando jogos principalmente VRChat.
                            </p>
                            <br /><br />
                            <p>
                                Em 2023 decidi oficialmente seguir carreira na área de tecnologia e iniciei minha formação acadêmica.
                            </p>
                        </>
                    }
                />
            </div>
        </>
    );
}