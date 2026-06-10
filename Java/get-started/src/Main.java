import java.util.Scanner;

public class Main {

    private final static String WELCOME_MESSAGE = "Olá, informe seu nome";

    public static void main(String[] args){
        //Meu comentário
        Scanner scanner = new Scanner(System.in);
        System.out.println(WELCOME_MESSAGE);
        String name = scanner.next();
        System.out.println("Olá, informe sua idade");
        int age = scanner.nextInt();
        System.out.printf("Olá %s sua idade é %s \n", name, age);
    }
}
