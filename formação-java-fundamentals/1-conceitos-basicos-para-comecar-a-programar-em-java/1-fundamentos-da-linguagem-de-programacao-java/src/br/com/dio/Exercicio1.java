package br.com.dio;

// 1) Escreva um código que receba o nome e o ano de nascimento de alguém e imprima na tela a seguinte mensagem:
// "Olá 'Fulano' você tem 'X' anos"

import java.util.Scanner;

public class Exercicio1 {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        System.out.println("Digite o nome seu nome: ");
        var name = scanner.nextLine();
        System.out.println("Digite o seu ano de nascimento: ");
        var birth = scanner.nextInt();

        var result = 2025 - birth;

        System.out.printf("Olá %s você tem %s anos\n", name, result);





    }
}
