![fluxo de trabalho de exemplo](https://github.com/pauloribeiro93/Playwright-e2e-tests/actions/workflows/dramaturgo.yml/badge.svg)

# 🎭 Playwright 




## Motivação 
  Estudar 🥳👨‍💻

### :computer: Preparando o Ambiente

#### Windows:Win10
```
Node.js (https://nodejs.org/en/)
```

### :package: Packages 

- Playwright: "^1.16.3"
- Faker: "^5.5.3"

##### Clone o projeto do GitHub em um diretório:

```
cd "seu diretorio"
git clone https://github.com/pauloribeiro93/Playwright-e2e-tests.git

```

##### :runner: Execute o seguinte comando para instalar as dependências

```
npm i
```
````
npx playwright install
````

## ⚙️ Executando os testes

##### Utilize o seguinte comando para executar o cenário de teste: 

``````
npm run test (Todos os navegadores em headless)
npm run headed-firefox (Somete um navegador(FireFox "com cabeça")
``````

## Para gerar o relatorio use os comandos abaixo: 

``````
npm run make-report
``````

## Para visualizar o relatorio use o comando abaixo: 

``````
npm run report-local
``````
Obs: Após o comando para visualizar o report, vai ser gerado um link para que possa ser acessado localmente. 
