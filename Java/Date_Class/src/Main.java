import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;

public class Main {

    public static void main(String[] args){

        //Date
        /*var date = new Date();
        DateFormat formatter = new SimpleDateFormat("dd/MM/yyyy - HH:mm:ss");
        System.out.println(date);
        System.out.println(formatter.format(date));*/
        //===========================================================

        LocalDate localDate = LocalDate.now();
        var strDate = "22/12/2015";
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        System.out.println(formatter.format(localDate));
        //System.out.println(LocalDate.parse(strDate, formatter)); // não quer exibir
        System.out.println(formatter.format(LocalDate.parse(strDate, formatter))); // faz a fomatação pra exibição

        System.out.println("=======================================================");

        LocalTime localTime = LocalTime.now();
        DateTimeFormatter formatter2 = DateTimeFormatter.ofPattern("hh:mm:ss");
        System.out.println(formatter2.format(localTime));

        System.out.println("=======================================================");

        LocalDateTime localDateTime = LocalDateTime.now();
        DateTimeFormatter formatter3 = DateTimeFormatter.ISO_DATE_TIME;
        System.out.println(formatter3.format(localDateTime));
    }
}