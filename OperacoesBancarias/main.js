const readlineSync = require('readline-sync');

function simulacaoBancaria() {
    let saldo = 0;
    let continuar = true;

    while (continuar) {
        console.log("************ MENU ************");
        console.log(" 1 Depositar");
        console.log(" 2 Sacar");
        console.log(" 3 Consultar Saldo");
        console.log(" 0 Encerrar");
        console.log("************  ~  ************\n");

        let opcao = readlineSync.question("Opcao: ");
        opcao = parseInt(opcao);

        switch (opcao) {
            case 1:
                let deposito = parseFloat(readlineSync.question("Digite o valor que deseja depositar: "));
                if (deposito <= 0) {
                    console.log("\nDigite um valor maior que zero! \n");
                } else {
                    saldo += deposito;
                    console.log(`Saldo atual: ${saldo.toFixed(1)}\n`);
                }
                break;

            case 2:
                let saque = parseFloat(readlineSync.question("Digite o valor que deseja sacar: "));
                if (saque <= 0) {
                    console.log("\nDigite um valor maior que zero! \n");
                } else {
                    if (saque > saldo) {
                        console.log("Saldo insuficiente!");
                        console.log(`Saldo atual: ${saldo.toFixed(1)}\n`);
                    } else {
                        saldo -= saque;
                        console.log(`Saldo atual: ${saldo.toFixed(1)}\n`);
                    }
                }
                break;

            case 3:
                console.log(`Saldo atual: ${saldo.toFixed(1)}\n`);
                break;

            case 0:
                console.log("Programa encerrado.\n");
                continuar = false;
                break;

            default:
                console.log("Opção inválida. Tente novamente.\n");
        }
    }
}

simulacaoBancaria();
