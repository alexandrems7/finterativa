const prompt = require("prompt-sync")();

function timeLapse(milliseconds) {
  var start = new Date().getTime();
  var end = 0;
  while (end - start < milliseconds) {
    end = new Date().getTime();
  }
}

function carregando() {
  let um = ".";
  let dois = "..";
  let tres = "...";
  let loading = "Carregando o jogo";
  let count = 0;

  while (count < 2) {
    console.clear();
    console.log(`${loading}${um}`);
    timeLapse(1000);
    console.clear();
    console.log(`${loading}${dois}`);
    timeLapse(1000);
    console.clear();
    console.log(`${loading}${tres}`);
    timeLapse(1000);
    console.clear();
    count++;
  }
}

function indoTrabalhar() {
  let a = ".";
  let b = "..";
  let c = "...";
  let loadingt = "Indo trabalhar";
  let countp = 0;

  while (countp < 2) {
    console.clear();
    console.log(`${loadingt}${a}`);
    timeLapse(1000);
    console.clear();
    console.log(`${loadingt}${b}`);
    timeLapse(1000);
    console.clear();
    console.log(`${loadingt}${c}`);
    timeLapse(1000);
    console.clear();
    countp++;
  }
}

function carregandoJogo() {
  let um = ".";
  let dois = "..";
  let tres = "...";
  let loading = "Inciando o jogo";
  let count = 0;

  while (count < 2) {
    console.clear();
    console.log(`${loading}${um}`);
    timeLapse(1000);
    console.clear();
    console.log(`${loading}${dois}`);
    timeLapse(1000);
    console.clear();
    console.log(`${loading}${tres}`);
    timeLapse(1000);
    console.clear();
    count++;
  }
}

// function energia (){
//   if(jogador.cafeDaManha === true){
// jogador.energia = jogador.energia + 20;
//   } else if (jogador.almoco === true){
//     jogador.energia = jogador.energia + 10;
//   } else if (jogador.familia > 50){
//     jogador.energia = jogador.energia + 15;
//   } else if (trabalho.intervalo === true){
//     jogador.energia = jogador.energia + 10;
//   } else if (enrolandoNaCama){
//     let calc = jogador.energia * (enrolandoNaCama / 2);
//     jogador.energia = jogador.energia - calc;
//   } else if (jogador.higieneBucal === false) {
//     jogador.energia = jogador.energia - 5;
//   } else if (higieneBucal === true) {
//     jogador.energia = jogador.energia + 7;
//   } else if (materiaisDeTrabalho === true){
//     jogador.energia = jogador.energia + 10;
//   } else if (materiaisDeTrabalho === false){
//     jogador.energia = jogador.energia - 5;
//   } else if (trabalho.primeiroBloco === true){
//     jogador.energia = jogador.energia + 10;
//   } else if (trabalho.segundoBloco === true){
//     jogador.energia = jogador.energia + 10;
//   }
// }

let jogador = {
  nome: "Alexandre",
  idade: 18,
  higieneBucal: false,
  cafeDaManha: false,
  almoco: false,
  jantar: false,
  materiaisDeTrabalho: false,
  trabalho: false,
  ponto: true,
  saude: true,
  doenca: "Nenhuma",
  lazer: false,
  familia: 50,
  dinheiroEmConta: 350,
  carro: false,
  moto: true,
  loteria: false,
  energia: 40,
};

let trabalho = {
  primeiroBloco: false,
  segundoBloco: false,
  intervalo: false,
};

let pontoControle = 0;

function painel() {
  //||| HORAS: ${horas} : ${minutos}
  console.log(`
        
    ||| DIA DA SEMANA: ${diasDaSemana[rodadas]}
    ||| ENERGIA: ${jogador.energia}
    ||| Jogadas ${pontoControle}
    ||| Você jogará por mais ${5 - pontoControle} vezes

    `);
}
let folhaDePonto = {
  segunda: false,
  terca: false,
  quarta: false,
  quinta: false,
  sexta: false,
};

let start;
let jogar = true;
let horas = 4;
let minutos = 30;
let enrolandoNaCama;

function antesDeTrabalhar(print) {
  console.clear();
  if (print) {
    console.log(print);
  }
  painel();

  console.log(
    `Café da manhã: ${
      jogador.cafeDaManha ? "ok" : "Você ainda não tomou seu café"
    }`
  );
  console.log(
    `Você ${
      jogador.higieneBucal
        ? "já escovou seus dentes"
        : "precisa escovar os dentes"
    }`
  );
  console.log(
    `Seus materiais ${
      jogador.materiaisDeTrabalho
        ? "estão organizados"
        : "ainda não foram organizados"
    }`
  );
  console.log();
  console.log(`
    [1] Café da manhã;
    [2] Escovar os dentes;
    [3] Organizar os materiais;
    [4] Ir trabalhar.
    `);

  digite();
}

function noTrabalho(print) {
  console.clear();
  console.clear();
  if (print) {
    console.log(print);
  }
  painel();
  console.log(
    `Folha de ponto: ${
      folhaDePonto.segunda ? "assinada" : "você precisa assinar"
    } `
  );
  console.log(
    `Primeiro bloco de aulas: ${
      trabalho.primeiroBloco ? "ok" : "Vamos começar?"
    }`
  );
  console.log(`Intervalo: ${trabalho.intervalo ? "feito" : "a fazer"}`);
  console.log(
    `Segundo bloco de aulas: ${
      trabalho.segundoBloco ? "ok" : "Segundo turno à vista!"
    }`
  );
  console.log();
  console.log(`
    [1] Dar primeiro bloco de aulas;
    [2] Fazer intervalo;
    [3] Dar segundo bloco de aulas;
    [4] Assinar folha de ponto;
    [5] Ir para casa
    `);

  digite();
}

let menuTransition = 0;

let rodadas = 0;

let diasDaSemana = [
  "segunda_feira",
  "terça_feira",
  "quarta_feira",
  "quinta_feira",
  "sexta_feira",
];
let PlanosDeAulaDaSemana = [];

function criarPlanoDeAula() {
  for (let n = 0; n <= 4; n++) {
    time(30);
    console.clear();
    console.log();
    console.log(` ||| Este é o seu plano de aula para ${diasDaSemana[n]}`);
    console.log();

    PlanosDeAulaDaSemana[n] = [
      (planosDeAula = {
        diaDaSemana: diasDaSemana[n],
        disciplina: prompt("Este plano é para a disciplina: "),
        duracao: prompt("Duração da aula: "),
        habilidade: prompt("Habilidades a serem desenvolvidas: "),
        roteiroDeAtividades: prompt("Descreva seu roteiro de atividades: "),
        avaliacao: prompt("Como sua aula será avaliada? "),
      }),
    ];

    let continuar = prompt("Deseja criar mais um plano de aula? Digite s ou n");
    if (continuar === "s") {
      n = 5;
    }
  }
}

function depoisDoTrabalho(print) {
  if (menuTransition < 5) {
    console.clear();
    console.clear();
    if (print) {
      console.log(print);
    }
    painel();
    console.log("Você precisa entrar em cada umas das opções 1 vez");
    console.log(
      `Alimentação: ${jogador.almoco ? "Ok" : "Você precisa almoçar"}`
    );
    console.log(
      `Higiene: ${
        jogador.almoco
          ? jogador.higieneBucal
            ? "Ok"
            : "Você precisa escovar os seus dentes"
          : "Almoce primeiro"
      }`
    );
    console.log(`
          [1] Almoçar;
          [2] Escovar os dentes;
          [3] Lazer;
          [4] Família;
          [5] Trabalho.
          `);
    digite();
  } else if (menuTransition >= 5) {
    console.clear();
    painel();
    console.log(`
    Jantar: ${jogador.jantar ? "Você já jantou" : "Você ainda não jantou"}
    Intervalo: Seu intervalo se inicia às 9 horas

    `);

    console.log(`
          [1] Jantar;
          [2] Aula (Curso Blue);
          [3] Intervalo;
          [4] Dormir;
          `);
    digite();
  }
}

function digite() {
  start = +prompt(`Digite a opção desejada:   `);
}

function time(tempo) {
  //Função em aperfeiçoamento - Não funciona perfeitamente.
  if (tempo) {
    minutos = minutos + tempo;
    console.log(`Relógio: ${horas}h : ${minutos}m`);
  } else {
    console.log(`Relógio: ${horas}h : ${minutos}m`);
  }

  if (minutos >= 60) {
    let resto = minutos - 60;
    minutos = 0 + resto;
    horas++;
  }
}

console.clear();

let inicio = true;
carregando();
while (jogar === true) {
  if (inicio === true) {
    pontoControle = pontoControle + 1;
    console.clear();
    painel();
    console.log(`
        [1] Levantar;
        [2] Continuar dormindo;
        `);
    digite();

    //Primeiro loop de verificação de digiação incorreta
    while (start != 1 && start != 2) {
      console.clear();
      painel();
      console.log(`
          [1] Levantar;
          [2] Continuar dormindo;
          `);
      digite();
    }

    if (start === 1) {
      inicio = false;
    } else if (start === 2) {
      while (start === 2) {
        jogador.energia = jogador.energia - 5;
        time(10);
        console.clear();
        painel();
        console.log(`
                [1] Levantar;
                [2] Continuar dormindo.
                `);
        start = +prompt(`Digite a opção desejada:   `);
        if (start === 1) {
          inicio = false;
        }

        while (start != 1 && start != 2) {
          console.clear();
          console.log("OPS! TENTE NOVAMENTE...");
          painel();
          console.log(`
              [1] Levantar;
              [2] Continuar dormindo;
              `);
          digite();
        }
      }
    }
  }

  if (start === 1) {
    while (start != 4) {
      antesDeTrabalhar();
      if (start === 1) {
        jogador.cafeDaManha = true;
        jogador.energia = jogador.energia + 10;
        time(20);
      } else if (start === 2) {
        jogador.higieneBucal = true;
        jogador.energia = jogador.energia + 5;
        time(10);
      } else if (start === 3) {
        jogador.materiaisDeTrabalho = true;
        jogador.energia = jogador.energia + 5;
        time(10);
      }
      while (start != 1 && start != 2 && start != 3 && start != 4) {
        let print = "OPS! TENTE NOVAMENTE...";
        antesDeTrabalhar(print);
      }
    }
  } else if (start === 4) {
    horas = 7;
    minutos = 00;
    // indoTrabalhar();
    while (true) {
      if (jogador.materiaisDeTrabalho === false) {
        jogador.energia = jogador.energia - 10;
      } else if (jogador.cafeDaManha === false) {
        jogador.energia = jogador.energia - 10;
      } else if (jogador.higieneBucal === false) {
        jogador.energia = jogador.energia - 5;
      }
      break;
    }

    while (start != 5) {
      indoTrabalhar();
      noTrabalho();
      if (start === 1) {
        trabalho.primeiroBloco = true;
        jogador.energia = jogador.energia + 5;
        time(150);
      } else if (start === 2) {
        trabalho.intervalo = true;
        jogador.energia = jogador.energia + 5;
        time(15);
      } else if (start === 3) {
        trabalho.segundoBloco = true;
        jogador.energia = jogador.energia + 5;
        time(100);
      } else if (start === 4) {
        while (true) {
          if (pontoControle === 1) {
            folhaDePonto.segunda = true;
          } else if (pontoControle === 2) {
            folhaDePonto.terca = true;
          } else if (pontoControle === 3) {
            folhaDePonto.quarta = true;
          } else if (pontoControle === 4) {
            folhaDePonto.quinta = true;
          } else if (pontoControle === 5) {
            folhaDePonto.sexta = true;
          }
          break;
        }
        time(2);
      }
      while (
        start != 1 &&
        start != 2 &&
        start != 3 &&
        start != 4 &&
        start != 5
      ) {
        let print = "OPS! TENTE NOVAMENTE...";
        noTrabalho(print);
      }
    }

    if ((trabalho.primeiroBloco = false)) {
      jogador.energia = jogador.energia - 5;
    } else if ((trabalho.segundoBloco = false)) {
      jogador.energia = jogador.energia - 5;
    }
  } else if (start === 5) {
    jogador.higieneBucal = false;

    while (true) {
      if (trabalho.primeiroBloco === false) {
        jogador.energia = jogador.energia - 10;
      } else if (trabalho.segundoBloco === false) {
        jogador.energia = jogador.energia - 10;
      } else if (folhaDePonto.segunda === false) {
        jogador.energia = jogador.energia - 5;
      }
      break;
    }

    while (menuTransition <= 5) {
      depoisDoTrabalho();
      //verifica digitação errada
      while (
        start != 1 &&
        start != 2 &&
        start != 3 &&
        start != 4 &&
        start != 5
      ) {
        let print = "OPS! TENTE NOVAMENTE...";
        depoisDoTrabalho(print);
      }

      if (start === 1) {
        time(60);
        jogador.almoco = true;
        jogador.energia = jogador.energia + 10;
        menuTransition++;
      } else if (start === 2) {
        time(5);
        jogador.higieneBucal = true;
        jogador.energia = jogador.energia + 5;
        menuTransition++;
        //lazer
      } else if (start === 3) {
        menuTransition++;
        while (start != 0) {
          console.clear();
          painel();
          console.log(
            `Lazer: ${
              jogador.lazer ? "Ok" : "Escolha uma das atividades e divirta-se"
            }`
          );

          console.log(`
                [1] Jogo da Velha;
                ...em breve mais opçoes
                [0] Voltar
                `);
          digite();

          if (start === 1) {
            jogador.energia = jogador.energia + 5;
            time(30);
            jogador.lazer = true;
          } else if (start === 0) {
            break;
          }
          //Verifica digitação errada
          while (start != 1 && start != 0) {
            let print = "OPS! TENTE NOVAMENTE...";

            console.clear();
            console.log(print);
            painel();
            console.log(
              `Lazer: ${
                jogador.lazer ? "Ok" : "Escolha uma das atividades e divirta-se"
              }`
            );

            console.log(`
                  [1] Jogo da Velha;
                  ...em breve mais opçoes
                  [0] Voltar
                  `);
            digite();

            if (start === 1) {
              jogador.energia = jogador.energia + 5;
              time(30);
              jogador.lazer = true;
            } else if (start === 0) {
              break;
            }
          }
        }
      } else if (start === 4) {
        menuTransition++;
        while (start != 0 && menuTransition <= 5) {
          console.clear();
          if (jogador.familia < 75) {
            console.log(
              "Você precisa se fazer mais presente para com sua família."
            );
          }
          painel();
          console.log(`Família: ${jogador.familia}`);
          console.log(`
                [1] Visitar os pais;
                [2] Passear com o(a) filho(a);
                [3] Comprar presente para a esposa;
                [0] Voltar.
                `);
          digite();

          if (start === 1) {
            time(180);
            jogador.familia = jogador.familia + 15;
            jogador.energia = jogador.energia + 5;
          } else if (start === 2) {
            time(120);
            jogador.familia = jogador.familia + 20;
            jogador.energia = jogador.energia + 5;
          } else if (start === 3) {
            time(80);
            jogador.familia = jogador.familia + 15;
            jogador.energia = jogador.energia + 5;
          } else if (start === 0) {
            break;
          }
          while (start != 1 && start != 0 && start != 3 && start != 0) {
            let print = "OPS! TENTE NOVAMENTE...";

            console.clear();
            console.log(print);
            if (jogador.familia < 75) {
              console.log(
                "Você precisa se fazer mais presente para com sua família."
              );
            }
            painel();
            console.log(`Família: ${jogador.familia}`);
            console.log(`
                  [1] Visitar os pais;
                  [2] Passear com o(a) filho(a);
                  [3] Comprar presente para a esposa;
                  [0] Voltar.
                  `);
            digite();

            if (start === 1) {
              jogador.familia = jogador.familia + 15;
              jogador.energia = jogador.energia + 5;
              time(180);
            } else if (start === 2) {
              jogador.familia = jogador.familia + 20;
              jogador.energia = jogador.energia + 5;
              time(120);
            } else if (start === 3) {
              jogador.familia = jogador.familia + 15;
              jogador.energia = jogador.energia + 5;
              time(80);
            } else if (start === 0) {
              break;
            }
          }
        }
      } else if (start === 5) {
        menuTransition++;
        while (start != 0) {
          console.clear();
          painel();
          console.log(`
            [1] Criar plano de aula;
            [2] Planos de aula prontos;
            [0] Voltar.
            `);
          digite();

          while (start != 1 && start != 2 && start != 0) {
            console.clear();
            let print = "OPS! TENTE NOVAMENTE...";
            console.log(print);
            painel();
            console.log(`
              [1] Criar plano de aula;
              [2] Planos de aula prontos;
              [0] Voltar.
              `);
            digite();
          }

          if (start === 0) {
            break;
          } else if (start === 1) {
            criarPlanoDeAula();
            jogador.energia = jogador.energia + 10;
          } else if (start === 2) {
            console.clear();
            console.log();
            if (PlanosDeAulaDaSemana === false) {
              console.log("Não há planos de aula prontos");
              console.log();
              prompt("Pressione ENTER para voltar");
            } else {
              console.log(PlanosDeAulaDaSemana);
              console.log();
              prompt("Pressione ENTER para voltar");
            }
          }
        }
      }
    }

    if (jogador.lazer === false) {
      jogador.energia = jogador.energia - 5;
    } else if (jogador.familia === false) {
      jogador.energia = jogador.energia - 5;
    } else if (jogador.almoco === false) {
      jogador.energia = jogador.energia - 15;
    } else if (jogador.higieneBucal === false) {
      jogador.energia = jogador.energia - 5;
    }

    while (menuTransition >= 6) {
      while (start != 4) {
        depoisDoTrabalho();
        if (start === 1) {
          //Jantar
          while (start != 3) {
            console.log(`
                      [1] Comer miojo;
                      [2] Pedir Ifood;
                      ... em breve mais opções
                      [3] Voltar;
                      `);
            digite();

            if (start === 1) {
              jogador.jantar = true;
              time(15);
              break;
            } else if (start === 2) {
              time(15);
              while (start != 5) {
                console.log(`
                      [1] Hamburguer;
                      [2] Pizza;
                      [3] Açaí
                      [4] Tropeiro;
                      [5] Voltar.
                      `);
                digite();
                if (start != 1 && start != 2 && start != 3 && start != 4) {
                  break;
                } else if (
                  start === 1 ||
                  start === 2 ||
                  start === 3 ||
                  start === 4
                ) {
                  jogador.jantar = true;
                  time(15);
                  break;
                }
              }
            }
            break;
          }
        } else if (start === 2) {
          //Aula (curso blue)
          while (start != 4) {
            let camera = false;
            let microfone = false;
            let entrarSala = false;
            console.clear();
            console.log(`
                      [1] Abrir Google Meet;
                      [2] Acessar Moodle;
                      [3] Registrar frequência;
                      [4] Sair.
                      `);
            digite();
            if (start === 4) {
              start = 2;
              break;
            }

            while (start != 4) {
              console.clear();
              console.log(`
                    [1] ${camera ? "Desligar camera" : "Ligar camera"};
                    [2] ${microfone ? "Desligar microfone" : "Ligar Microfone"};
                    [3] ${entrarSala ? "Sair da Sala" : "Entrar na Sala"};
                    [4] Sair
                    `);
              digite();
              if (start === 1) {
                camera = camera ? false : true;
              } else if (start === 2) {
                microfone = microfone ? false : true;
              } else if (start === 3) {
                entrarSala = entrarSala ? false : true;
                time(120);
              } else if (start === 4) {
                start = 2;
                break;
              }
            }
          }
        } else if (start === 3) {
          //Intervalo
          timeLapse(15);
        } else if (start === 4) {
          horas = 4;
          minutos = 30;
        }
      }
      rodadas++;
      start = 0;
      inicio = true;
      //Por último, verifica as folhas de ponto assinadas.
      if (pontoControle === 5) {
        while (true) {
          if (folhaDePonto.segunda === false) {
            jogador.energia = jogador.energia - 5;
          } else if (folhaDePonto.terca === false) {
            jogador.energia = jogador.energia - 5;
          } else if (folhaDePonto.quarta === false) {
            jogador.energia = jogador.energia - 5;
          } else if (folhaDePonto.quinta === false) {
            jogador.energia = jogador.energia - 5;
          } else if (folhaDePonto.sexta === false) {
            jogador.energia = jogador.energia - 5;
          }
          break;
        }
      }

      break;
    }
    if (pontoControle === 5) {
      jogar = false;
    } else {
      menuTransition = 0;
      jogador = {
        nome: "Alexandre",
        idade: 18,
        higieneBucal: false,
        cafeDaManha: false,
        almoco: false,
        jantar: false,
        materiaisDeTrabalho: false,
        trabalho: false,
        ponto: true,
        saude: true,
        doenca: "Nenhuma",
        lazer: false,
        familia: 50,
        dinheiroEmConta: 350,
        carro: false,
        moto: true,
        loteria: false,
        energia: 40,
      };

      trabalho = {
        primeiroBloco: false,
        segundoBloco: false,
        intervalo: false,
      };
    }
  }
}

console.log("Até a próxima!");

// console.log(`
// [1] Fazer janta;
// [2] Aula (Curso Blue);
// [3] Intervalo;
// [4] Dormir;
// `);
