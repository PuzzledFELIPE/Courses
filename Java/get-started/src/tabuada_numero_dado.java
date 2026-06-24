import java.util.Scanner;

public class tabuada_numero_dado {
    public static void main(String[] args){
        var scanner = new Scanner(System.in);
        System.out.println("Digite um número: ");
        var number = scanner.nextInt();

        for(var i = 1;i <=10; i++){
            System.out.println(i*number);
        }
    }
}
