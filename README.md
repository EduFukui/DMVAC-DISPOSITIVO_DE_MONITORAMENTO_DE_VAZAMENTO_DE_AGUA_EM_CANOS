# DMVAC — Dispositivo de Monitoramento de Vazamento de Água em Canos

O **DMVAC** é um dispositivo desenvolvido para monitorar o fluxo de água em tubulações e auxiliar na identificação de possíveis vazamentos.

O sistema utiliza sensores de fluxo conectados a um **ESP32**, que realiza a leitura da vazão da água. Os dados são enviados para um servidor, permitindo o acompanhamento das informações por meio de uma plataforma online.

Quando é identificada uma condição considerada anormal, o sistema pode acionar uma **válvula solenoide**, auxiliando na interrupção do fluxo de água na área afetada.

## 🎯 Objetivos

* Monitorar o fluxo de água em tubulações;
* Identificar possíveis vazamentos;
* Reduzir o desperdício de água;
* Auxiliar na prevenção de danos causados por vazamentos;
* Permitir o acompanhamento das informações em uma plataforma online;
* Possibilitar o controle da bomba e da válvula.

## ⚙️ Funcionamento

O sensor de fluxo realiza a medição da água que passa pela tubulação e envia os dados para o **ESP32**.

O ESP32 processa essas informações e envia os dados para o servidor através da comunicação serial. O servidor analisa os valores recebidos e disponibiliza as informações para a plataforma de monitoramento.

A plataforma apresenta informações como:

* Vazão atual;
* Consumo de água;
* Estado da bomba;
* Estado da válvula;
* Possíveis alertas de vazamento;
* Consumo por hora.

## 🛠️ Tecnologias utilizadas

### Hardware

* **ESP32**
* **Sensor de fluxo YF-S201**
* **Bomba de água RS-385 12V**
* **Válvula solenoide 12V**
* **Módulos relé**
* Protoboard e componentes eletrônicos

### Software

* **C/C++** — programação do ESP32
* **PlatformIO** — desenvolvimento e envio do código para o ESP32
* **Node.js** — servidor
* **Express.js** — API e comunicação com o sistema
* **SerialPort** — comunicação entre o ESP32 e o servidor
* **React** — desenvolvimento da plataforma
* **Vite** — ambiente de desenvolvimento do frontend
* **Tailwind CSS** — estilização da interface
* **Recharts** — criação dos gráficos
* **Git/GitHub** — versionamento do projeto

## 📊 Plataforma de Monitoramento

A plataforma permite visualizar os dados coletados pelo ESP32 em tempo real, apresentando informações sobre o consumo e a vazão da água.

Também é possível controlar a bomba e a válvula através da interface.

## 🧪 Testes

Foram realizados testes simulando diferentes condições de funcionamento normal e situações de vazamento.

Os resultados foram utilizados para analisar a capacidade do sistema de identificar alterações na vazão e acionar o sistema de controle.

## 🚀 Como executar

### ESP32

1. Abra a pasta do projeto no **PlatformIO**.
2. Conecte o ESP32 ao computador.
3. Configure a porta serial utilizada.
4. Faça o upload do código para o ESP32.

### Backend

Entre na pasta do backend e instale as dependências:

```bash
npm install
```

Execute o servidor:

```bash
node server.js
```

O servidor será iniciado na porta:

```text
http://localhost:3000
```

### Frontend

Entre na pasta do frontend e instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

## 📁 Estrutura do projeto

```text
DMVAC/
├── backend/       # Servidor e API
├── frontend/      # Plataforma de monitoramento
├── esp32/         # Código do ESP32
└── README.md
```

## 👥 Equipe

Projeto desenvolvido como parte de um trabalho acadêmico para desenvolvimento e aplicação de um sistema de monitoramento de vazamentos de água.

---

**DMVAC — Dispositivo de Monitoramento de Vazamento de Água em Canos**
