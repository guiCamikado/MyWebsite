import DefaultButton from "../atoms/DefaultButton"

export default function CardLoginRegister({ darkMode, elements, title, subtitle }) {

    const inputStyle = darkMode
        ? "bg-[#141314] p-20 rounded-4xl"
        : "bg-[#F4F3F4] p-20 rounded-4xl"
    return (
        <>
            <div className={inputStyle}>

                <div className="content-center center">
                    <div className="text-4xl underline">{title ?? "Definir um Titulo"}</div>
                    <div className="pt-3">{subtitle ?? "Definir um Subtitulo"}</div>
                </div>
                {elements}
                <DefaultButton text={"Login"} link={"test"} darkMode={darkMode} />
            </div>

        </>
    )
}