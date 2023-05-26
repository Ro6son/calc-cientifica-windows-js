// Declaração das variáveis
let vaiMudar = false; // Indica se vai ocorrer mudança
let cont; // Contador
let valor; // Armazena um valor
const historico = []; // Array para histórico de cálculos
const memoria = []; // Array para valores em memória
let fe = false; // Indica se FE está ativado
let hyp = false; // Indica se HYP está ativado
const deg = "deg"; // Unidade de medida

// Função para atualizar elementos
function atualiza() {
  // Define o estilo de fundo para o elemento atual
  $(this).css("background-color", "rgb(192, 192, 192)");

  // Obtém o valor do elemento com o id "valor"
  valor = $("#valor").text();

  // Substitui a vírgula por ponto no valor
  valor = valor.replace(",", ".");

  // Define um temporizador para reverter os estilos de fundo
  setTimeout(function () {
    $(".col").css("background-color", "rgb(240, 240, 240)");
    $(".numeros").css("background-color", "rgb(250, 250, 250)");
  }, 100);

  // Define manipuladores de eventos hover para elementos com as classes ".col" e ".numeros"
  $(".col").hover(
    function () {
      $(this).css("background-color", "rgb(216, 216, 216)");
    },
    function () {
      $(this).css("background-color", "rgb(240, 240, 240)");
    }
  );

  $(".numeros").hover(
    function () {
      $(this).css("background-color", "rgb(216, 216, 216)");
    },
    function () {
      $(this).css("background-color", "rgb(250, 250, 250)");
    }
  );
}

$(document).on("click", ".numeros", function () {
  atualiza(); // Chama a função atualiza() para atualizar o estilo de fundo

  if (valor.length < 15) {
    // Verifica se o comprimento do valor é menor que 15 caracteres

    // Obtém o texto do elemento clicado, removendo espaços em branco no início e no fim
    var numeroClicado = $(this).text().trim();

    // Verifica se o valor atual é "0" ou ocorreu uma mudança anteriormente
    if (valor === "0" || vaiMudar) {
      // Atribui o número clicado diretamente ao elemento com o id "valor"
      $("#valor").html(numeroClicado);
    } else {
      // Concatena o valor atual com o número clicado, substituindo ponto por vírgula
      var novoValor = (valor + numeroClicado).replace(".", ",");

      // Atribui o novo valor ao elemento com o id "valor"
      $("#valor").html(novoValor);
    }
  }

  vaiMudar = false; // Define vaiMudar como false após o processamento
});

// $(document).on("click", ".opp", function () {
//   atualiza();
//   if ($(this).text() == "(")
//     $("#valor2").html($("#valor2").text() + " " + $(this).text() + " ");
//   else
//     $("#valor2").html(
//       $("#valor2").text() + $("#valor").text() + " " + $(this).text() + " "
//     );
//   vaiMudar = true;
// });

$(document).on("click", ".opp", function () {
  atualiza();

  var valor2 = $("#valor2"); // Armazena uma referência ao elemento com id "valor2"
  var valor = $("#valor").text(); // Obtém o conteúdo do elemento com id "valor"
  var clickedText = $(this).text(); // Obtém o texto do elemento clicado

  if (clickedText === "(") {
    // Se o texto do elemento clicado for "("

    // Adiciona o texto "(" ao final do conteúdo de valor2, seguido de um espaço em branco antes e depois de "("
    valor2.html(valor2.text() + " " + clickedText + " ");
  } else {
    // Caso contrário, ou seja, se o texto não for "("

    // Concatena o conteúdo de valor2, o conteúdo de valor, o texto do elemento clicado
    // e espaços em branco antes e depois do texto clicado e atribui o resultado a valor2
    valor2.html(valor2.text() + valor + " " + clickedText + " ");
  }

  vaiMudar = true; // Define vaiMudar como true após o processamento
});

$(document).on("click", "#ce", function () {
  atualiza(); // Chama a função atualiza() para atualizar o estilo de fundo

  // Define o conteúdo do elemento com id "valor" como "0"
  $("#valor").html("0");
});
$(document).on("click", "#c", function () {
  atualiza(); // Chama a função atualiza() para atualizar o estilo de fundo

  // Define o conteúdo do elemento com o id "valor" como "0"
  $("#valor").html("0");

  // Define o conteúdo do elemento com o id "valor2" como uma string vazia
  $("#valor2").html("");
});

$(document).on("click", "#backspace", function () {
  atualiza();

  // Verifica se o valor não é "0" e possui mais de um caractere
  if (valor !== "0" && valor.length > 1) {
    // Remove o último caractere do valor e substitui "." por ","
    var novoValor = valor.substring(0, valor.length - 1).replace(".", ",");
    $("#valor").html(novoValor);
  }
  // Verifica se o valor é vazio, "-" ou possui apenas um caractere
  else if (
    $("#valor").text() === "" ||
    $("#valor").text() === "-" ||
    valor.length === 1
  ) {
    // Redefine o valor para "0"
    $("#valor").html("0");
  }
});

$(document).on("click", "#square", function () {
  atualiza();

  // Calcula o quadrado do valor atual
  var valorAtual = parseFloat(valor); // Converte o valor em um número de ponto flutuante
  var square = Math.pow(valorAtual, 2); // Calcula o quadrado

  // Formata o resultado e atualiza o elemento #valor
  var squareString = square.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  }); // Formata o número com 2 casas decimais
  $("#valor").html(squareString.replace(".", ",")); // Atualiza o elemento #valor com o resultado formatado
});

$(document).on("click", "#elevado", function () {
  atualiza();

  // Obtém o valor atual em "#valor" e concatena com o texto existente em "#valor2"
  var novoValor = $("#valor2").text() + $("#valor").text() + " ^ ";

  // Atualiza o conteúdo de "#valor2" com o novo valor
  $("#valor2").html(novoValor);

  // Define a variável "vaiMudar" como verdadeira para indicar uma mudança
  vaiMudar = true;
});

$(document).on("click", "#sen", function () {
  atualiza();
  sen = Math.sin(parseFloat(valor));
  $("#valor").html(sen.toString().replace(".", ","));
});

$(document).on("click", "#cos", function () {
  atualiza();
  cos = Math.cos(parseFloat(valor));
  $("#valor").html(cos.toString().replace(".", ","));
});

$(document).on("click", "#tan", function () {
  atualiza();
  tan = Math.tan(parseFloat(valor));
  $("#valor").html(tan.toString().replace(".", ","));
});

$(document).on("click", "#xcubo", function () {
  atualiza();
  xcubo = Math.pow(parseFloat(valor), 3);
  $("#valor").html(xcubo.toString().replace(".", ","));
});

$(document).on("click", "#yroot", function () {
  atualiza();
  $("#valor").html($("#valor").text() + " yroot ");
});

$(document).on("click", "#sen1", function () {
  atualiza();
  sen = Math.pow(Math.sin(parseFloat(valor)), -1);
  $("#valor").html(sen.toString().replace(".", ","));
});

$(document).on("click", "#cos1", function () {
  atualiza();
  cos = Math.pow(Math.cos(parseFloat(valor)), -1);
  $("#valor").html(cos.toString().replace(".", ","));
});

$(document).on("click", "#tan1", function () {
  atualiza();
  tan = Math.pow(Math.tan(parseFloat(valor)), -1);
  $("#valor").html(tan.toString().replace(".", ","));
});

$(document).on("click", "#raiz", function () {
  atualiza();
  raiz = Math.sqrt(parseFloat(valor));
  $("#valor").html(raiz.toString().replace(".", ","));
});

$(document).on("click", "#dezax", function () {
  atualiza();
  dezax = Math.pow(10, parseFloat(valor));
  $("#valor").html(dezax.toString().replace(".", ","));
});

$(document).on("click", "#log", function () {
  atualiza();
  log = Math.log(parseFloat(valor));
  $("#valor").html(log.toString().replace(".", ","));
});

$(document).on("click", "#exp", function () {
  atualiza();
  $("#valor").html($("#valor").text() + ",e+");
});

$(document).on("click", "#mod", function () {
  atualiza();
  $("#valor").html($("#valor").text() + " Mod ");
  vaiMudar = true;
});

$(document).on("click", "#umsobre", function () {
  atualiza();
  umsobre = 1 / parseFloat(valor);
  $("#valor").html(umsobre.toString().replace(".", ","));
});

$(document).on("click", "#eax", function () {
  atualiza();
  eax = Math.pow(2.71828182845904523, parseFloat(valor));
  $("#valor").html(eax.toString().replace(".", ","));
});

$(document).on("click", "#ln", function () {
  atualiza();
  ln = Math.log(parseFloat(valor)) / Math.log(2.71828182845904523);
  $("#valor").html(ln.toString().replace(".", ","));
});

$(document).on("click", "#dms", function () {
  atualiza();
  dms = valor.split(".")[0] + "," + valor.split(".")[1] * 6;
  $("#valor").html(dms);
});

$(document).on("click", "#deg", function () {
  atualiza();
  valorSplit = valor.split(".");
  if ((valorSplit[1] * 16).toString().length > 2)
    deg =
      parseInt(valorSplit[0]) +
      1 +
      "," +
      (valorSplit[1] * 1666666666).substring(
        1,
        (valorSplit[1] * 1666666666).toString().length
      );
  else deg = valorSplit[0] + "," + valorSplit[1] * 1666666666;
  $("#valor").html(deg.toString().replace(".", ","));
});

$(document).on("click", "#pi", function () {
  atualiza();
  $("#valor").html("3,141592653589793");
  vaiMudar = true;
});

$(document).on("click", "#fatorial", function () {
  atualiza();
  if (valor < 0) fatorial = "Entrada Inválida";
  else {
    var fatorial = 1;
    for (x = valor; x > 1; x--) fatorial = fatorial * x;
  }
  $("#valor").html(fatorial.toString().replace(".", ","));
});

$(document).on("click", "#maismenos", function () {
  atualiza();
  menos = parseFloat(valor) * -1;
  $("#valor").html(menos.toString().replace(".", ","));
});

$(document).on("click", "#virgula", function () {
  atualiza();
  if (!valor.includes(".")) $("#valor").html(valor + ",");
});

$(document).on("click", "#igual", function () {
  atualiza();
  valor2 = $("#valor2").text();
  valor2 = valor2.replace("×", "*");
  valor2 = valor2.replace("÷", "/");
  conta = "";
  if (valor2.substring(valor2.length - 2, valor2.length - 1) == ")")
    conta = valor2;
  else conta = valor2 + $("#valor").text();
  resultado = 0;
  conta = conta.replace(",", ".");
  historico.push(conta);
  if (conta.includes("^")) {
    conta = conta.split("^");
    aux = 0;
    for (i = 0; i < conta.length; i++) {
      if (i == 0) resultado = eval(conta[0]);
      else resultado = Math.pow(resultado, eval(conta[i]));
    }
  } else if (conta.includes("Mod")) {
    conta = conta.split("Mod");
    aux = 0;
    for (i = 0; i < conta.length; i++) {
      if (i == 0) resultado = eval(conta[0]);
      else resultado = resultado % eval(conta[i]);
    }
  } else if (conta.includes("yroot")) {
    conta = conta.split("yroot");
    aux = 0;
    for (i = 0; i < conta.length; i++) {
      if (i == 0) resultado = eval(conta[0]);
      else resultado = Math.pow(resultado, 1 / eval(conta[i]));
    }
  } else resultado = eval(conta);
  $("#valor2").html("");
  vaiMudar = true;
  if (fe) {
    $("#valor").html(resultado.toExponential().toString().replace(".", ","));
  } else {
    $("#valor").html(resultado.toString().replace(".", ","));
  }
  historico.push("<h3>" + resultado + "</h3>");
  localStorage.setItem("historico", historico);
  var historicoLocal = localStorage.getItem("historico");
  while (historicoLocal.includes(","))
    historicoLocal = historicoLocal.replace(",", "<br>");
  $("#div-historico").html(historicoLocal);
});
$(document).on("click", "#deg2", function () {
  if (deg == "deg") {
    deg = "rad";
    this.innerHTML = "RAD";
  } else if (deg == "rad") {
    deg = "grad";
    this.innerHTML = "GRAD";
  } else {
    deg = "deg";
    this.innerHTML = "DEG";
  }
});

$(document).on("click", "#fe", function () {
  if (fe) {
    fe = false;
    this.style.borderBottom = "none";
  } else {
    fe = true;
    this.style.borderBottom = "3px solid red";
  }
});

$(document).on("click", "#hyp", function () {
  if (hyp) {
    hyp = false;
    this.style.borderBottom = "none";
    $("#sen").html("<span>sin</span>");
    $("#cos").html("<span>cos</span>");
    $("#tan").html("<span>tan</span>");
    $("#sen1").html("<span>sin<sup>-1</sup></span>");
    $("#cos1").html("<span>cos<sup>-1</sup></span>");
    $("#tan1").html("<span>tan<sup>-1</sup></span>");
  } else {
    hyp = true;
    this.style.borderBottom = "3px solid red";
    $("#sen").html("<span>sinh</span>");
    $("#cos").html("<span>cosh</span>");
    $("#tan").html("<span>tanh</span>");
    $("#sen1").html("<span>sinh<sup>-1</sup></span>");
    $("#cos1").html("<span>cosh<sup>-1</sup></span>");
    $("#tan1").html("<span>tanh<sup>-1</sup></span>");
  }
});

document.addEventListener("keydown", function (evt) {
  atualiza();
  evt = evt || window.event;
  var key = evt.keyCode || evt.which;
  if (key >= 96 && key <= 105) {
    val = key - 96;
    $("#" + val).click();
  }
  switch (key) {
    case 8:
      $("#backspace").click();
      break;
    case 27:
      $("#c").click();
      break;
    case 188:
    case 110:
      $("#virgula").click();
      break;
    case 111:
    case 193:
      $("#dividir").click();
      break;
    case 106:
      $("#multiplicar").click();
      break;
    case 107:
    case 187:
      $("#somar").click();
      break;
    case 109:
    case 189:
      $("#subtrair").click();
      break;
    case 13:
      $("#igual").click();
      break;
  }
});

$(document).on("click", "#memoria", function () {
  $(".tab").html("<div id='div-memoria'>Não há nada salvo na memória</div>");
  var memoriaLocal = localStorage.getItem("memoria");
  while (memoriaLocal.includes(","))
    memoriaLocal = memoriaLocal.replace(",", "<br>");
  document.getElementById("div-memoria").innerHTML = memoriaLocal;
  document.getElementById("mem").style.borderBottom = "3px solid red";
  document.getElementById("his").style.borderBottom = "none";
});

$(document).on("click", "#historico", function () {
  $(".tab").html("<div id='div-historico'>Ainda não há histórico</div>");
  var historicoLocal = localStorage.getItem("historico");
  while (historicoLocal.includes(","))
    historicoLocal = historicoLocal.replace(",", "<br>");
  $("#div-historico").html(historicoLocal);
  $("#his").css("borderBottom", "3px solid red");
  $("#mem").css("borderBottom", "none");
});

$(document).on("click", "#ms", function () {
  memoria.push($("#valor").text());
  localStorage.setItem("memoria", memoria);
  var memoriaLocal = localStorage.getItem("memoria");
  while (memoriaLocal.includes(","))
    memoriaLocal = memoriaLocal.replace(",", "<br>");
  document.getElementById("div-memoria").innerHTML = memoriaLocal;
  vaiMudar = true;
});

$(document).on("click", "#mc", function () {
  localStorage.setItem("memoria", "");
  document.getElementById("div-memoria").innerHTML = "";
  memoria = Array();
});
$(document).on("click", "#mr", function () {
  var memoriaLocal = localStorage.getItem("memoria");
  memoriaLocal = memoriaLocal.split(",");
  document.getElementById("valor").innerHTML =
    memoriaLocal[memoriaLocal.length - 1];
  vaiMudar = true;
});
$(document).on("click", "#mMais", function () {
  var memoriaLocal = localStorage.getItem("memoria");
  memoriaLocal = memoriaLocal.split(",");
  var memoria2 = "";
  for (i = 0; i < memoriaLocal.length - 1; i++) {
    memoria2 += memoriaLocal[i] + ",";
  }
  memoria2 +=
    parseFloat(memoriaLocal[memoriaLocal.length - 1]) +
    parseFloat($("#valor").text());
  memoria = memoria2.split(",");
  localStorage.setItem("memoria", memoria2);
  while (memoria2.includes(",")) memoria2 = memoria2.replace(",", "<br>");
  document.getElementById("div-memoria").innerHTML = memoria2;
});
$(document).on("click", "#mMenos", function () {
  var memoriaLocal = localStorage.getItem("memoria");
  memoriaLocal = memoriaLocal.split(",");
  var memoria2 = "";
  for (i = 0; i < memoriaLocal.length - 1; i++) {
    memoria2 += memoriaLocal[i] + ",";
  }
  memoria2 +=
    parseFloat(memoriaLocal[memoriaLocal.length - 1]) -
    parseFloat($("#valor").text());
  memoria = memoria2.split(",");
  localStorage.setItem("memoria", memoria2);
  while (memoria2.includes(",")) memoria2 = memoria2.replace(",", "<br>");
  document.getElementById("div-memoria").innerHTML = memoria2;
});

$(document).ready(function () {
  $("#historico").click();
});
