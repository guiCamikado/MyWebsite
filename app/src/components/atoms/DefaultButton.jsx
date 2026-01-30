export default function DefaultButton({ text, link, darkMode }) {
    // WIP essa função deverá:
    // 1. Lidar com um post e aguardar a resposta
    // 2. Se a resposta for verdadeira redirecionar o usuário

    const handleClick = () => {
        if (link) {
            window.location.href = link
        }
    }

    return (
        <>
            <div className={darkMode
                ? `p-1.5 mt-4 rounded-sm text-center bg-[#807C8020] cursor-pointer transition-all duration-200 hover:text-[#DD01E6] hover:scale-110 hover:m-2 hover:bg-[#807C8050]`
                : `p-1.5 mt-4 rounded-sm text-center bg-[#0000000D] cursor-pointer transition-all duration-200 hover:text-[#FFFF20] hover:scale-110 hover:m-2 hover:bg-[#00000018] text-black`
            }

                onClick={() => {
                    handleClick()
                }}>
                {text}
            </div>
        </>
    )
}