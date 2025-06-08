Feature("login");

Scenario("1.Login com sucesso", ({ I }) => {
  //Eu estou na página...(site)
  I.amOnPage("https://automationpratice.com.br/");
  I.click("Login");
  I.waitForText("Login", 10);
  I.click("#user");
  I.fillField("#user", "aldofido@gmail.com");
  I.fillField("#password", "12345678");
  I.click("#btnLogin");
  I.waitForText("Login realizado", 3);
}).tag("@Sucesso");
Scenario("2.Tentando Logar digitando apenas o e-mail", ({ I }) => {
  //Eu estou na página...(site)
  I.amOnPage("https://automationpratice.com.br/");
  I.click("Login");
  I.waitForText("Login", 10);
  I.click("#user");
  I.fillField("#user", "aldofido@gmail.com");
  I.fillField("#password", "");
  I.click("#btnLogin");
  I.waitForText("Senha inválida.", 3);
}).tag("@So e-mail");
Scenario("3.Tentando logar sem digitar e-mail e senha", ({ I }) => {
  //Eu estou na página...(site)
  I.amOnPage("https://automationpratice.com.br/");
  I.click("Login");
  I.waitForText("Login", 10);
  I.click("#user");
  I.fillField("#user", "");
  I.fillField("#password", "");
  I.click("#btnLogin");
  I.waitForText("E-mail inválido.", 3);
}).tag("@Sem e-mail e senha");
Scenario("4.Tentando Logar digitando apenas a senha", ({ I }) => {
  //Eu estou na página...(site)
  I.amOnPage("https://automationpratice.com.br/");
  I.click("Login");
  I.waitForText("Login", 10);
  I.click("#user");
  I.fillField("#user", "");
  I.fillField("#password", "123456789");
  I.click("#btnLogin");
  I.waitForText("E-mail inválido.", 3);
}).tag("@So senha");
