import { useEffect, useState } from "react";
import Chart from "react-apexcharts"

function ChartLineDefault({ darkMode, data }) {

  const [categories, setCategories] = useState(["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]) // Fazer meses aqui
  const [newUsers, setNewUsers] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])  // Cada item representa 1 mês
  const [users, setUsers] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])  // Cada item representa 1 mês
  const [series, setSeries] = useState(
    [
      { name: "Usuários Novos", data: [0] },
      { name: "Acessos Totais", data: [0] },
    ]
  )

  useEffect(() => { // Contabiliza Usuários Novos
    if (typeof (data) === "object" && data[0]) {
      for (let i = 0; i < data[0].length; i++) {
        const monthIndex = new Date(data[0][i].time).getMonth();

        setNewUsers(prevArray => {
          const newArray = [...prevArray]; // copia do array
          newArray[monthIndex] += 1;       // Incrementa o mês correspondente
          return newArray;                  // Retorna o novo array
        });
      }
    }
  }, [data])
  useEffect(() => { // Contabiliza total de Acessos
    if (typeof (data) === "object" && data[1]) {
      for (let i = 0; i < data[1].length; i++) {
        const monthIndex = new Date(data[1][i].time).getMonth();

        setUsers(prevArray => {
          const newArray = [...prevArray]; // copia do array
          newArray[monthIndex] += 1;       // Incrementa o mês correspondente
          return newArray;                  // Retorna o novo array
        });
      }
    }
  }, [data])
  useEffect(() => { // Atualiza gráfico
    setSeries([
      { name: "Usuários Novos", data: newUsers },
      { name: "Acessos Totais", data: users },
    ])
  }, [users, newUsers])

  // WIP criar função que:
  // Caso valores a frente em uma array forem todos "0" excluir esses valores
  // Se um numero maior for encontrado todos os valores anteriores devem ser mantidos.
  // Uma vez feita utilizar essa fução nas arrays users e newUsers


  const baseOptions = {
    chart: {
      id: "line-chart",
      background: "transparent",
      toolbar: { show: false },
    },
    stroke: {
      curve: "straight",
      width: 3,
      colors: darkMode
        ? ["#DD01E6", "#00E5FF"]
        : ["#FFFF20", "#FF5722"],
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: categories ?? ["Jan", "Fev", "Mar"],
      labels: {
        style: {
          colors: darkMode
            ? ["#DD01E6", "#00E5FF"]
            : ["#FFFF20", "#FF5722"],
          fontSize: '12px'
        },
      },
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: true,
      },
    },
    markers: {
      size: 5,
      strokeWidth: 2,
      strokeColors: darkMode
        ? ["#DD01E6", "#00E5FF"]
        : ["#FFFF20", "#FF5722"],
      colors: darkMode
        ? ["#DD01E6", "#00E5FF"]
        : ["#FFFF20", "#FF5722"],
      hover: {
        size: 7,
      },
    },
    grid: {
      borderColor: darkMode ? "#444" : "#e0e0e0",
      strokeDashArray: 4,
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      }
    },
  }

  const chartConfig = {
    options: {
      ...baseOptions,
      theme: {
        mode: darkMode ? "dark" : "light"
      },
      colors: [darkMode ? "#DD01E6" : "#FFFF20"],
      yaxis: {
        labels: {
          style: {
            colors: darkMode ? "#FFFFFF" : "#000000",
            fontSize: '12px'
          },
          formatter: function (val) {
            return val.toFixed(0);
          }
        },
      },
      tooltip: {
        theme: darkMode ? "dark" : "light",
        style: {
          fontSize: '12px'
        }
      },
      legend: {
        show: false // Escondendo legenda já que só tem uma série
      }
    },
    series: series ?? [
      {
        name: "Linha A",
        data: [1, 9, 0],
      },
      {
        name: "Linha B",
        data: [1, 2, 9],
      },
    ],
  }

  return (
    <div className={`m-4 w-full h-full overflow-hidden rounded-lg`}>
      <Chart
        options={chartConfig.options}
        series={chartConfig.series}
        type="line"
        height={350}
        width="100%"
      />
    </div>
  )
}

export default ChartLineDefault