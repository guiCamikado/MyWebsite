export default function EducationItem({ data, darkMode }) {
    return (
        <div className="justify-center pt-4 m-4">
            <div
                className={`w-full rounded-xl p-4 origin-top transition-transform duration-700 hover:scale-[1.02]
                ${darkMode
                    ? "text-[#FFE3C8] bg-[#00000044] border-2 border-[#201F20] hover:border-[#DD01E6]"
                    : "text-[#403E40] bg-[#e2e0e2] border-2 border-[#EEECEE] hover:border-[#FFFF20]"
                }`}
            >
                {/* Header */}
                <div className="flex gap-4 items-start">
                    <img
                        src={data.logo}
                        alt={data.logo_alt_text}
                        className="w-32 h-32 object-contain"
                    />

                    <div>
                        <h3 className="text-2xl font-bold leading-tight">
                            {data.institution}
                        </h3>

                        <p className="text-sm opacity-80">
                            {data.formationLevel} • {data.formation}
                        </p>

                        <p className="text-xs opacity-60 mt-1">
                            {data.startDate} — {data.endDate}
                        </p>
                    </div>
                </div>

                <div className="pt-4 text-sm leading-relaxed">
                    {data.description}
                </div>
            </div>

            <hr className="text-amber-50 m-8" />
        </div>
    );
}
