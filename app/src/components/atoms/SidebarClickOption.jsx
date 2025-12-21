export default function SidebarClickOption({ text, link }) {

    const handleClick = () => {
        if (link) {
            window.location.href = link
        }
    }

    return (
        <>
            <div className="
            p-1
            rounded-sm
            bg-[#807C8020]
            cursor-pointer
            transition-all duration-200
            hover:text-[#DD01E6]
            
            hover:scale-110
            hover:ml-4
            hover:bg-[#807C8050]"
            
            onClick={handleClick}>
                {text}
            </div>
        </>
    )
}