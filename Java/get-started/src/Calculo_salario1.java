import java.util.Scanner;

public class Calculo_salario1 {
    public static void main(String[] args){
        Scanner salario = new Scanner(System.in);
        System.out.println("Digite seu salário: ");
        float salarioBruto =  salario.nextFloat();
        Scanner adicional = new Scanner(System.in);
        System.out.println("Digite o valor dos adicionais recebidos: ");
        float adicionalBeneficios =  adicional.nextFloat();

        float valorImposto = 0;
        if (salarioBruto >= 0 && salarioBruto <= 1100){
            valorImposto = 0.05F * salarioBruto;
        } else if (salarioBruto >= 1100.01 && salarioBruto <= 2500) {
            valorImposto = 0.1F * salarioBruto;
        } else if (salarioBruto >2500) {
            valorImposto = 0.15F * salarioBruto;
        }

        float salarioLiquido = (salarioBruto - valorImposto) + adicionalBeneficios;
        System.out.println(String.format("O seu saário líquido é de %.2f", salarioLiquido));
    }
}
