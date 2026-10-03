import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function HourlyChart({ consumoHora = {} }) {
  const data = Object.entries(consumoHora)
    .map(([hora, litros]) => ({
      hora,
      litros: Number(litros) || 0,
    }))
    .sort((a, b) => a.hora.localeCompare(b.hora));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="hora" />
        <YAxis />
        <Tooltip
          formatter={(value) => [
            `${Number(value).toFixed(2)} L`,
            "Consumo",
          ]}
        />
        <Bar
          dataKey="litros"
          fill="#2563eb"
          radius={[6, 6, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default HourlyChart;
