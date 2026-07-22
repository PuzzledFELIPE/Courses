import java.util.HashMap;
import java.util.Map;

public class Main{

    public static void main(String[] args){

        //exemplo de como pegar chaves e valores para um mapa a partir de um Json
        var value = """
                {"name":"João", "age":18}""";
        Map<String, String> map = new HashMap<>();

        value = value.replace("{", "").replace("}","").replace("\"", "");
        var valueArr = value.split(",");
        for(var v : valueArr){
            var keyValue = v.split(":");
            map.put(keyValue[0], keyValue[1]);
        }
        System.out.println(map);


    }
}