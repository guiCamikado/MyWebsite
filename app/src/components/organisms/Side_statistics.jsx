import { useEffect, useState } from "react";
import { BigCardHolder } from "../atoms/CardHolders";
import ChartLineDefault from "../molecules/ChartLineDefault";

import ApiService from "../../utils/PostManager";

export default function StatisticsPage({ darkMode }) {

	const [connectionChartData, setConnectionChartData] = useState("");


	const getIps = async () => {
		try {
			const data = await ApiService.InternalGet("/api/ipManager/getIpTable");
			const newUsers = []
			const allUsers = []
			for (let i = 0; i < data.length; i++) {
				if (data[i].isFirst) {
					newUsers.push(data[i])
				}
				allUsers.push(data[i])
			}
			
			setConnectionChartData([newUsers, allUsers])
			if (!data || data.length === 0) return;
		} catch (error) {
			console.error(error);
			setConnectionChartData([], [])
		}
	};

	useEffect(() => {
		getIps()
	}, [])

	const items = [
		<BigCardHolder
			key="chart-1"
			title="Numero de Acessos"
			darkMode={darkMode}
			element={
				<>
					<div className="grid grid-cols-4">
						<div className="col-span-3">
							<ChartLineDefault data={connectionChartData} darkMode={darkMode} />
						</div>

						<div className="pl-4">
							<p className="pt-2">
								Aqui se tem o numero de acessos ao site.
							</p>

							<p className="pt-2">
								O calculo é feito utilizando uma API que obtem os endereços de IP que se conectam ao site, o mesmo envia para um banco de dados
								que no momento em que são obtidos novamente são rasheados para manter a privacidade do usuário não mostrando o endereço armazenado no banco de dados quando o mesmo é retornado.
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