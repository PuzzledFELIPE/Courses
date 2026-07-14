import java.util.Scanner;

public class Conta {

    private static float saldo;

    private static float chequeEspecial;

    private static boolean useChequeEspecial = false;

    private static float valorUsadoCheque;

    private static float taxaCheque;

    private static float valorDeposito;

    private float valorSaque;

    private static boolean primeiroDeposito;

    private static float valorBoleto;


    public static boolean isUseChequeEspecial() {
        return useChequeEspecial;
    }

    public static float getTaxaCheque() {
        return taxaCheque;
    }

    public static void setUseChequeEspecial(boolean useChequeEspecial) {
        Conta.useChequeEspecial = useChequeEspecial;
    }

    public static void usarChequeEsecial(){
        if(isUseChequeEspecial()){
            var scanner = new Scanner(System.in);
            System.out.println("Digite o valor do cheque que deseja usar: ");
            valorUsadoCheque = scanner.nextFloat();

            saldo = saldo + valorUsadoCheque;

            if(valorUsadoCheque>=chequeEspecial){
                taxaCheque = 0.2f * valorUsadoCheque;
                System.out.println("Você utilizou mais do que o limite do cheque especial, será cobrado uma taxa de 20% sobreo valor utilizado");
                System.out.println("O valor atual da conta é de R$"+taxaCheque);
            }else {
                System.out.println("Valor adicionado à conta, assim que possível pagar o valor utilizado!");
            }
        }
    }

    public static float getSaldo() {
        return saldo;
    }

    public static float getValorDeposito() { return valorDeposito; }

    public static float getChequeEspecial() {
        return chequeEspecial;
    }

    public static void definirValorCheque(){
        // Define o valor do cheque especial após o primeiro depósito
        if(primeiroDeposito && valorDeposito<=500){
            chequeEspecial = 50;
        } else if(primeiroDeposito && valorDeposito>500) {
            chequeEspecial = 0.5F*valorDeposito;
        }
    }

    public static void deposito() {
        var scanner = new Scanner(System.in);
        float inputValorDeposito = 0;
        // Primeiro depósito: configura parâmetros iniciais (valorDeposito, chequeEspecial)
        if (!primeiroDeposito) {
            System.out.println("Por favor, " + User.getName() + " digite o valor do seu primeiro depósito: ");
            inputValorDeposito = scanner.nextFloat();
            saldo += inputValorDeposito;
            valorDeposito = inputValorDeposito; // armazena o valor do primeiro depósito
            primeiroDeposito = true;
            definirValorCheque();
            System.out.println("Depósito feito com sucesso, o saldo atual é de R$" + (saldo) + " e o valor do cheque especial é de R$ " + chequeEspecial);
        } else {
            System.out.println("Digite o valor do depósito: ");
            inputValorDeposito = scanner.nextFloat();
            saldo += inputValorDeposito;
            System.out.println("Depositando...");
            System.out.println("Depósito feito com sucesso, o saldo atual é de R$" + (saldo));
        }
    }

    public static void saque() {
        if (saldo >0  && Main.contador!=0) {
            var scanner = new Scanner(System.in);
            float valorSaque = 0;
            System.out.println("Digite o valor do Saque: ");
            valorSaque = scanner.nextFloat();
            System.out.println("Realizando saque...");
            saldo -= valorSaque;
            System.out.println("Saque feito com sucesso, o saldo atual é de R$" + (saldo));
        }

        System.out.println("Por favor, deposite dinheiro primeiro para poder realizar o saque");
    }

    public static void pagarBoleto(){
        var scanner = new Scanner(System.in);
        System.out.println("Digite o valor do boleto a pagar: ");
        valorBoleto = scanner.nextFloat();

        if(valorBoleto>saldo && (chequeEspecial>(valorBoleto-saldo))){
            System.out.println("Saldo insuficiente, faça um depósito para que o saldo fique suficiente ou use seu chque especial para pagar o boleto");//mensagem de saldo insuficiente e indicar fazer depósito;
        }else if(valorBoleto>saldo && !(chequeEspecial>(valorBoleto-saldo))) {
            System.out.println("Saldo insuficiente, faça um depósito para que o saldo fique suficiente para pagar o boleto");//mensagem de saldo insuficiente e indicar fazer depósito;
        }else{
            saldo -= valorBoleto;
            System.out.println("Boleto pago com sucesso, o saldo da conta no momento é de R$" + saldo);
        }
    }
}
