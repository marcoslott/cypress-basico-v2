# cypress-basico-v2

Projeto desenvolvido no curso básico de Cypress da Escola TAT.

## Pré-requisitos

Antes de começar, garanta que os seguintes sistemas estejam instalados em seu computador.

- [git](https://git-scm.com/) (estou usando a versão `2.37.2`)
- [Node.js](https://nodejs.org/en/) (estou usando a versão `v16.16.0`)
- npm (estou usando a versão `8.18.0`)
- [Google Chrome](https://www.google.com/intl/pt_br/chrome/) (estou usando a versão `98.0.4758.80 (Official Build) (x86_64)`)
- [Visual Studio Code](https://code.visualstudio.com/) (estou usando a versão `1.70.2`) ou alguma outra IDE de sua preferência

## Instalação e inicialização do [Cypress](https://cypress.io) 🌲

1. Na raiz do projeto, execute o comando `npm install cypress@10.4.0 --save-dev` (ou `npm i cypress@10.4.0 -D` para a versão curta)
2. Logo após, execute o comando `npx cypress open` para abrir o Cypress pela primeira vez
3. Por fim, com o _Test Runner_ aberto, delete os exemplos criados automaticamente, crie um arquivo chamado `CAC-TAT.spec.js` e feche o _Test Runner_.

## Configurações extra

1. Atualize o arquivo `cypress.config` conforme abaixo.

```js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1000,
  viewportHeight: 660,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
```
> 👨‍🏫 Com isso, estamos "dizendo ao Cypress" que:
>
> - Iremos sobrescrever a altura e largura do [_viewport_ padrão do Cypress](https://docs.cypress.io/api/commands/viewport#Defaults)

## Testes

Executar o comando `npm test` (ou `npm t` para a versão curta) para rodar os testes no modo headless.

Ou, executar o comando `npm run cy:open` para abrir o Cypress no modo interativo.

## Apoie este projeto

Se você deseja apoiar este projeto, deixe uma ⭐.