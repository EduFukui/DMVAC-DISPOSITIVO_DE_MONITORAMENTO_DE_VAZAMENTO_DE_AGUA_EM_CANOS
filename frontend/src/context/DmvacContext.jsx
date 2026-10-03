import { createContext, useContext, useEffect, useMemo, useState } from "react";

const DmvacContext = createContext(null);

const initialData = {
  vazao: 0,
  litros: 0,
  status: "Desligada",
  alerta: false,
  bomba: false,
  valvula: false,
  tempoVazamento: 0,
  consumoHora: {},
};

export function DmvacProvider({ children }) {
  const [dados, setDados] = useState(initialData);
  const [conectado, setConectado] = useState(false);
  const [ultimaAtualizacao, setUltimaAtualizacao] = useState(null);

  async function atualizarDados() {
    try {
      const resposta = await fetch("http://localhost:3000/dados");

      if (!resposta.ok) {
        throw new Error("Backend indisponível");
      }

      const json = await resposta.json();

      setDados({
        vazao: Number(json.vazao) || 0,
        litros: Number(json.litros) || 0,
        status: json.status || "Desligada",
        alerta: Boolean(json.alerta),
        bomba: Boolean(json.bomba),
        valvula: Boolean(json.valvula),
        tempoVazamento: Number(json.tempoVazamento) || 0,
        consumoHora: json.consumoHora || {},
      });

      setConectado(true);
      setUltimaAtualizacao(new Date());
    } catch {
      setConectado(false);
    }
  }

  useEffect(() => {
    atualizarDados();

    const intervalo = setInterval(atualizarDados, 1000);

    return () => clearInterval(intervalo);
  }, []);

  async function enviarComando(endpoint) {
    const resposta = await fetch(`http://localhost:3000${endpoint}`, {
      method: "POST",
    });

    if (!resposta.ok) {
      throw new Error("Não foi possível enviar o comando.");
    }

    await atualizarDados();
    return resposta.json();
  }

  const abrirValvula = () => enviarComando("/valvula/abrir");
  const fecharValvula = () => enviarComando("/valvula/fechar");
  const ligarBomba = () => enviarComando("/bomba/ligar");
  const desligarBomba = () => enviarComando("/bomba/desligar");

  const value = useMemo(
    () => ({
      dados,
      conectado,
      ultimaAtualizacao,
      atualizarDados,
      abrirValvula,
      fecharValvula,
      ligarBomba,
      desligarBomba,
    }),
    [dados, conectado, ultimaAtualizacao]
  );

  return <DmvacContext.Provider value={value}>{children}</DmvacContext.Provider>;
}

export function useDmvac() {
  const context = useContext(DmvacContext);

  if (!context) {
    throw new Error("useDmvac deve ser usado dentro de DmvacProvider.");
  }

  return context;
}
