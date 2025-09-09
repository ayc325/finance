package components;

import java.util.HashMap;


public class RandomGenerator {
    public static HashMap<Integer, Integer> getRandomSavingsAmount() {
        HashMap<Integer, Integer> dollarMap = new HashMap<>();
        dollarMap.put(28, 31);
        dollarMap.put(30, 28);
        dollarMap.put(31, 31);
        return dollarMap;
    }
}
