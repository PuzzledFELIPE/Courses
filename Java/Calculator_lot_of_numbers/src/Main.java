import br.com.dio.calc.Operation;

import java.util.Arrays;
import java.util.Scanner;

public class Main {

    public static void main(String[] args){
        var scanner = new Scanner(System.in);
        System.out.println("Informe o número da operação que deseja realizar ( 1 = sum, 2 = subtraction)");
        var operationOption = scanner.nextInt();
        while(operationOption>2 || operationOption<1){
            System.out.println("Escolha uma opção válida ( 1 = sum, 2 = subtraction)");
        }
        var selectedOperation = Operation.values()[operationOption - 1];
        System.out.println("informe os números que serão usados separando-os com vírgula (ex.: 1,2,3,4)");
        var numbers = scanner.next();
        var numberArray = Arrays.stream(numbers.split(","))
                .mapToLong(Long::parseLong)
                .toArray();
        var result = selectedOperation.getOperationCallback().exec(numberArray);
        var operationToShow = numbers.replaceAll(",", selectedOperation.getSignal());
        System.out.printf("o resultado da operação %s é %s \n", operationToShow, result);
    }
}