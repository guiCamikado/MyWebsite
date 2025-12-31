export default function TextCamp({ darkMode, title, text }) {
    return (
        <>
            <div className={`
                m-0 md:m-8
                p-3 md:p-10
                w-full md:w-auto
                rounded-xl
                transition-transform duration-600 ease-in-out
                ${darkMode
                    ? "text-[#FFE3C8] bg-[#00000088] border-2 border-[#201F20] hover:border-[#DD01E6]"
                    : "text-[#403E40] bg-[#e2e0e2] border-2 border-[#EEECEE] hover:border-[#FFFF20]"
                }
  `}>
                <div>
                    {title
                        ? <>
                            <h1 className="sm:w-full p:0 md:text-4xl p-2 justify-center">
                                {title}
                            </h1>
                        </>
                        :
                        ""}

                </div>

                <div className="md:indent-4">
                    {text}
                </div>
            </div >
        </>
    )
}