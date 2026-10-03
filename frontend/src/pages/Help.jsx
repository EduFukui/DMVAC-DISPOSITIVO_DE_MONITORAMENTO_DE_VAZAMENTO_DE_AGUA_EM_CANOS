import { FaQuestionCircle } from "react-icons/fa";
import NavBar from "../components/NavBar";

function Help() {
  const perguntas = [
    {
      pergunta: "O gráfico não mostra dados. O que verificar?",
      resposta:
        "Verifique se o backend Node está executando, se a porta COM6 está correta e se nenhum outro programa está utilizando a porta serial.",
    },
    {
      pergunta: "Os botões não acionam a bomba ou a válvula.",
      resposta:
        "Verifique se o backend está ativo e se o ESP32 está conectado. Os comandos utilizados são LIGAR, DESLIGAR, LIGAR_VALVULA e DESLIGAR_VALVULA.",
    },
    {
      pergunta: "Como o alerta de vazamento funciona?",
      resposta:
        "O backend acompanha a vazão. Se ela permanecer acima de 0,3 L/min por pelo menos 60 segundos, o sistema apresenta um possível vazamento.",
    },
    {
      pergunta: "Por que aparece 'Backend desconectado'?",
      resposta:
        "O frontend não conseguiu acessar http://localhost:3000/dados. Inicie o servidor Node e confira a porta serial.",
    },
  ];

  return (
    <>
      <NavBar />

      <main className="ml-16 min-h-screen bg-slate-100 px-4 pb-10 pt-24 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-4">
            <FaQuestionCircle className="text-4xl text-indigo-600" />
            <div>
              <h1 className="text-3xl font-extrabold text-slate-800">
                Ajuda
              </h1>
              <p className="text-slate-500">
                Perguntas frequentes sobre o DMVAC.
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {perguntas.map((item) => (
              <section
                key={item.pergunta}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
              >
                <h2 className="font-bold text-slate-800">
                  {item.pergunta}
                </h2>
                <p className="mt-2 leading-6 text-slate-600">
                  {item.resposta}
                </p>
              </section>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Help;
