#### Automatizando testes em aplicação web
#### Criando cenários de testes utilizando
CodeceptJs
Playwright
com javascript
Pagina/site objeto de teste: 

https://automationpratice.com.br/
comandos: roda somente os teste/cenário da Tag '@Sucesso'

!!! IMPORTANTE: COMANDO NO TERMINAL: 
~~~CMD
npx codeceptjs run --grep '@Sucesso'.
~~~
roda somente os teste/cenário da Tag '@Sucesso'
Utilizar para rodar apenas um cenario especifico com indicação da tag.
comandos: npx codeceptjs run --steps

!!! IMPORTANTE: NO ARQUIVO: codecept.conf.js
~~~javascript
/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://localhost',
      show: false
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'projeto_QAZ_1'
}
~~~
Aplicação: Login

Cenário 1: Login com sucesso

Dado que o usuário esteja na tela inicial do sistema
E acesse a tela de login
Quando informar os dados para logar
Então deve ser apresentado a tela de usuário logado

Cenário 2: Tentando Logar digitando apenas o e-mail

Dado que o usuário esteja na tela inicial do sistema
E acesse a tela de login
Quando o usuário digitar apenas o E-mail para logar
Então deve ser apresentada a mensagem "Senha inválida."

Cenário 3: Tentando logar sem digitar e-mail e senha

Dado que o usuário esteja na tela inicial do sistema
E acesse a tela de login
Quando clicar em "Login" sem digitar usuário e senha
Então deve ser apresentada a mensagem "E-mail invalido"

Cenário 4: Tentando Logar digitando apenas a senha

Dado que o usuário esteja na tela inicial do sistema
E acesse a tela de login
Quando o usuário digitar apenas a Senha para logar
Então deve ser apresentada a mensagem "E-mail inválido."
