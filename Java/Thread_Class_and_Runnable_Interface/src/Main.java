import javax.swing.plaf.synth.SynthButtonUI;
import java.util.ArrayList;
import java.util.List;
import java.util.Queue;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.SynchronousQueue;
import java.util.concurrent.atomic.AtomicInteger;

public class Main {


    //private static Queue<Integer> numbers = new LinkedBlockingQueue<>(250_000);


    private static AtomicInteger number = new AtomicInteger(0);

    public static void main(String[] args){
        /*
        Runnable inc = () -> {
            for(int i =0; i < 100_000; i++){
                inc(i);
            }
        };
        Runnable dec = () -> {
            for(int i =0; i < 100_000; i--){
                inc(i);
            }
        };

        Runnable show = () -> {
            for(int i =0; i < 250_000; i++){
                show();
            }
        };

        new Thread(inc).start();
        new Thread(dec).start();
        new Thread(show).start();
        */

        Runnable inc = () -> {
            for(int i =0; i < 100; i++){
                number.incrementAndGet();
            }
        };
        Runnable dec = () -> {
            for(int i =0; i < 100; i++){
                number.decrementAndGet();
            }
        };

        Runnable show = () -> {
            for(int i =0; i < 100; i++){
                System.out.println(number.get());
            }
        };

        var execInc = new Thread(inc);
        execInc.start();
        var execDec = new Thread(dec);
        execDec.start();
        var execShow = new Thread(show);
        execShow.start();

    }

}