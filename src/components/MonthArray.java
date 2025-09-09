package components;
import java.util.HashMap;

public class MonthArray {
    public static HashMap<Integer, Integer> getMonthMap() {
        HashMap<Integer, Integer> monthMap = new HashMap<>();
        monthMap.put(1, 31);
        monthMap.put(2, 28);
        monthMap.put(3, 31);
        monthMap.put(4, 30);
        monthMap.put(5, 31);
        monthMap.put(6, 30);
        monthMap.put(7, 31);
        monthMap.put(8, 31);
        monthMap.put(9, 30);
        monthMap.put(10, 31);
        monthMap.put(11, 30);
        monthMap.put(12, 31);
        return monthMap;
    }
}
