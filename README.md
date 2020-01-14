# Burger Queen

## Índice

* [1. Burger Queen](#1-burguer-queen)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Considerações gerais](#4-considerações-gerais)

***

## 1. Burger Queen 
É um aplicativo construído para agilizar o atendimento aos clientes em restaurantes.

Construído com ReactJS com propósito de ser utilizado em tablets, é uma aplicação _SPA_ (Single-Page Application).


A aplicação pode ser acessada pelo seguinte link: [Burger Queen](https://burger-queen-lab03.firebaseapp.com/)


![Restaurant Page](https://user-images.githubusercontent.com/52434837/72379569-79b34a00-36f2-11ea-8e68-29b576dd595d.png)


***


## 2. Resumo do projeto
A aplicação tem como intuito facilitar o trabalho dos funcionários de um restaurante.

Temos três telas, a primeira é a inicial, onde o usuário poderá escolher qual informação ele quer, requesição pedidos, cozinha ou entrega de pedidos.

![Tela Inicial](https://user-images.githubusercontent.com/52434837/72380157-97cd7a00-36f3-11ea-89a3-873ef0b7dc8d.png)

Na tela de **RESTAURANTE** temos os menus separados em café da manhã e menu tradicional, com todas as informações e imagens do produto. Basta clicar em cima dos cards para que cada item seja adicionado ao pedido, o pedido fica no fim da página podendo ser editado e ter informação de mesa e cliente adicionados. 

![Restaurante](https://user-images.githubusercontent.com/52434837/72380417-1d512a00-36f4-11ea-87bb-db29b76c56bc.png)

Na tela **COZINHA** temos todos os pedidos feitos até o momento, com indicação de horário que foi realizado, quais itens estão sendo solicitados, qual a quantia e para qual mesa e cliente irão. Quando a cozinha termina de preparar o pedido, ao clicar no botão _PRONTO_, o mesmo fica disponível na página de delivery para ser retirado pelo garçom e levado até o cliente. 

![Cozinha](https://user-images.githubusercontent.com/52434837/72380675-ab2d1500-36f4-11ea-9205-0bf86a241f66.png)

E por fim no **DELIVERY** temos todos os pedidos que já foram feitos pela cozinha prontos para serem retirados e entregue aos clientes. Quando o garçom entrega o pedido ao cliente, ao clicar no botão _ENTREGUE_, o pedido desaparece da área de delivery para que os garçons entendam que aquele já foi entregue.

![Delivery](https://user-images.githubusercontent.com/52434837/72381022-65bd1780-36f5-11ea-9305-274af3b35f1c.png)


***

## 3. Considerações gerais
A lógica do projeto foi totalmente implementada em JavaScript (ES6 +).
Nesse projeto temos também ReactJS, criando components e rotas para a aplicação. 
O aplicativo é um  _Single Page App_.
O aplicativo usa _npm-scripts_ para fazer _start_, _build_ e _deploy_, que são responsáveis por iniciar, empacotar e implantar o aplicativo, respectivamente.
