import java.util.Scanner;

public class area_retangulo {
    public static void main(String[] args){
        var scanner = new Scanner(System.in);
        System.out.println("Digite o comprimento do retângulo: ");
        var comp = scanner.nextFloat();

        var scanner1 = new Scanner(System.in);
        System.out.println("Digite a altura do retângulo: ");
        var alt = scanner.nextFloat();

        var area = comp * alt;
        System.out.printf("A área do seu quadrado é de %s cm²", area);
    }
}
