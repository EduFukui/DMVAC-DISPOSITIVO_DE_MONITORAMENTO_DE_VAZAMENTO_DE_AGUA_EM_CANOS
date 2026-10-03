const express = require("express");
const cors = require("cors");

const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");

const app = express();

app.use(cors());
app.use(express.json());

// Dados recebidos do ESP32
let dados = {
    vazao: 0,
    litros: 0,
    status: "Desligada",
    bomba: false,
    valvula: false,
};

let alerta = false;
let inicioFluxo = null;
let consumoHora = {};

// Conexão com o ESP32
const porta = new SerialPort({
    path: "COM6",
    baudRate: 115200,
});

// Leitura dos dados da Serial
const parser = porta.pipe(
    new ReadlineParser({
        delimiter: "\n",
    }),
);

parser.on("data", (linha) => {
    try {
        // Converte o JSON recebido
        const novosDados = JSON.parse(linha);

        dados = {
            ...dados,
            ...novosDados,
        };

        const agora = new Date();

        // Detecta possível vazamento
        if (dados.vazao > 0.3) {
            if (inicioFluxo === null) {
                inicioFluxo = Date.now();
            }

            // Alerta após 60 segundos
            if (Date.now() - inicioFluxo >= 60000) {
                alerta = true;
            }
        } else {
            inicioFluxo = null;
            alerta = false;
        }

        // Salva o consumo por hora
        const hora = agora.getHours().toString().padStart(2, "0") + "h";

        if (!consumoHora[hora]) {
            consumoHora[hora] = 0;
        }

        consumoHora[hora] = dados.litros;
    } catch (erro) {}
});

// Envia os dados para o dashboard
app.get("/dados", (req, res) => {
    let tempoVazamento = 0;

    if (inicioFluxo !== null) {
        tempoVazamento = Math.floor((Date.now() - inicioFluxo) / 1000);
    }

    res.json({
        ...dados,
        alerta,
        tempoVazamento,
        consumoHora,
    });
});

// Liga a bomba
app.post("/bomba/ligar", (req, res) => {
    porta.write("LIGAR\n");

    res.json({
        sucesso: true,
        mensagem: "Bomba ligada",
    });
});

// Desliga a bomba
app.post("/bomba/desligar", (req, res) => {
    porta.write("DESLIGAR\n");

    res.json({
        sucesso: true,
        mensagem: "Bomba desligada",
    });
});

// Abre a válvula
app.post("/valvula/abrir", (req, res) => {
    porta.write("LIGAR_VALVULA\n");

    res.json({
        sucesso: true,
        mensagem: "Válvula aberta",
    });
});

// Fecha a válvula
app.post("/valvula/fechar", (req, res) => {
    porta.write("DESLIGAR_VALVULA\n");

    res.json({
        sucesso: true,
        mensagem: "Válvula fechada",
    });
});

// Inicia o servidor
app.listen(3000, () => {
    console.log("Servidor iniciado");
});