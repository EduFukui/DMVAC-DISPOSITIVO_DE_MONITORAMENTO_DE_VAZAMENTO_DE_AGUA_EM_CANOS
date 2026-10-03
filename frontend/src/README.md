# DMVAC - src completo

Este pacote substitui a pasta `src` atual do frontend.

## Telas

- `/` - Login
- `/home` - Dashboard
- `/monitoramento` - Monitoramento e controles
- `/relatorios` - Relatórios e gráfico por hora
- `/sobre` - Resumo do projeto DMVAC
- `/configuracoes` - Estado/configurações
- `/ajuda` - Perguntas frequentes

## Dependências usadas

- react
- react-dom
- react-router-dom
- react-icons
- recharts
- tailwindcss

## Backend esperado

O frontend espera o backend em:

`http://localhost:3000`

Endpoints:

- GET `/dados`
- POST `/bomba/ligar`
- POST `/bomba/desligar`
- POST `/valvula/abrir`
- POST `/valvula/fechar`

O GET `/dados` deve retornar pelo menos:

```json
{
  "vazao": 0,
  "litros": 0,
  "bomba": false,
  "valvula": false,
  "alerta": false,
  "tempoVazamento": 0,
  "consumoHora": {}
}
```

## Instalação

Se ainda não tiver as dependências:

```bash
npm install react-router-dom react-icons recharts
```

Depois:

```bash
npm run dev
```

O login é apenas de demonstração neste momento: qualquer preenchimento permite entrar no dashboard.
