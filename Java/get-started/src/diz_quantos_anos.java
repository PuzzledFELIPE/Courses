import java.util.Scanner;

public class diz_quantos_anos {
    public static void main(String[] args){
        var scanner = new Scanner(System.in);
        System.out.println("Digite seu nome: ");
        var nome = scanner.next();
        var scanner1 = new Scanner(System.in);
        System.out.println("Digite sua idade: ");
        var idade = scanner.next();
        System.out.printf("Olá %s, você tem %s anos\n", nome, idade);
    }
}
