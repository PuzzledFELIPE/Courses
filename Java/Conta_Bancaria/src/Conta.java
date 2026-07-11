import java.util.Scanner;

public class Conta {

    private float saldo;

    private float chequeEspecial;

    private float valorDeposito;

    private float valorSaque;

    private boolean primeiroDeposito;

    private float valorBoleto;
    //não esquecer do boleto

    public float getSaldo() {
        return saldo;
    }

    public float getValorDeposito() { return valorDeposito; }

    public float getChequeEspecial() {
        return chequeEspecial;
    }

    public void definirValorCheque(){
        if(primeiroDeposito && valorDeposito<=500){
            chequeEspecial = 50;
        } else if(primeiroDeposito && valorDeposito>500) {
            chequeEspecial = 0.5F*valorDeposito;
        }
    }

    public void isPrimeiroDeposito(){
        primeiroDeposito = Main.contador == 0;
    }

    public void deposito() {
        var scanner = new Scanner(System.in);
        float valorDeposito = 0;
        if (!primeiroDeposito) {
            System.out.println("Digite o valor do depósito: ");
            valorDeposito = scanner.nextFloat();
            System.out.println("Depositando...");
            System.out.println("Depósito feito com sucesso, o saldo atual é de R$" + (saldo + valorDeposito));
        } else {
            System.out.println("Digite o valor do seu primeiro depósito: ");
            valorDeposito = scanner.nextFloat();
            //colocar o print do primeiro depósito na main
        }
    }

    public void saque(){
        var scanner = new Scanner(System.in);
        float valorSaque = 0;
        System.out.println("Digite o valor do Saque: ");
        valorSaque = scanner.nextFloat();
        System.out.println("Realizando saque...");
        System.out.println("Saque feito com sucesso, o saldo atual é de R$" + (saldo - valorSaque));
    }

    public void pagarBoleto(){
        var scanner = new Scanner(System.in);
        System.out.println("Digite o valor do boleto a pagar: ");
        valorBoleto = scanner.nextFloat();

        if(valorBoleto>saldo){
            System.out.println();//mensagem de saldo insuficiente e indicar fazer depósito;
        }

    }
}
