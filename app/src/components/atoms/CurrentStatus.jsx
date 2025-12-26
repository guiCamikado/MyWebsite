/** Docs
 * @startDate 26/12/25
 * @lastUpdate 26/12/25 
 * 
 * @use Mostra o status atual de um componente
 */
export default function CurrentStatus({ status }) {
    return (
        <div className="mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2a2a2a]/60 border border-white/10 backdrop-blur-sm">

                {status === "concluido" && (
                    <>
                        <div className="w-3 h-3 bg-[#00ff00] rounded-full shadow-[0_0_15px_#008800] animate-pulse" />
                        <span className="text-xs text-[#baffba] font-medium">Concluído</span>
                    </>
                )}

                {status === "progresso" && (
                    <>
                        <div className="w-3 h-3 bg-[#ffff00] rounded-full shadow-[0_0_10px_#aaaa00] animate-pulse" />
                        <span className="text-xs text-[#fff7b0] font-medium">Em progresso</span>
                    </>
                )}

                {status === "parado" && (
                    <>
                        <div className="w-3 h-3 bg-[#ff0000] rounded-full shadow-[0_0_10px_#880000] animate-pulse" />
                        <span className="text-xs text-[#ffb3b3] font-medium">Parado</span>
                    </>
                )}

                {status === undefined && (
                    <>
                        <div className="w-3 h-3 bg-[#2e3cff] rounded-full shadow-[0_0_10px_#880000] animate-pulse" />
                        <span className="text-xs text-[#2e3cff] font-medium">Undefined</span>
                    </>
                )}

            </div>
        </div>
    )
}