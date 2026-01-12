import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import { useTheme } from "../Context/ThemeContext";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function DashboardChart() {
  // Sample data for charts
  const barData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: "rgba(59, 130, 246, 0.7)",
        borderColor: "rgba(59, 130, 246, 1)",
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Revenue",
        data: [33, 53, 85, 41, 44, 65],
        fill: false,
        borderColor: "rgba(16, 185, 129, 1)",
        backgroundColor: "rgba(16, 185, 129, 0.5)",
        tension: 0.4,
      },
    ],
  };

  const doughnutData = {
    labels: ["Products", "Users", "Orders"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          "rgba(59, 130, 246, 0.7)",
          "rgba(245, 158, 11, 0.7)",
          "rgba(239, 68, 68, 0.7)",
        ],
        borderColor: [
          "rgba(59, 130, 246, 1)",
          "rgba(245, 158, 11, 1)",
          "rgba(239, 68, 68, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Chart",
      },
    },
  };
  const { theme } = useTheme()

  return (
    <>
      <h1 className={`text-2xl font-bold mb-4 ${theme ? "bg-white text-black/90" : " text-white"}`}>
        Dashboard Overview
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {/* Bar Chart */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <h3 className="text-lg font-bold mb-4 text-gray-700">
            Monthly Sales
          </h3>
          <Bar data={barData} options={options} />
        </div>

        {/* Line Chart */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <h3 className="text-lg font-bold mb-4 text-gray-700">
            Revenue Trend
          </h3>
          <Line data={lineData} options={options} />
        </div>

        {/* Doughnut Chart */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <h3 className="text-lg font-bold mb-4 text-gray-700">Distribution</h3>
          <div className="flex justify-center">
            <div className="w-64 h-64">
              <Doughnut data={doughnutData} options={options} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
