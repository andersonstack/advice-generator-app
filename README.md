# 🎲 Advice Generator App

Aplicativo web simples que gera conselhos aleatórios a partir da API **Advice Slip**, com design responsivo e interação por clique no ícone de dado.

## 🚀 Funcionalidades

- Exibe conselhos aleatórios recuperados da API externa **Advice Slip API**.
- Interface responsiva e visual adaptável a diferentes dispositivos (desktop e mobile).
- Chamadas à API realizadas com **fetch** e renderização dinâmica no DOM.
- Interação simples: clique no ícone de dado para gerar um novo conselho.

## 🛠️ Tecnologias utilizadas

- **HTML5** semântico  
- **CSS3**, com flexbox, grid e custom properties  
- **JavaScript (vanilla)**, usando `fetch`, async/await e DOM manipulation  
- **TypeScript**, usado para o desenvolvimento

## 🌀 Fluxo de desenvolvimento

1. Estrutura HTML base com elemento para conteúdo e botão de ação (dado).  
2. Estilização responsiva com design mobile‑first, hover state e adaptação a telas maiores.  
3. Script implementado para chamar a API e atualizar o conselho exibido com base na resposta JSON. Cada clique no dado dispara uma nova requisição.  

## 📁 Estrutura do projeto

```
/
├── assets
├── js
└── src
```

## 🧪 Como usar

Clone o projeto e abra `index.html` no navegador. O app carrega automaticamente um conselho e permite gerar novos ao clicar no ícone de dado.

## ⚙️ Para desenvolvimento

É preciso ter o `npm` e o `TypeScript` instalados globalmente:

```bash
npm install -g typescript
tsc --watch
```

Depois, abra o `index.html` no navegador.
