import java.util.Scanner;

public class calculo_imc {
    public static void main(String[] args) {
        var scanner = new Scanner(System.in);
        System.out.println("Digite seu peso: ");
        var peso = scanner.nextFloat();
        var scanner1 = new Scanner(System.in);
        System.out.println("Digite sua altura: ");
        var altura = scanner.nextFloat();

        var imc = peso/(Math.pow(altura, 2));

        if (imc < 18.5){
            System.out.println("Abaixo do peso");
        } else if (18.6<= imc && imc <=24.9) {
            System.out.println("Peso ideal");
        } else if (25<= imc && imc <=29.9) {
            System.out.println("Levemente acima do peso");
        } else if (30<= imc && imc <=34.9) {
            System.out.println("Obesidade grau I");
        } else if (35<= imc && imc <=39.9) {
            System.out.println("Obesidade grau II (Severa)");
        } else if (imc>40) {
            System.out.println("Obesidade III (Mórbida)");
        }
    }
}
