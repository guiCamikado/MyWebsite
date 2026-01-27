import { BigCardHolder } from "../atoms/CardHolders";
import ChartLineDefault from "../molecules/ChartLineDefault";

export default function StatisticsPage({ darkMode }) {

	// WIP Usar API para pegar o endereço IP:
	// https://api.ipify.org?format=json

	// Após pegar o endereço IP será necessário Hashear o mesmo.
	// Também será preciso armazenar a sessão e a página que está sendo acessada isto é para o código não ficar enviando toda vez que atualiza a página e para armazenar quais páginas foram acessadas 

	const items = [
		<BigCardHolder
			key="chart-1"
			title="Numero de Acessos"
			darkMode={darkMode}
			element={
				<>
					<div className="grid grid-cols-4">
						<div className="col-span-3">
							<ChartLineDefault darkMode={darkMode} />
						</div>

						<div className="pl-4">
							<p>
								<p className="pt-2">
									Aqui se tem o numero de acessos ao site.
								</p>

								<p className="pt-2">
									O calculo é feito utilizando uma API que obtem os endereços de IP que se conectam ao site, o mesmo envia para um banco de dados
									que no momento em que são obtidos novamente são rasheados para manter a privacidade do usuário não mostrando o endereço armazenado no banco de dados quando o mesmo é retornado.
								</p>
							</p>

							<div className="pl-1 pt-8 flex flex-col gap-3">

								<div className="flex items-center gap-2">
									<span className="w-4 h-4 bg-purple-600 rounded-full"></span>
									<span>Acessos únicos</span>
								</div>

								<div className="flex items-center gap-2">
									<span className="w-4 h-4 bg-cyan-400 rounded-full"></span>
									<span>Acessos totais</span>
								</div>
							</div>

						</div>
					</div>
				</>
			}
		/>,
	]

	return (
		<>
			{/* <div className="content-center w-screen max-w-full max-h-screen h-screen p-4"> */}
			<div className={`w-screen min-h-screen items-center justify-center ${darkMode
				? "text-[#ffffff]"
				: "text-[#000000]"
				}`}>

				<div className={`grid gap-10 p-10 ${items.length === 1 ? "grid-cols-1 place-items-center" : "grid-cols-2"}`}>
					{items}
				</div>


			</div>
		</>
	)

}