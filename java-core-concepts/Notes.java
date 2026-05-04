
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

// package java-core-concepts;
public class Notes {
    
}


// class Counter{
//     int count = 0;

//     synchronized void increment(){ // synchronized method
//         count++;
//     }
// }


class Counter{
    int count = 0;

    void increment(){
        synchronized (this) {
            count++;
        }
    }
}


class Test{
    static synchronized void display(){
        System.out.println("Static method");
    }
}



class Shared{
    synchronized void print() throws InterruptedException{
        wait(); // release lock & wait
        System.out.println("Resumed...");
    }

    synchronized void resumeThread(){
        notify();
    }
}


class ExecutorDemo{
    public static void main(String[] args) {
        ExecutorService service = Executors.newFixedThreadPool(3);
        
        service.execute(() -> {
            System.err.println(Thread.currentThread().getName());
        });

        service.shutdown();
    }
}



// class Counter{ // use Atomic Classes (sometimes better than synchronized)
//     AtomicInteger count = new AtomicInteger();

//     void increment(){
//         count.incrementAndGet();
//     }
// }


class Counter{
    ReentrantLock lock = new ReentrantLock();
    int count = 0;

    void increment(){
        lock.lock();
        try{
            count++;
        }finally{
            lock.unlock();
        }

        
    }
}


