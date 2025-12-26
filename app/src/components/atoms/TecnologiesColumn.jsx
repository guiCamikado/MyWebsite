/** Docs
 * @startDate 26/12/25
 * @lastUpdate 26/12/25 
 * 
 * @use Mostra coluna de tecnologias
 * 
 * (WIP) necessário criar cards quando hover em cima da técnologia
 */

export default function TecnologiesColumn({ data }) {
    return (

        <div className="flex-none p-4 flex flex-col items-center gap-4 border-l border-white/10">
            {data.map((tech, index) => (
                <img
                    key={index}
                    src={tech}
                    alt="Tecnologia"
                    className="w-10 h-10 object-contain hover:scale-125 transition-transform duration-300"
                />
            ))}
        </div>
    )
}