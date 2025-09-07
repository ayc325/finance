import java.util.*;
public class HourlyValueMenu {
    public static void main(String[] args) {
        // Your code here
        Scanner scanner = new Scanner(System.in);
        double annualSalary = 0.0;
        double annualSalaryToHourly = 0.0;
        double hourlyRate = 0.0;
        int customWeeks = 0;
        int customHours = 0;
        System.out.println("Select the type of hourly value:");
        System.out.println("[0] Salary (based on 52 weeks and 40 hours per week)");
        System.out.println("[1] Hourly Rate");
        System.out.println("[2] Salary, not based on 52 weeks and 40 hours per week");
        int choice = scanner.nextInt();
        if (choice == 0) {
            System.out.println("Enter your annual salary:");
            annualSalary = scanner.nextDouble();
            annualSalaryToHourly = annualSalary/52/40;
            System.out.println("Your hourly rate is: " + annualSalaryToHourly);
        }
        else if (choice == 1) {
            System.out.println("Enter your hourly rate:");
            hourlyRate = scanner.nextDouble();
            System.out.println("Your hourly rate is: " + hourlyRate);
        }
        else if (choice == 2) {
            System.out.println("Enter the number of weeks worked in a year:");
            customWeeks = scanner.nextInt();
            System.out.println("Enter the number of hours worked in a week:");
            customHours = scanner.nextInt();
            double customSalaryToHourly = choice/customWeeks/customHours;
            System.out.println("Your hourly rate is: " + customSalaryToHourly);
        }
        else {
            System.out.println("Invalid choice.");
        }
        System.out.println("Enter the cost of an item you would like to purchase:");
        double itemCost = scanner.nextDouble();
        double hourlyRateFinal = (choice == 0) ? annualSalaryToHourly : (choice == 1) ? hourlyRate : (annualSalary/customWeeks/customHours);
        int hoursNeeded = (int) Math.ceil(itemCost / hourlyRateFinal);
        System.out.println("You need to work " + hoursNeeded + " hours to afford this item.");
        scanner.close();

    }
}