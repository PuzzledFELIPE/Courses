import java.util.Scanner;

public class diferenca_idade {
    public static void main(String[] args) {
        var scanner = new Scanner(System.in);
        System.out.println("Digite a idade da primeira pessoa: ");
        var idade1 = scanner.nextFloat();
        var scanner1 = new Scanner(System.in);
        System.out.println("Digite a idade da segunda pessoa: ");
        var idade2 = scanner.nextFloat();

        var dif = idade1 - idade2;
        System.out.printf("A diferença de idades é de %s", dif);
    }
}
