let cont = 0;
let tentativas = 0;
let jogoIniciou = false;
let tecla;
let questao = document.querySelector("#questao");
let zerarJogo = false;
let elogio = [
  "Excelente",
  "Magnífico",
  "Admirável",
  "Formidável",
  "Incomparável",
  "Surpreendente",
  "Impressionante",
  "Esplêndido",
  "Supimpa",
  "Sensacional",
  "Fantástico",
  "Espetacular",
  "Estupendo",
];
let advinha = [
  "Subo e desço, mas nunca me mexo",
  "Sem sair do seu cantinho, é capaz de viajar ao redor do mundo",
  "Fica cada vez mais molhado quanto mais a gente seca",
  "Você pode pegar, mas não pode jogar",
  "Está sempre a caminho, mas nunca chega",
  "Tem cidades, mas não tem casas. Tem montanhas, mas não tem árvores. Tem água, mas não tem peixe",
  "Não é vivo, mas cresce. Não tem pulmões, mas precisa de ar. Não tem boca, mas a água pode matá-lo",
  "É mais útil quando é quebrado",
  "Quanto mais você tira, maior eu fico",
  "É cheio de furinhos, mas ainda assim consegue segurar a água",
  "Não tem pés, mãos ou asas, mas pode subir aos céus",
  "Está sempre na sua frente, mas não pode ser visto?",
  "Tem 6 faces, mas não usa maquiagem. Tem também 21 olhos, mas não pode ver",
  "Faz duas pessoas a partir de uma só",
  "Quanto mais disso há, menos você vê",
  "Que dá o poder de atravessar paredes",
  "Tem centenas de rodas, mas não sai do lugar",
  "Quebra quando se fala",
  "No início muda e no fim dança",
  "Faz parte das árvores e dos cadernos",
  "Tem cinco dedos, mas não tem unhas",
  "A formiga tem maior que o leão",
  "Corre, mas não tem pés",
  "Tem dentes, mas nunca come",
  "Tem notas, mas não é dinheiro e faz as pessoas dançarem",
  "Fala e ouve, mas não é gente",
  "Mostra tudo que vê",
  "Tem cauda, mas não é cão. Sabe voar, mas não tem asas",
  "Duas irmãs que vivem uma do lado da outra e escutam muito bem",
  "Nunca passa, mas está sempre na frente",
  "Faz chorar ao descascar",
  "Tem coroa, mas não é rei, tem raiz, mas não é planta",
  "Entra na água, mas não se molha",
  "Anda, mas não tem perna",
  "A fruta que vive de pijama",
  "Tem um palmo de pescoço, tem barriga e não tem osso",
  "É verde, mas não é planta. Fala, mas não é gente",
  "nasce uma vez, nasce duas vezes, mas na terceira não nasce mais?",
  "o aluno fala para a professora e gosta de receber dos pais?",
  "Nunca para frente, sempre para trás, para crianças sou muito devagar, para adultos fui rápido demais. O que sou?",
  "Nos vire ao avesso, e abra nossas vísceras, você será o mais sábio dos homens, mas, sem nós, será um idiota. O que sou?",
  "Qual é a planta que está sempre babando?",
  "Qual o estado do Brasil queria ser um veículo?",
  "Qual o estado brasileiro que começa com um membro do seu corpo?",
  "Não tem pé e corre, tem leito e não dorme, quando para morre?",
  "quanto mais cresce mais fica perto do chão?",
  "Sem dedos eu aponto, sem braços eu golpeio, sem pés eu corro. O que sou?",
  "Qual é o país que tem mais comida no natal?",
  "quando está trabalhando tem o chapéu na cabeça, mas quando está descansando tem o chapéu no pé?",
  "Tem coroa mas não é rei, tem escama mas não é peixe",
  "Eu te vi onde jamais esteve e onde jamais estará, e mesmo assim, você neste mesmo lugar será visto por mim O que é?",
  "só anda com as pernas nas orelhas?",
  "nunca pede nada mas tem sempre alguém correndo para atendê-la?",
  "é algo e ao mesmo tempo nada?",
  "Sei pular, mas só uma vez isso farei, quando voltar a cair outra forma terei O que sou?",
  "Não tem pé e corre, tem leito e não dorme, quando para morre?",
  "Qual é a cidade mais aplaudida do Brasil?",
  "Qual é o dia que nunca chega?",
  "tem dente mas não morde?",
  "passa todo dia na sua frente mas você não vê?",
  "faz saltos enorme mas nunca participou de uma Olimpíada?",
  "Se você me tiver vai querer me dividir, se me dividir, deixarei de existir O que sou?",
  "sempre está vindo mas nunca chega?",
  "voa mas não bate as asas?",
  "Eu estou sempre debaixo dos seus pés, posso ser visto ao sol do meio dia, você nunca pode fugir de mim O que sou eu?",
  "se me bater com força posso até rachar, mas você nunca poderá me impedir de devolver seu olhar?",
  "serve para andar, mas não anda?",
  "é que fica dentro da gaiola, tem três asas, mas não é ave?",
  "tem coroa e escamas, mas não é peixe?",
  "tem cabeça, mas não é gente; tem dentes, mas não tem boca?",
  "entra em casa, mas fica com a cabeça de fora?",
  "tem bico e tem asas, mas não voa?",
  "caminha, caminha e não se cansa?",
  "é de comer e não é para comer?",
  "um bicho que anda com as patas?",
  "quanto maior é, menos se vê?",
  "tudo devora, mas a água mata?",
  "tem mais de mil buracos?",
  "anda com os pés na cabeça?",
  "vai e vem, mas não troca de lugar?",
  "corre, corre, mas está sempre no mesmo lugar?",
  "é feito para andar, mas não anda?",
  "entra na água e não se molha?",
  "nasce branco, seu natural é preto, e quanto mais saúde, tem mais tristeza?",
  "passa toda hora pela gente, mas ninguém vê?",
  "corre a casa todos os dias e depois volta a esconder-se num canto?",
  "o peixe do mar que não tem espinha?",
  "que cabe numa casa, mas não cabe numa mão?",
  "que se chama meia, sem ser melão; não é tão boa a casca como o coração?",
  "Sobe, sobe, sobe e jamais desce",
  "O que aumenta, mas nunca diminui? ",
  "Ele é magro pra chuchu, tem dentes, mas nunca come e, mesmo sem ter dinheiro, dá comida a quem tem fome",
  "dá muitas voltas e não sai do lugar?",
  "anda com os pés na cabeça?",
  "Voa sem ter asas e chora sem ter olhos?",
  "Quando a gente fica em pé, ele fica deitado e, quando a gente fica deitado, ele fica em pé?",
  "Tem cabeça, tem dente, tem barba, não é bicho e nem é gente?",
  "Anda com a barriga para trás",
  "O único bicho que sempre anda com patas?",
  "De dia, tem quatro pés e, de noite, tem seis?",
  "É grande antes de ficar pequena",
];
let resposta = [
  "escada",
  "selo",
  "toalha",
  "resfriado",
  "amanhã",
  "mapa",
  "fogo",
  "ovo",
  "buraco",
  "esponja",
  "fumaça",
  "futuro",
  "dado",
  "espelho",
  "escuridão",
  "porta",
  "estacionamento",
  "segredo",
  "mudança",
  "folha",
  "luva",
  "nome",
  "vento",
  "garfo",
  "musica",
  "telefone",
  "espelho",
  "pipa",
  "orelha",
  "futuro",
  "cebola",
  "dente",
  "sombra",
  "carta",
  "banana",
  "garrafa",
  "papagaio",
  "dente",
  "presente",
  "infância",
  "livro",
  "babosa",
  "sergipe",
  "pernambuco",
  "rio",
  "cabelo",
  "relógio",
  "peru",
  "caneta",
  "abacaxi",
  "espelho",
  "óculos",
  "campainha",
  "peixe",
  "pipoca",
  "rio",
  "palmas",
  "amanhã",
  "pente",
  "vento",
  "sapateiro",
  "segredo",
  "amanhã",
  "avião",
  "sombra",
  "espelho",
  "calçada",
  "ventilador",
  "abacaxi",
  "alho",
  "botão",
  "bule",
  "caminho",
  "colher",
  "pato",
  "escuridão",
  "fogo",
  "peneira",
  "piolho",
  "porta",
  "rio",
  "rua",
  "sombra",
  "urubu",
  "vento",
  "vassoura",
  "polvo",
  "botão",
  "melancia",
  "idade",
  "idade",
  "garfo",
  "relógio",
  "piolho",
  "nuvem",
  "pé",
  "alho",
  "perna",
  "pato",
  "cama",
  "vela",
];
window.addEventListener("keydown", (event) => {
  tecla = event.key;
  if (tecla == "Enter" && zerarJogo == false) {
    iniciar();
  }
});
x = parseInt(Math.random() * 12);
i = parseInt(Math.random() * 100);
function pegarData() {
  let data = new Date();
  let dia = String(data.getDate()).padStart(2, "0");
  let mes = String(data.getMonth() + 1).padStart(2, "0");
  let d1 = "01-01";
  let d2 = mes + "-" + dia;
  let diferencaDeMes = new Date(d2) - new Date(d1);
  let diferencaDeDia = diferencaDeMes / (1000 * 60 * 60 * 24);
  if (diferencaDeDia < 0) {
    diferencaDeDia = diferencaDeDia * -1;
  }
  i = diferencaDeDia;
}
// pegarData();
function iniciar() {
  let usuario = document.querySelector("input").value;
  let erro = document.querySelector("#erro");
  let acertou = document.querySelector("#acertou");
  let errou = document.querySelector("#errou");
  let tent = document.querySelector("#tentativas");
  let titulo = document.getElementById("titulo");
  let dica = document.getElementById("dica");
  let dica2 = document.getElementById("dica2");
  let dica3 = document.getElementById("dica3");
  usuario = usuario.toLowerCase();

  if (usuario == "ok" && cont == 0) {
    cont = 1;
    jogoIniciou = true;
    //remover o passo a passo
    document.querySelector(".box2").style.display = "none";
    //adicionar o painel principal
    titulo.innerHTML = "O que é, o que é?";
    questao.innerHTML = advinha[i];
    tent.innerHTML = "Tentativas: 0";
  } else {
    //Se a resposta não for "ok"
    erro.innerHTML = "Insira uma resposta valida";
    document.querySelector("input").value = "";
  }
  if (jogoIniciou == true) {
    document.querySelector("input").value = "";
    tentativas = tentativas + 1;
    //conferir se o usuario acertou
    erro.innerHTML = "";
    if (tentativas > 1 && zerarJogo == false) {
      if (
        usuario == resposta[i] ||
        usuario == "o " + resposta[i] ||
        usuario == "a " + resposta[i] ||
        usuario == "as " + resposta[i] + "s" ||
        usuario == "os " + resposta[i] + "s"
      ) {
        acertou.innerHTML = "Parabéns, você acertou a charada";
        if (tentativas == 2) {
          //o valor 2 da variavel corresponte a primeira tentativa
          acertou.innerHTML =
            elogio[x] + "!! você acertou a charada com apenas 1 tentativa";
        }
        if (tentativas == 3) {
          acertou.innerHTML =
            elogio[x] + "!! você acertou a charada com somente 2 tentativas";
        }
        if (tentativas == 4) {
          acertou.innerHTML =
            elogio[x] + "!! você acertou a charada com só 3 tentativas";
        }
        console.log(tentativas);
        errou.innerHTML = "";
        erro.style.display = "none";
        errou.style.display = "none";
        tent.innerHTML = "Tentativas: " + (tentativas - 1);
        document.querySelector("input").disabled = true;
        document.getElementById("btn").disabled = true;
        document.querySelector("input").value = usuario;
        acertou.style.background = "#84df84d9";
        acertou.style.padding = "2px";
        acertou.style.marginTop = "5px";
        acertou.style.borderRadius = "3px";
        zerarJogo = true;
      } else if (usuario == "") {
        errou.style.diplay = "none";
        erro.innerHTML = "Insira uma resposta valida";
        erro.style.background = "#ff3737";
        erro.style.padding = "2px";
        erro.style.marginTop = "5px";
        erro.style.borderRadius = "3px";
        tentativas = tentativas - 1;
        errou.innerHTML = "";
      } else {
        erro.style.display = "none";
        errou.innerHTML = "Resposta incorreta, tente novamente";
        errou.style.background = "#ff7b7b";
        errou.style.padding = "2px";
        errou.style.marginTop = "5px";
        errou.style.borderRadius = "3px";
        acertou.innerHTML = "";
        tent.innerHTML = "Tentativas: " + (tentativas - 1);
      }
    }
  }
  if (zerarJogo == false) {
	  dica.innerHTML ="A primeira letra da palavra é " + resposta[i].substr(0, 1); //primeira letra
    dica2.innerHTML = "A ultima letra da palavra é " + resposta[i].slice(-1); //ultima letra
	  dica3.innerHTML = "A palavra tem " + resposta[i].length + " letras"; //quant de letras
  }
  else{
    dica.style = "display: none"
    dica2.style = "display: none"
	  dica3.style = "display: none"
  }
}