import NavBar from "../components/NavBar";
import HourlyChart from "../components/HourlyChart";
import { useDmvac } from "../context/DmvacContext";

function Reports() {
  const { dados } = useDmvac();

  const horas = Object.entries(dados.consumoHora || {});
  const maiorConsumo =
    horas.length > 0
      ? horas.reduce((maior, atual) =>
          Number(atual[1]) > Number(maior[1]) ? atual : maior
        )
      : null;

  return (
    <>
      <NavBar />

      <main className="ml-16 min-h-screen bg-slate-100 px-4 pb-10 pt-24 md:px-6">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-extrabold text-slate-800">
            Relatórios
          </h1>
          <p className="mt-1 text-slate-500">
            Resumo dos dados registrados durante a execução do sistema.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm text-slate-500">Consumo acumulado</p>
              <p className="mt-2 text-3xl font-extrabold text-indigo-700">
                {dados.litros.toFixed(2)} L
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm text-slate-500">Horas registradas</p>
              <p className="mt-2 text-3xl font-extrabold text-indigo-700">
                {horas.length}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm text-slate-500">Maior registro</p>
              <p className="mt-2 text-2xl font-extrabold text-indigo-700">
                {maiorConsumo
                  ? `${maiorConsumo[0]} · ${Number(maiorConsumo[1]).toFixed(2)} L`
                  : "Sem dados"}
              </p>
            </div>
          </div>

          <section className="mt-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-bold text-slate-800">
              Histórico por hora
            </h2>

            <div className="mt-5 h-[450px]">
              <HourlyChart consumoHora={dados.consumoHora} />
            </div>
          </section>

          <section className="mt-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-bold text-slate-800">
              Registros
            </h2>

            {horas.length === 0 ? (
              <p className="mt-4 text-slate-500">
                Ainda não existem registros por hora.
              </p>
            ) : (
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[400px] text-left">
                  <thead>
                    <tr className="border-b border-slate-200 text-sm text-slate-500">
                      <th className="px-4 py-3">Hora</th>
                      <th className="px-4 py-3">Consumo acumulado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {horas.map(([hora, litros]) => (
                      <tr
                        key={hora}
                        className="border-b border-slate-100"
                      >
                        <td className="px-4 py-3 font-semibold text-slate-700">
                          {hora}
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          {Number(litros).toFixed(2)} L
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  );
}

export default Reports;
