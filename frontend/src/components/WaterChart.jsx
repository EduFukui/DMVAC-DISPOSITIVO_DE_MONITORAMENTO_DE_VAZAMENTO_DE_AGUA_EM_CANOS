import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function WaterChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let ativo = true;

    async function buscarDados() {
      try {
        const resposta = await fetch("http://localhost:3000/dados");
        if (!resposta.ok) throw new Error("Backend indisponível");

        const json = await resposta.json();

        if (!ativo) return;

        const horario = new Date().toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });

        const ponto = {
          name: horario,
          fluxo: Number(json.vazao) || 0,
        };

        setData((anterior) => [...anterior, ponto].slice(-50));
      } catch (erro) {
        console.error("Erro no gráfico de vazão:", erro);
      }
    }

    buscarDados();
    const intervalo = setInterval(buscarDados, 1000);

    return () => {
      ativo = false;
      clearInterval(intervalo);
    };
  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" minTickGap={30} />
        <YAxis />
        <Tooltip
          formatter={(value) => [
            `${Number(value).toFixed(2)} L/min`,
            "Vazão",
          ]}
        />
        <Line
          type="monotone"
          dataKey="fluxo"
          stroke="#2563eb"
          strokeWidth={3}
          dot={false}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default WaterChart;
