export default function InputCamp({ darkmode, onChange, placeholder, type, icon }) {
    const inputStyle = darkmode
        ? `
            w-full px-3 py-2
            text-white placeholder:text-[#ffffff88]
            bg-transparent
            border-b-2 border-[#DD01E6]
            outline-none m-1
            transition-all duration-300
            focus:border-[#DD01E6]
            focus:shadow-[0_6px_10px_-6px_#DD01E6]
          `
        : `
            w-full px-3 py-2
            text-black placeholder:text-[#00000088]
            bg-transparent
            border-b-2 border-black
            outline-none m-1
            transition-all duration-300
            focus:border-black
            focus:shadow-[0_6px_10px_-6px_rgba(0,0,0,0.5)]
          `;
    // block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600
    return (
        <>
            <div className="flex">
                <input type={type}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={inputStyle} />

                <div className="size-0.5 pt-3">{icon}</div>
            </div >
        </>
    )
}