import { FaMicrochip, FaTint, FaWifi, FaWater } from "react-icons/fa";
import NavBar from "../components/NavBar";

function About() {
  return (
    <>
      <NavBar />

      <main className="ml-16 min-h-screen bg-slate-100 px-4 pb-10 pt-24 md:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl bg-gradient-to-br from-indigo-700 to-blue-600 p-8 text-white shadow-xl md:p-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-white/15 text-4xl">
                <FaWater />
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-indigo-100">
                  Sobre o projeto
                </p>
                <h1 className="mt-2 text-4xl font-extrabold">
                  DMVAC
                </h1>
                <p className="mt-2 text-lg text-indigo-100">
                  Dispositivo de Monitoramento de Vazamento de Água em Canos
                </p>
              </div>
            </div>
          </div>

          <section className="mt-6 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-extrabold text-slate-800">
              O que é o DMVAC?
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              O DMVAC é um projeto de monitoramento de água desenvolvido para
              identificar possíveis vazamentos em instalações hidráulicas.
              O sistema utiliza sensores de fluxo para acompanhar a passagem de
              água e um microcontrolador ESP32 para enviar os dados ao sistema
              de monitoramento.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Quando o sistema identifica fluxo contínuo acima de um limite
              durante determinado período, uma situação de possível vazamento
              pode ser sinalizada. A válvula também pode ser controlada
              remotamente para interromper o fornecimento de água de uma área.
            </p>
          </section>

          <section className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <FaMicrochip className="text-3xl text-indigo-600" />
              <h2 className="mt-4 text-xl font-bold text-slate-800">
                Hardware
              </h2>
              <p className="mt-2 leading-6 text-slate-600">
                O protótipo utiliza ESP32, sensores de fluxo YF-S201, relés,
                bomba e válvula solenoide para realizar o controle e
                monitoramento físico.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <FaWifi className="text-3xl text-indigo-600" />
              <h2 className="mt-4 text-xl font-bold text-slate-800">
                Software
              </h2>
              <p className="mt-2 leading-6 text-slate-600">
                O ESP32 envia os dados para um backend Node.js/Express, que
                disponibiliza uma API para o frontend React apresentar os
                dados e enviar comandos aos atuadores.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <FaTint className="text-3xl text-indigo-600" />
              <h2 className="mt-4 text-xl font-bold text-slate-800">
                Monitoramento
              </h2>
              <p className="mt-2 leading-6 text-slate-600">
                O dashboard apresenta vazão em tempo real, consumo acumulado,
                consumo por hora, estado da bomba, estado da válvula e alertas.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <FaWater className="text-3xl text-indigo-600" />
              <h2 className="mt-4 text-xl font-bold text-slate-800">
                Objetivo
              </h2>
              <p className="mt-2 leading-6 text-slate-600">
                Auxiliar na identificação rápida de perdas de água e permitir
                uma resposta de controle, contribuindo para o uso mais
                consciente da água em residências, escolas e instituições.
              </p>
            </div>
          </section>

          <section className="mt-6 rounded-2xl bg-indigo-50 p-7 ring-1 ring-indigo-100">
            <h2 className="text-2xl font-extrabold text-indigo-900">
              Como funciona
            </h2>

            <div className="mt-5 grid gap-4 md:grid-cols-4">
              {[
                ["01", "Sensor", "O sensor mede a passagem de água."],
                ["02", "ESP32", "O microcontrolador processa a leitura."],
                ["03", "Backend", "O Node/Express recebe e organiza os dados."],
                ["04", "Dashboard", "O usuário acompanha e controla o sistema."],
              ].map(([numero, titulo, texto]) => (
                <div key={numero} className="rounded-xl bg-white p-5">
                  <span className="font-extrabold text-indigo-600">{numero}</span>
                  <h3 className="mt-2 font-bold text-slate-800">{titulo}</h3>
                  <p className="mt-1 text-sm leading-5 text-slate-500">
                    {texto}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default About;
