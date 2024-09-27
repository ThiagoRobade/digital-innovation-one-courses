import java.util.Scanner;

public class SimulacaoBancaria {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double saldo = 0;
        // Loop infinito para manter o programa em execução até que o usuário decida
        // sair
        while (true) {

            int opcao = scanner.nextInt();
            // Dica: Utilze o switch/case para o programa realizar as operações escolhidas
            // pelo usuário.
            switch (opcao) {
                case 1:
                    System.out.println("Saldo atual: " + saldo);
                    double valorDepositado = scanner.nextDouble();
                    saldo += valorDepositado;
                    
                    break;
                case 2:
                    double valorSaque = scanner.nextDouble();
                    saldo -= valorSaque;
                    if (saldo < valorSaque) {
                        System.out.println("Saldo insuficiente");
                    }else
                    System.out.println("Saldo atual: " + saldo);
                    break;
                case 3:
                    System.out.println("Saldo atual " + saldo);
                    break;
                case 0:
                    System.out.println("Programa encerrado!");
                    return;
                // Exibe mensagem de opção inválida se o usuário escolher uma opção inválida:
                default:
                    System.out.println("Opção inválida. Tente novamente.");

            }
        }
    }
}