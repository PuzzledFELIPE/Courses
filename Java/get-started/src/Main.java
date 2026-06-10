import java.util.Scanner;

public class Main {

    public static void main(String[] args){
        var scanner = new Scanner(System.in);
        System.out.println("Informe o primeiro número:");
        var value1 = scanner.nextInt();
        System.out.println("Informe o primeiro número:");
        var value2 = scanner.nextInt();
        System.out.printf(value1+" + "+value2+ " = " + (value1+value2));
    }
}
