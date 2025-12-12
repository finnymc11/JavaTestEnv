import java.io.*;
import java.util.*;

public class refresher {
    //functions
    public static int absoluteValue(int x) {
        if (x < 0) return -x;
        else return x;
    }

    public static boolean primeTest(int n){
        if (n<2) return false;
        for (int i = 2; i <= n/i; i++){
            if (n%i == 0) return false;
        }
        return true;
    }
    public static void main(String[] args){

        //primitives
        int a = 5; //integers
        char b = 'c'; //characters
        long d = 300; //bigger int
        double e = 10.43; //floating-point numbers
        boolean f = true; //t or f
        String c = "string"; //sequence of char

        int x;
        x = 10;

        //Math
        double positive = Math.abs(-10.5);
        double max = Math.max(10, 12);
        double min = Math.max(10, 12);
        String agestr = "22";
        int age = Integer.parseInt(agestr);
        double square = Math.sqrt(9);
        double randomnum = Math.random();
        long numberlong = Math.round(1.249124141);
        int num = (int) Math.round(3.1491035);
        int num2 = 11*(int)2.5;

        //better way of creating a random num
        Random rand = new Random();
        int randnum = rand.nextInt(10) + 1; //random number 1-10

        //arrays, lists, hash set, hash map, linked list, array deque, 2d array
        int[] nums = new int[5];
        String[] names = new String[3];
        int[] numsarr = {1,2,3,4}; //with values
        String[] SUITS = {"clus","spades","diamonds","hearts"}; //with values
        List<Integer> list = new ArrayList<>();
        Set<Integer> set = new HashSet<>();
        Map<String, Integer> map = new HashMap<>();
        Queue<Integer> q = new LinkedList<>();
        Deque<Integer> stack = new ArrayDeque<>();
        int[][] twod = new int[2][2];

        //create an array with random values
        int[] array1 = new int[5];
        for (int i=0; i<5; i++){
            Random rand1 = new Random();
            int randnum1 = rand.nextInt(10)+1;
            array1[i] = randnum1;
        }

        //print the array values one per line
        for (int i=0; i<5; i++){
            System.out.println(array1[i]);
        }

        //find the maximum of the array values
        int maximum = 0;
        for (int i=0; i<5; i++){
            int number1 = array1[i];
            if (number1>maximum){
                maximum = number1;
            }
        }
        System.out.println("max is: " + maximum);

        //compute the average of the array values
        int sum = 0;
        for (int i=0; i<5; i++){
            int number1 = array1[i];
            sum += number1;
        }
        int average = sum/5;
        System.out.println("sum is: " + sum);
        System.out.println("average is: " + average);

        //reverse the array
        int[] reversearr = new int[5];
        for (int i=0; i<5; i++){
            reversearr[4-i] = array1[i];
        }
        System.out.println(Arrays.toString(reversearr));

        //copy sequence of values to another array
        int[] newarr = new int[5];
        for (int i=0; i<5; i++){
            newarr[i] = array1[i];
        }
        System.out.println(Arrays.toString(newarr));

        //Function tests
        int test = -20;
        System.out.println("absolute value is " + absoluteValue(test));

        int primenum = 10;
        System.out.println("is " + primenum + " prime? " + primeTest(primenum));

        map.put("apple", 2);
        q.add(1);
        q.poll();
    }
}
