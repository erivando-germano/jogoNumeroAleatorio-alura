alert('Boas vindas ao jogo do número secreto'); 

let numeroMaximo = 300;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;

// enqto o chute não for igual ao numero secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se o chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que o ${chute}`);	
        } else {
            alert(`O número secreto é maior que o ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto  (${numeroSecreto}) com ${tentativas} ${palavraTentativa}, parabéns!`);

//if (tentativas > 1) {
//    alert(`Isso ai! Você descobriu o número secreto  (${numeroSecreto}) com ${tentativas} tentativas, parabéns!`);
//} else {
//    alert(`Isso ai! Você descobriu o número secreto  (${numeroSecreto}) com ${tentativas} tentativa, parabéns!`);
//}