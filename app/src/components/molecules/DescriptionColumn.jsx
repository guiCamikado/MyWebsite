export default function DescriptionColumn({ description, darkMode = false }) {
    return (
        <>
            <div className={`mt-4 p-4 rounded-3xl flex-1 min-w-0 ${darkMode ? "bg-[#201F20] text-[#FFE3C8]" : "bg-[#E2E0E2] text-[#403E40]"}`}>

                <p className={`underline mb-2 ${darkMode
                    ? "bg-[#201F20] text-[#FFE3C8]"
                    : "bg-[#E2E0E2] text-[#403E40]"
                    }`}>

                    Descrição:
                </p>
                {description}
            </div>
        </>
    )
}