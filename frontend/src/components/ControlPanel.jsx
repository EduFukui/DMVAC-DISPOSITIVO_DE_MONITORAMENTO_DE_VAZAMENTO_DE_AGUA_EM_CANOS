import { useState } from "react";
import { useDmvac } from "../context/DmvacContext";
import StatusBadge from "./StatusBadge";

function ControlPanel() {
  const {
    dados,
    ligarBomba,
    desligarBomba,
    abrirValvula,
    fecharValvula,
  } = useDmvac();

  const [carregando, setCarregando] = useState("");

  async function executar(nome, funcao) {
    try {
      setCarregando(nome);
      await funcao();
    } catch (erro) {
      console.error(erro);
      window.alert("Não foi possível enviar o comando. Verifique o backend.");
    } finally {
      setCarregando("");
    }
  }

  return (
    <div className="space-y-5">
      <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-800">Bomba</h3>
            <p className="text-sm text-slate-500">
              Controle manual da bomba de água.
            </p>
          </div>
          <StatusBadge
            ativo={dados.bomba}
            ativoTexto="Ligada"
            inativoTexto="Desligada"
          />
        </div>

        <div className="grid grid-cols-1 gap-3">
          <button
            disabled={carregando !== ""}
            onClick={() => executar("bomba-ligar", ligarBomba)}
            className="rounded-xl bg-green-500 px-4 py-3 font-bold text-white transition hover:bg-green-600"
          >
            {carregando === "bomba-ligar" ? "Enviando..." : "Ligar Bomba"}
          </button>

          <button
            disabled={carregando !== ""}
            onClick={() => executar("bomba-desligar", desligarBomba)}
            className="rounded-xl bg-red-500 px-4 py-3 font-bold text-white transition hover:bg-red-600"
          >
            {carregando === "bomba-desligar" ? "Enviando..." : "Desligar Bomba"}
          </button>
        </div>
      </div>

      <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-800">Válvula</h3>
            <p className="text-sm text-slate-500">
              Controle da válvula normalmente fechada.
            </p>
          </div>
          <StatusBadge
            ativo={dados.valvula}
            ativoTexto="Aberta"
            inativoTexto="Fechada"
          />
        </div>

        <div className="grid grid-cols-1 gap-3">
          <button
            disabled={carregando !== ""}
            onClick={() => executar("valvula-abrir", abrirValvula)}
            className="rounded-xl bg-green-500 px-4 py-3 font-bold text-white transition hover:bg-green-600"
          >
            {carregando === "valvula-abrir" ? "Enviando..." : "Abrir Válvula"}
          </button>

          <button
            disabled={carregando !== ""}
            onClick={() => executar("valvula-fechar", fecharValvula)}
            className="rounded-xl bg-red-500 px-4 py-3 font-bold text-white transition hover:bg-red-600"
          >
            {carregando === "valvula-fechar" ? "Enviando..." : "Fechar Válvula"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ControlPanel;
