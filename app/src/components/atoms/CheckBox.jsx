export default function CheckBox({ darkmode, onChange, placeholder }) {
    const inputStyle = darkmode
        ? "px-3 p-2 rounded-md focus:outline-none" // DarkMode
        : "px-3 p-2 rounded-md focus:outline-none" // WhiteMode

    return (
        <>
            <div className={inputStyle}>
                <input type="checkbox" className={inputStyle} />
                <label> {placeholder ? placeholder : "Definir 'placeholder' "}</label>
            </div>
        </>
    )
}