export default function AppLink({ darkMode, link, text }) {
    return (
        <a
            href={`?page=${link}`}
            className={darkMode
                ? "text-[#DD01E6] underline"
                : "text-[#000ff0] underline"}
        >
            {text}
        </a>
    )
}
