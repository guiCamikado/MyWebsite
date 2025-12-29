export default function TextCamp({ darkMode, title, text }) {
    return (
        <>
            <div className={`p-10 bg-[#00000088] rounded-4xl m-8 + ${darkMode
                ? "text-[#FFE3C8] bg-[#00000088] border-2 border-[#201F20] hover:border-[#DD01E6]"
                : "text-[#403E40] bg-[#e2e0e2] border-2 border-[#EEECEE] hover:border-[#FFFF20]"
                } hover:scale-102 rounded-xl p-2 origin-center transition-transform duration-600 ease-in-out`}>
                <div>
                    <h1 className="text-4xl p-2 justify-center">
                        {title}
                    </h1>
                </div>

                <div className="indent-4">
                    {text}
                </div>
            </div >
        </>
    )
}