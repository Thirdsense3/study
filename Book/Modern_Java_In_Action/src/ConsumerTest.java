import java.util.Arrays;
import java.util.List;

public class ConsumerTest {
    @FunctionalInterface
    public interface Consumer<T> {
        void accept(T t);
    }

    public <T> void forEach(List<T> list, Consumer<T> consumer) {
        for (T t : list) {
            consumer.accept(t);
        }
    }

    ConsumerTest() {
        forEach(Arrays.asList(1,2,3,4,5),(Integer i )-> System.out.println(i));
        // = forEach(Arrays.asList(1,2,3,4,5), System.out::println);
    }
}
