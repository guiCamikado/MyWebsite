import Chart from "react-apexcharts"

function ChartLineDefault({ darkMode, data, categories }) {
  // WIP fazer temas escuro claro e esticar na largura da tela
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
    series: [
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