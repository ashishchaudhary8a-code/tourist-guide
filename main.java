import java.awt.Desktop;
import java.io.File;

public class main {
    public static void main(String[] args) {
        try {
            File htmlFile = new File("index.html");
            Desktop.getDesktop().browse(htmlFile.toURI());
        } catch (Exception e) {
            System.out.println("Unable to open application");
        }
    }
}