// package java-core-concepts;

public class MyRunnable implements Runnable {
    @Override
    public void run(){
        System.out.println("Runnable thread running...");
    }


    public static void main(String[] args) {
        Thread t = new Thread(new MyRunnable());
        t.start();
    }
}
