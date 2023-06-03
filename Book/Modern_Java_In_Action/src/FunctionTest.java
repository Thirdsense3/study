import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.function.Function;

public class FunctionTest {

    public <T, R> List<R> map(List<T> list, Function<T, R> function) {
        List<R> result = new ArrayList<>();

        for (T t : list) {
            result.add(function.apply(t));
        }

        return result;
    }

    //[7,2,6]
    List<Integer> l = map(
            Arrays.asList("lambdas", "in", "action"),
            (String s) -> s.length() // Function의 applu 메서드를 구현하는 람다 표현식.
    );

}
