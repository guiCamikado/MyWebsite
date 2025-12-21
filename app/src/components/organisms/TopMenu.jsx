import { Home } from "lucide-react"
// import { useNavigate } from "react-router-dom"

function TopMenu() {
//   const navigate = useNavigate()

  return (
    <header
      className="
        w-auto h-14
        bg-black text-amber-50
        flex items-center justify-start
        px-4
      "
    >
      <Home
        size={28}
        onClick={() => navigate("/")}
        className="
          rounded-xl
          bg-[#807C8020]
          cursor-pointer
          transition-all duration-200
          hover:text-[#DD01E6]
          hover:scale-105
          p-1
        "
      />
    </header>
  )
}

export default TopMenu
