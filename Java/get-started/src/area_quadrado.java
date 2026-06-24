import java.util.Scanner;

public class area_quadrado {
    public static void main(String[] args){
        var scanner = new Scanner(System.in);
        System.out.println("Digite o comprimento do lado do quadrado: ");
        var lado1 = scanner.nextFloat();

        var area = Math.pow(lado1, 2);
        System.out.printf("A área do seu quadrado é de %s cm²", area);
    }
}
