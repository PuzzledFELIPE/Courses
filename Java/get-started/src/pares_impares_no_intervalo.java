import java.util.Scanner;

public class pares_impares_no_intervalo {
    public static void main(String[] args) {
        var scanner = new Scanner(System.in);
        System.out.println("Digite um número: ");
        var numero1 = scanner.nextFloat();
        var scanner1 = new Scanner(System.in);
        System.out.println("Digite um número maior que o primeiro: ");
        var numero2 = scanner.nextFloat();

        var scanner2 = new Scanner(System.in);
        System.out.println("Quais números você deseja? Pares ou ímpares? ");
        var parImpar = scanner.next();


        switch (parImpar.toLowerCase()){
            case "pares":
                for (var i = numero1; i<=numero2; i++){
                    if (i % 2 == 0){
                        System.out.println(i);
                    }
                }
            break;
            case "ímpares":
                for (var i = numero1; i<=numero2; i++){
                    if (i % 2 == 1){
                        System.out.println(i);
                    }
                }
            break;
        }
    }
}
