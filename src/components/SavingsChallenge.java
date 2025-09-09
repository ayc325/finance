package components;
import java.util.Random;
import java.util.Scanner;
import java.time.LocalDate;
import components.MonthArray;

public class SavingsChallenge {
    public static void main(String[] args) {
        // Your code here
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter your total savings goal:");
        double savingsGoal = scanner.nextDouble();
        int currentMonth = LocalDate.now().getMonthValue(); // 1 = January, 12 = December

        // Example usage:
        java.util.HashMap<Integer, Integer> monthMap = MonthArray.getMonthMap();
        int daysInCurrentMonth = monthMap.get(currentMonth);
        int randomSavingsAmount = getRandomNumberInRange(1, daysInCurrentMonth);
        System.out.println("Random savings amount for month " + currentMonth + ": " + randomSavingsAmount);
        scanner.close();
    }
    public static int getRandomNumberInRange(int min, int max) {
        Random rand = new Random();
        return rand.nextInt((max - min) + 1) + min;
    }
}
