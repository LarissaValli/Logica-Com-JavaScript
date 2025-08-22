alert ('Boas vindas ao jogo do número secreto');
let numeroSecreto = 2;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto o chute não for igual ao número secreto
//!= significa não igual
//Os loops permitem automatizar tarefas repetitivas e lidar com grandes quantidades de dados de fomra eficiente. É importante usá-los com cuidado para evitar loops infinitos
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e 10`);
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
        // Para atribuir mais 1: ++
    }

}

//DESAFIO DE LOOP E WHILE
//1.Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
// let contador = 1;
// while (contador <= 10){
//     console.log(contador);
//     contador++;
// }
//2.Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
// let contagem = 10;
// while (contagem >= 0) {
//     console.log(contagem);
//     contagem--;
// }
//3.Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
// let contagemRegressiva = prompt("Digite um número para a contagem regressiva:");

// while(contagemRegressiva >= 0){
//     console.log(contagemRegressiva);
//     contagemRegressiva--;
// }
//4.Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
// let contagemProgressiva = prompt("Digite um número para a contagem progressiva:");
// let contagemDaProgressiva = 0;

// while(contagemDaProgressiva <= contagemProgressiva) {
//     console.log(contagemDaProgressiva);
//     contagemDaProgressiva++;
// }


//Desafio Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

// alert("Desafio dia da semana");
// let sabadoD = "Sábado";
// let domingoS = "Domingo";
// let segunda = "Segunda";
// let terça = "Terça";
// let quarta = "Quarta";
// let quinta = "Quinta";
// let sexta = "sexta";
// let diaDaSemana = prompt("Escolha um dia da semana");


// if(diaDaSemana == sabadoD){
//      alert("Bom fim de semana!");
// }

// if(domingoS){
//      alert("Bom fim de semana!");
// } else{
//      alert("Boa semana!");
// }

//DESAFIO CORRETO
// diaDaSemana = prompt('Qual é o dia da semana?');
// if (diaDaSemana == 'Sábado') {
//     alert('Bom fim de semana!');
// } else if (diaDaSemana == 'Domingo') {
//     alert('Bom fim de semana!');
// } else {
//     alert('Boa semana!');
// }

//DESAFIO CORRETO Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

// numeroPositivoOuNegativo = prompt("Digite um número positivo ou negativo");
// if(numeroPositivoOuNegativo > 0){
//      alert("Número positivo!");
// } else {
//      alert("Número negativo");
// }

//DESAFIO Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!" no console do navegador. Caso contrário, mostre "Tente novamente para ganhar.".


// pontuacao = 105;
// if (pontuacao >= 100) {
//     console.log('Parabéns, você venceu!');
// } else {
//     console.log('Tente novamente para ganhar.');
// }


//DESAFIOS NÃO FEITOS
//Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

// let saldoConta = 500; // Exemplo de saldo
// alert(`Seu saldo é de R$${saldoConta}.`);

//Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

// let nome = prompt('Qual o seu nome?');
// alert(`Boas vindas ${nome}`);



















//--------------------------------------------------------------------------------------


//Hora da prática
// alert('Bem-vindo ao nosso site!');
// let nome = "Lua";
// let idade = 25;
// let numeroDeVendas = 50;
// let saldoDisponivel = 1000;
// alert('Erro! Preencha todos os campos');
// let mensagemDeErro = 'Erro! Preencha todos os campos';
// alert(mensagemDeErro);
// let nomeUser = prompt('Digite o seu nome');
// let idadeUser = prompt('Digite a sua idade');
// let idadeU = prompt('Digite a sua idade');
// if (idade >= 18) {
//     alert('Pode tirar a habilitação!'); 
// }


//-------------------------------------------------------------------------------------


// alert("Estou aprendendo JavaScript");

// // Pede o nome da pessoa e guarda na variável
// let nomeUsuario = prompt("Digite seu nome");

// // Pede a idade da pessoa e guarda na variável
// let idadeUsuario = prompt("Digite sua idade");

// let temPao = prompt("Você tem pão em casa? Responda com sim ou não");

// if (temPao === "sim") {
//     alert("Fazer sanduíche");
// } else {
//     alert("Fazer miojo");
// }