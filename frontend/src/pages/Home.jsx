import { FaExclamationTriangle, FaTachometerAlt, FaTint } from "react-icons/fa";

import NavBar from "../components/NavBar";
import WaterChart from "../components/WaterChart";
import HourlyChart from "../components/HourlyChart";
import MetricCard from "../components/MetricCard";
import StatusBadge from "../components/StatusBadge";
import ControlPanel from "../components/ControlPanel";
import { useDmvac } from "../context/DmvacContext";

function Home() {
  const { dados, conectado } = useDmvac();

  return (
    <>
      <NavBar />

      <main className="ml-16 min-h-screen bg-slate-100 px-4 pb-10 pt-24 md:px-6">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-center">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-800">
                Dashboard
              </h1>
              <p className="mt-1 text-slate-500">
                Visão geral do sistema de monitoramento.
              </p>
            </div>

            <div
              className={`rounded-full px-4 py-2 text-sm font-bold ${conectado
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
                }`}
            >
              {conectado ? "● Sistema conectado" : "● Backend desconectado"}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <MetricCard
              title="Consumo acumulado"
              value={dados.litros.toFixed(2)}
              unit="L"
              description="Valor recebido do ESP32"
              icon={<FaTint />}
            />

            <MetricCard
              title="Vazão atual"
              value={dados.vazao.toFixed(2)}
              unit="L/min"
              description="Leitura atual do YF-S201"
              icon={<FaTachometerAlt />}
            />

            <div
              className={`rounded-2xl p-5 shadow-sm ring-1 ${dados.alerta
                ? "bg-red-50 ring-red-200"
                : "bg-white ring-slate-200"
                }`}
            >
              <p className="text-sm font-semibold text-slate-500">
                Monitoramento
              </p>
              <div className="mt-3 flex items-center gap-3">
                <FaExclamationTriangle
                  className={dados.alerta ? "text-red-600" : "text-green-600"}
                />
                <p
                  className={`text-xl font-bold ${dados.alerta ? "text-red-600" : "text-green-600"
                    }`}
                >
                  {dados.alerta ? "Possível vazamento" : "Sem vazamento"}
                </p>
              </div>
              <p className="mt-2 text-xs text-slate-500">
                O alerta considera fluxo contínuo acima do limite configurado.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-3">
            <section className="xl:col-span-2 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-slate-800">
                    Vazão em tempo real
                  </h2>
                  <p className="text-sm text-slate-500">
                    Últimos 50 registros recebidos.
                  </p>
                </div>
                <span className="text-sm text-slate-500">
                  {new Date().toLocaleDateString("pt-BR")}
                </span>
              </div>

              <div className="h-107.5">
                <WaterChart />
              </div>
            </section>

            <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-xl font-bold text-slate-800">
                Status do sistema
              </h2>

              <div className="mt-5 space-y-4">
                <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
                  <span className="font-semibold text-slate-700">Bomba</span>
                  <StatusBadge
                    ativo={dados.bomba}
                    ativoTexto="Ligada"
                    inativoTexto="Desligada"
                  />
                </div>

                <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
                  <span className="font-semibold text-slate-700">Válvula</span>
                  <StatusBadge
                    ativo={dados.valvula}
                    ativoTexto="Aberta"
                    inativoTexto="Fechada"
                  />
                </div>

                <div className="rounded-xl bg-indigo-50 p-4">
                  <p className="text-sm font-semibold text-indigo-900">
                    Vazão
                  </p>
                  <p className="mt-1 text-2xl font-extrabold text-indigo-700">
                    {dados.vazao.toFixed(2)} L/min
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-3">
            <section className=" xl:col-span-2 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <h2 className=" text-xl font-bold text-slate-800">
                Consumo por hora
              </h2>
              <p className="mb-5 text-sm text-slate-500">
                Dados acumulados enviados pelo backend.
              </p>
              <div className="h-95">
                <HourlyChart consumoHora={dados.consumoHora} />
              </div>
            </section>


            <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <h2 className="mb-4 text-xl font-bold text-slate-800">
                Controles
              </h2>
              <ControlPanel />
            </section>

          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
