import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Main {
    public Main() throws IOException {
    }

    public static void main(String[] args) {
        System.out.println("Hello world!");
    }

    @FunctionalInterface
    public interface BufferedReaderProcessor {
        String process(BufferedReader bufferedReader) throws IOException;
    }

    public String processFile(BufferedReaderProcessor bufferedReaderProcessor) throws IOException {
        try (BufferedReader br = new BufferedReader(new FileReader("data.txt"))) {
            return bufferedReaderProcessor.process(br);
        }
    }

    String oneLine = processFile(BufferedReader::readLine);

    String twoLine = processFile((BufferedReader br) -> br.readLine() + br.readLine());


}