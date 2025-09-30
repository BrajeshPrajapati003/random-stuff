public class hibernate {}




import java.beans.BeanProperty;

public class Student{
    public static void main(String[] args) {
        
    }
}

// Create

Session session = factory.openSession();
Transaction tx = session.beginTransaction();

Student s = new Student();
s.setName("Brajesh");
s.setAge(21);

session.save(s);
tx.commit();
session.close();

// Read

Session session = factory.openSession();
// fetch by primary key
Student s = session.get(Student.class, 1);
System.out.println(s.getName());
session.close();


// Update

Session session = factory.openSession();
Transaction tx = session.beginTransaction();

Student s = session.get(Student.class, 1);
s.setAge(22);

session.update(s);
tx.commit();
session.close();


// Delete

Session session = factory.openSession();
Transaction tx = session.beginTransaction();

Student s = session.get(Student.class, 1);
session.delete(s);

tx.commit();
session.close();


// get vs load

// Immediate DB hit
Product p1 = session.get(Product.class, 1L);
// Returns proxy
Product p2 = session.load(Product.class, 2L);



@OneToMany(mappedBy = "category", fetch = FetchType.LAZY)
private List<Product> products;


// First hit → DB
session.get(Product.class, 1L);
// Second hit → Cache
session.get(Product.class, 1L);


Transaction tx = session.beginTransaction();
session.save(new Product("Mobile", 5000));
tx.commit();



@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class Vehicle {}

@Entity
public class Car extends Vehicle {}


Configuration cfg = new Configuration().configure();
SessionFactory factory = cfg.buildSessionFactory();


Session session = factory.openSession();
Transaction tx = session.beginTransaction();

// First fetch -> goes to DB
Student s1 = session.get(Student.class, 1);

// Second fetch -> fetched from first-level cache, not DB
Student s2 = session.get(Student.class, 1);


System.out.println(s1 == s2); // true, same object in memory

tx.commit();
session.close();


@Entity
@Cacheable
@Org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Student{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private int age;
}


Session session1 = factory.openSession();
Student s1 = session1.get(Student.class, 1); // Goes to DB
session1.close();

Session session2 = factory.openSession();
Student s2 = session2.get(Student.class, 1); // Fetched from second-level cache
session2.close();



// Cascade property Example

@Entity
public class Department {
    @Id
    @GeneratedValue
    private int id;
    private String name;

    @OneToMany(mappedBy = "department", cascade = CascadeType.ALL)
    private List<Employee> employees = new ArrayList<>();
}

@Entity
public class Employee {
    @Id
    @GeneratedValue
    private int id;
    private String name;

    @ManyToOne
    @JoinColumn(name = "dept_id")
    private Department department;
}

// Saving parent and children automatically

Session session = factory.openSession();
Transaction tx = session.beginTransaction();

Department dept = new Department();
dept.setName("IT");

Employee e1 = new Employee();
e1.setName("Alice");
e1.setDepartment(dept);

Employee e2 = new Employee();
e2.setName("Bob");
e2.setDepartment(dept);

dept.getEmployees().add(e1);
dept.getEmployees().add(e2);

// Cascade ALL → saves department AND employees automatically
session.save(dept);

tx.commit();
session.close();


// Deleting parent and children automatically

Session session = factory.openSession();
Transaction tx = session.beginTransaction();

Department dept = session.get(Department.class, 1);

// Cascade REMOVE → deletes dept AND all its employees
session.delete(dept);

tx.commit();
session.close();


@Entity
@Table(name="students")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private int age;
}


// CREATE
session.save(entity);

// READ
Student s = session.get(Student.class, 1);

// UPDATE
s.setAge(22);
session.update(s);

// DELETE
session.delete(s);


@OneToMany(mappedBy="department", cascade=CascadeType.ALL)
private List<Employee> employees;




List<Student> students = session.createQuery("FROM Student WHERE age > 20", Student.class).list();



Student s1 = session.get(Student.class, 1);
Student s2 = session.get(Student.class, 1); // from cache



@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)




session.save(dept); // dept + employees saved automatically
session.delete(dept); // dept + employees deleted automatically



Session session = null;
Transaction tx = null;

try {
    session = factory.openSession();
    tx = session.beginTransaction();

    // Hibernate operations
    Student s = session.get(Student.class, 1);
    s.setAge(25);
    session.update(s);

    tx.commit();
} catch (HibernateException e) {
    if (tx != null) tx.rollback();
    e.printStackTrace(); // log or handle properly
} finally {
    if (session != null) session.close();
}



try {
    studentRepository.save(student);
} catch (DataIntegrityViolationException e) {
    // handle constraint violation
} catch (DataAccessException e) {
    // handle general DB access issues
}

// 1.
SessionFactory factory = new Configuration().configure().buildSessionFactory();
Session session = factory.openSession();
Transaction tx = session.beginTransaction();


tx.commit();
session.close();

// 2.
SessionFactory factory = new Configuration().configure().buildSessionFactory();
SessionFactory factory = new Configuration().configure().buildSessionFactory();
SessionFactory factory = new Configuration().configure().buildSessionFactory();

// 2.
Session session = factory.openSesson();
Transaction tx = session.beginTransaction();

// 3.
Session session = factory.openSession();
Transaction tx = session.beginTransaction();


tx.commit();
session.close();



Session session = null;
Transaction tx = null;

try{
    session = factory.openSession();
    tx = session.beginTransaction();

    // Hibernate operations
    Student s = session.get(Student.class, 1);
    s.setAge(21);
    session.update(s);

    tx.commit();
}catch(HibernateException e){
    if(tx != null) tx.rollback();
    e.printStackTrace();
}finally{
    if(session != null) session.close();
}