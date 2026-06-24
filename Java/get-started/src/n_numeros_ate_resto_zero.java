import java.util.Scanner;

public class n_numeros_ate_resto_zero {
    public static void main(String[] args) {
        var scanner = new Scanner(System.in);
        System.out.println("Digite um número: ");
        var primeiroNumero = scanner.nextFloat();
        int num;
        do {
            for (;;) {
                var scanner1 = new Scanner(System.in);
                System.out.println("Digite um número: ");
                num = scanner.nextInt();
                if(primeiroNumero>num){
                    continue;
                } else {
                    System.out.println(num % primeiroNumero);
                    break;
                }
            }
        }while (num % primeiroNumero != 0);
    }
}
