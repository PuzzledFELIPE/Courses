import javax.swing.*;
import java.util.List;
import java.util.function.Consumer;

public class Main {

    public static void main(String[] args) {
        List<String> nomes = List.of("Ana", "Bruno", "Carlos", "Amanda");

// Usando Predicate para filtrar e Consumer para imprimir
        nomes.stream()
                .filter(nome -> nome.startsWith("A")) // Predicate: Filtra quem começa com 'A'
                .forEach(System.out::println); // Consumer: Imprime cada um
    }
}