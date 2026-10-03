import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

import NavBar from "../components/NavBar";
import StatusBadge from "../components/StatusBadge";
import ControlPanel from "../components/ControlPanel";
import { useDmvac } from "../context/DmvacContext";

function formatarTempo(segundos) {
  const horas = Math.floor(segundos / 3600);
  const minutos = Math.floor((segundos % 3600) / 60);
  const seg = segundos % 60;

  if (horas > 0) return `${horas}h ${minutos}min`;
  if (minutos > 0) return `${minutos}min ${seg}s`;
  return `${seg}s`;
}

function Monitoring() {
  const { dados, conectado } = useDmvac();

  return (
    <>
      <NavBar />

      <main className="ml-16 min-h-screen bg-slate-100 px-4 pb-10 pt-24 md:px-6">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-extrabold text-slate-800">
            Monitoramento
          </h1>
          <p className="mt-1 text-slate-500">
            Acompanhe o estado do sistema e os sinais de possível vazamento.
          </p>

          <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            {dados.alerta ? (
              <div className="flex flex-col gap-4 rounded-2xl bg-red-50 p-5 md:flex-row md:items-center">
                <FaExclamationTriangle className="text-4xl text-red-600" />
                <div>
                  <h2 className="text-xl font-extrabold text-red-700">
                    Possível vazamento detectado
                  </h2>
                  <p className="mt-1 text-sm text-red-700">
                    Foi detectado fluxo contínuo acima de 0,3 L/min durante pelo
                    menos 60 segundos.
                  </p>
                  <p className="mt-2 text-sm font-bold text-red-700">
                    Vazão: {dados.vazao.toFixed(2)} L/min · Tempo:{" "}
                    {formatarTempo(dados.tempoVazamento)}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-4 rounded-2xl bg-green-50 p-5">
                <FaCheckCircle className="text-3xl text-green-600" />
                <div>
                  <h2 className="text-xl font-extrabold text-green-700">
                    Sistema sem alerta
                  </h2>
                  <p className="text-sm text-green-700">
                    Nenhum fluxo contínuo acima do limite foi identificado.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm text-slate-500">Conexão</p>
              <div className="mt-3">
                <StatusBadge
                  ativo={conectado}
                  ativoTexto="Online"
                  inativoTexto="Offline"
                />
              </div>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm text-slate-500">Bomba</p>
              <div className="mt-3">
                <StatusBadge
                  ativo={dados.bomba}
                  ativoTexto="Ligada"
                  inativoTexto="Desligada"
                />
              </div>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm text-slate-500">Válvula</p>
              <div className="mt-3">
                <StatusBadge
                  ativo={dados.valvula}
                  ativoTexto="Aberta"
                  inativoTexto="Fechada"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-xl font-bold text-slate-800">
                Leitura atual
              </h2>

              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Vazão</p>
                  <p className="mt-1 text-2xl font-bold text-indigo-700">
                    {dados.vazao.toFixed(2)} L/min
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Consumo</p>
                  <p className="mt-1 text-2xl font-bold text-indigo-700">
                    {dados.litros.toFixed(2)} L
                  </p>
                </div>
              </div>
            </div>

            <ControlPanel />
          </div>
        </div>
      </main>
    </>
  );
}

export default Monitoring;
