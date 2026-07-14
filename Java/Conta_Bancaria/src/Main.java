import java.util.Scanner;

public class Main{

    public static int contador = 0;

    public final static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args){
        scanner.useDelimiter("\\n");

        // Simulação simples: criar o usuário localmente (sem banco de dados)
        createUser();

        // Na primeira execução, o método deposito agora trata do primeiro depósito e configura o cheque especial.
        if(contador == 0) {
            Conta.deposito();
            // Mostrar os valores configurados pelo depósito inicial
            System.out.println("Depósito inicial de R$" + Conta.getValorDeposito() + " registrado. Cheque especial: R$" + Conta.getChequeEspecial());
            contador+=1;
        }

        // Depois do primeiro depósito, o fluxo continua normalmente com o menu.
        menuPrincipal();
    }

    private static void menuPrincipal() {
        var option = -1;

        do {
            System.out.println("===Bem vindo de volta, " + User.getName()+ ", escolha uma das opções===");
            System.out.println("1 - Consultar Saldo");
            System.out.println("2 - Consultar Cheque Especial");
            System.out.println("3 - Depositar Dinheiro");
            System.out.println("4 - Sacar Dinheiro");
            System.out.println("5 - Pagar Boleto");
            System.out.println("6 - Verificar se Está Usando o Cheque Especial");
            System.out.println("7 - Usar Cheque Especial");
            System.out.println("0 - Sair");

            // Ler linha completa e converter para inteiro para evitar InputMismatchException
            String line = scanner.nextLine().trim();
            if(line.isEmpty()){
                // Se o usuário apenas pressionou enter, repetir o menu
                continue;
            }
            try {
                option = Integer.parseInt(line);
            } catch (NumberFormatException e) {
                System.out.println("Opção inválida");
                continue;
            }

            switch (option) {
                case 1 -> consultaSaldo();
                case 2 -> consultaChequeEspecial();
                case 3 -> Conta.deposito();
                case 4 -> Conta.saque();
                case 5 -> Conta.pagarBoleto();
                case 6 -> verificarUsoChequeEspecial();
                case 7 -> usarChequeEspecial();
                case 0 -> System.exit(0);
                default -> System.out.println("Opção inválida");
            }

            contador +=1;
        } while (true);
    }

    private static void usarChequeEspecial() {
        Conta.setUseChequeEspecial(true);
        Conta.usarChequeEsecial();
        System.out.println("O saldo atual é de R$" + Conta.getSaldo());
    }

    private static void verificarUsoChequeEspecial() {
        if(Conta.isUseChequeEspecial()) {
            System.out.println("A conta está usando um cheque especial");
        } else {
            // O else deixa claro que essa mensagem só aparece quando o cheque especial não está ativo.
            System.out.println("A conta não está usando um cheque especial");
        }
    }

    private static void consultaSaldo() {
        System.out.println("O valor atual do saldo é de R$" + Conta.getSaldo());
    }

    private static void consultaChequeEspecial() {
        System.out.println("O valor disponível de cheque especial é de R$" + Conta.getChequeEspecial());
    }

    public static void createUser(){
        var name = "";
        while (name == null || name.isEmpty()) {
            System.out.println("Bem vindo, digite seu nome para criar sua conta: ");
            name = scanner.next();
            var user = new User(name);
        }
    }
}