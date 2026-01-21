export default function Link({ darkMode, link, text }) {
    return (
        <a
            href={link}
            className={darkMode
                ? "text-[#DD01E6] underline"
                : "text-[#000ff0] underline"}>
            {text ?? "Defina um texto"}
        </a >
    )
}