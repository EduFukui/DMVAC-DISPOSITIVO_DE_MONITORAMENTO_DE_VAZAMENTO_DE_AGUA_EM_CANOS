import NavBar from "../components/NavBar";
import { useDmvac } from "../context/DmvacContext";

function Settings() {
  const { conectado, dados, atualizarDados } = useDmvac();

  return (
    <>
      <NavBar />

      <main className="ml-16 min-h-screen bg-slate-100 px-4 pb-10 pt-24 md:px-6">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-extrabold text-slate-800">
            Configurações
          </h1>
          <p className="mt-1 text-slate-500">
            Informações e parâmetros atuais do sistema.
          </p>

          <section className="mt-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-bold text-slate-800">
              Comunicação
            </h2>

            <div className="mt-5 space-y-4">
              <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
                <span className="font-semibold text-slate-700">
                  Backend
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-sm font-bold ${
                    conectado
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {conectado ? "Conectado" : "Desconectado"}
                </span>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="font-semibold text-slate-700">
                  Endpoint de dados
                </p>
                <code className="mt-2 block rounded-lg bg-slate-900 p-3 text-sm text-green-300">
                  http://localhost:3000/dados
                </code>
              </div>
            </div>
          </section>

          <section className="mt-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-bold text-slate-800">
              Limite de alerta
            </h2>
            <p className="mt-2 text-slate-500">
              O backend atual considera possível vazamento quando a vazão
              permanece acima de 0,3 L/min durante pelo menos 60 segundos.
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-indigo-50 p-4">
                <p className="text-sm text-indigo-700">Vazão limite</p>
                <p className="mt-1 text-2xl font-extrabold text-indigo-800">
                  0,3 L/min
                </p>
              </div>

              <div className="rounded-xl bg-indigo-50 p-4">
                <p className="text-sm text-indigo-700">Tempo limite</p>
                <p className="mt-1 text-2xl font-extrabold text-indigo-800">
                  60 s
                </p>
              </div>
            </div>
          </section>

          <section className="mt-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-bold text-slate-800">
              Estado atual
            </h2>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Vazão</p>
                <p className="mt-1 font-bold text-slate-800">
                  {dados.vazao.toFixed(2)} L/min
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Consumo</p>
                <p className="mt-1 font-bold text-slate-800">
                  {dados.litros.toFixed(2)} L
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={atualizarDados}
              className="mt-5 rounded-xl bg-indigo-700 px-5 py-3 font-bold text-white hover:bg-indigo-800"
            >
              Atualizar agora
            </button>
          </section>
        </div>
      </main>
    </>
  );
}

export default Settings;
