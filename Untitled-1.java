// Lab 3: static members and final keyword
class StaticDemo {
    static int count;
    static { // static block
        count = 100;
        System.out.println("Static block executed. count=" + count);
    }
    static void increment() { count++; }

    void show() { System.out.println("count=" + count); }
}

final class FinalClass { // cannot be extended
    final int CONST = 10; // cannot be reassigned
    final void show() { System.out.println("Final method in FinalClass"); }
}

public class Lab3_StaticFinal {
    public static void main(String[] args) {
        StaticDemo.increment();
        new StaticDemo().show();

        FinalClass fc = new FinalClass();
        fc.show();
        System.out.println("CONST=" + fc.CONST);

        System.out.println("Lab No.: 3");
        System.out.println("Name: Bhuwan Bohara");
        System.out.println("Roll No./Section: 139 / [Section]");
    }
}
