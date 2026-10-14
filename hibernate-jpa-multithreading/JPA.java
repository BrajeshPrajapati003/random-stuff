// 29 Sept 2k25

import javax.annotation.processing.Generated;

import jakarta.persistence.*;


public class JPA {
    try{
        studentRepo.save(student);
    }catch(DataIntegrityViolationException e){
        // handle constraint violation
    }catch(DataAccessException e){
        // handle general DB access issues
    }
}


@Entity
@Table(name = "students")
public class Student{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private int age;

    // getters and setters
}


@Entity
@Table(name = "students")
public class Student{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;
    private int age;

    // getters and setters
}



// CRUD operations

EntityManagerFactory emf = Persistence.createEntityManagerFactory("my-persistence-unit");
EntityManager em = emf.createEntityMangaer();
EntityTransaction tx = em.getTransaction();

try{
    tx.begin();

    // create
    Student s = new Student();
    s.setName("Brajesh");
    s.setAge(21);
    em.persist(s);

    // read
    Student found = em.find(Student.class, 1);

    // update
    found.setAge(21);
    em.merge(found);

    // delete
    em.remove(found);

    tx.commit();
}catch(Exception e){
    if(tx.isActive()) tx.rollback();
    e.printStackTrace();
}finally{
    em.close();
    emf.close();
}


EntityManagerFactory emf = Persistence.createEntityManagerFactory("myPU");
EntityManager em = emf.createEntityManager();
EntityTransaction tx = em.getTransaction();

try{
    tx.begin();

    Student s = em.find(Student.class, 1);
    if(s == null){
        throw new EntityNotFoundException("Student not found!");
    }

    s.setAge(21);
    em.merge(s);

    tx.commit();
}catch(NoResultException e){
    System.out.println("No entity found: " + e.getMessage());
    if(tx.isAlive()) tx.rollback();
}catch(PersistenceException e){
    System.out.println("Database error: " + e.getMessage());
    if(tx.isAlive()) tx.rollback();
}finally{
    em.close();
    emf.close();
}

// One to One

@entity
public class Person{
    @Id
    @GeneratedValue
    private Long id;
    private String name;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "passport_id") // owning side
    private Passport passport;
}

@Entity
public class Passport{
    @Id
    @GeneratedValue
    private Long id;
    private String number;
}


// One to Many and Many to One


@Entity
public class Department{
    @Id
    @GeneratedValue
    private Long id;
    private String name;

    @OneToMany(mappedBy = "department", cascade = CascadeType.ALL)
    private List<Employee> employees = new ArrayList<>();
}


@Entity
public class Employee{
    @Id
    @GeneratedValue
    private Long id;
    private String name;

    @ManyToOne
    @JoinColumn(name = "dept_id") // foreign key
    private Department department;
}



// Many to Many



@Entity
public class Student{
    @Id
    @GeneratedValue
    private Long id;
    private String name;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
        name = "student_course"
        joinColumns = @JoinColumn(name = "student_id")
        inverseJoinColumns = @JoinColumn(name = "course_id")
    )
    private List<Course> courses = new ArrayList<>();
}


@Entity
public class Course{
    @Id
    @GeneratedValue
    private Long id;
    private String name;

    @ManyToMany(mappedBy = "courses")
    private List<Student> students = new ArrayList<>();
}


// 30 Sept 2k25

SessionFactory factory = new Configuration().configure().buildSession();
Session session = factory.openSession();
Transaction tx = session.beginTransaction();
tx.commit();
tx.rollback();
session.close();


Student s = new Student();
s.setName("brajesh");
session.save(s);
tx.commit();
session.close();

Student found = session.get(Student.class, 1);
session.setAge(21);

session.merge(s);
session.delete(s);
session.close();


SessionFactory factory = new Configuration().configure().buildSession();
Session session = null;
Transaction tx= null;

try{
    session = factory.openSession();
    tx = session.beginTransaction();

    tx.commit();
}catch(HibernateException e){
    if(tx != null) tx.rollback();
    e.printStackTrace();
}finally{
    if(session != null){
        session.close();
    }
}



// N + 1 Select Problem

List<Student> students = studentRepo.findAll(); // 1 select * from students
for(Student s: students){ // N for each student a separate query
    System.out.println(s.getCourses().size());
}  // = N + 1

@Entity
public class Student{
    @Id
    @GeneratedValue
    private Long id;
    private String name;

    @OneToMany(mappedBy = "students", fetch = FetchType.LAZY)
    private List<Course> courses = new ArrayList<>();
}


@Entity
public class Course{
    @Id
    @GeneratedValue
    private Long id;
    private String name;

    @ManyToOne(fetch = FetchType.LAZY)
    private Student students;
}



public interface StudentRepository extends JpaRepository<Student, Long>{
    // Solve N+1 with fetch join
    @Query("SELECT s FROM Students s JOIN FETCH s.courses")
    List<Student> findAllWithCourses();

    // Or with EntityGraph
    @EntityGraph(attributePaths = {"courses"})
    List<Student> findAll();
}


// Inheritance Hierarchy


class Vehicle{
    id,name
}

class Car extends Vehicle{ doors }
class Bike extends Vehicle{ type }


@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "vehicle_type")
public abstract class Vehicle{ ... }

@Entity
@DiscriminatorValue("CAR")
public class Car extends Vehicle{
    private int doors;
}

@Entity
@DiscriminatorValue("BIKE")
public class Bike extends Vehicle{
    private String type;
}


@Entity
@Inheritance(strategy = InheritanceType.JOINED) // Normalized - preffered
public abstract class Vehicle{ ... }

@Entity
public class Car extends Vehicle{
    private int doors;
}

@Entity
public class Bike extends Vehicle{
    private String type;
}


@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public abstract class Vehicle{ ... }



public interface VehicleRepository extends JpaRepository<Vehicle, Long>{}

List<Vehicle> findByName(String name); // returns Car or Bike



@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Vehicle{
    @Id
    @GeneratedValue
    private Long id;
    private String name;
}

@Entity
public class Car extends Vehicle{
    private int doors;
}

@Entity
public class Bike extends Vehicle{
    private String type;
}


public interface VehicleRepository extends JpaRepository<Vehicle, Long>{ }


Car car = new Car();
car.setName("BMW");
car.setDoors(4);
vehicleRepo.save(car);


Bike bike = new Bike();
bike.setName("Hero");
bike.setType("Sports");
vehicleRepo.save(bike);

List<Vehicle> vehicles = vehicleRepo.findAll();



// DTO PROJECTIONS


public interface studentNameEmail{
    String getName();
    String getEmail();
}


public interface StudentRepository extends JpaRepository<Student, Long>{
    List<StudentNameEmail> findByDepartment(String department);
}

public class StudentDTO{
    private String name;
    private String email;

    public class StudentDTO(String name, String email){
        this.name = name;
        this.email = email;
    }
}

// Repository
// JPQL
@Query("SELECT new com.example.dto.StudentDTO(s.name, s.email) FROM Student s WHERE s.department = :dept")
List<StudentDTO> findStudentsByDepartment(@Param("dept") String department);


// native SQL
@Query(value = "SELECT name, email FROM student WHERE department = :dept", nativeQuery = true)
List<StudentDTO> findStudentsNative(@Param("dept") String department);



// Repository
public interface StudentRepository extends JpaRepository<Student, Long>{

    @Query("SELECT new com.example.dto")
}


// entity
@Entity
public class Student{
    @Id
    @GeneratedValue 
    private Long id;
    private String name;
    private String email;
    private String department;
}

// Dto
public class StudentDto{
    private String name;
    private String email;
    public StudentDto(String name, String email){
        this.name = name;
        this.email = email;
    }
}

// repository
public interface StudentRepository extends JpaRepository<Student, Long>{
    @Query("SELECT new com.example.dto.StudentDto(s.name, s.email) FROM Student s WHERE s.department = :dept")
    List<StudentDto> findByDepartment(@Param("dept") String department);
}

// controller
@GetMapping("/students/{dept}")
public List<StudentDto> getStudents(@PathVariable String dept){
    return studentRepo.findByDepartment(dept);
}



// Transactions and Propagation


@Service
public class StudentService{

    @Autowired
    private StudentRepository studentRepo;

    @Transactional(propagation = Propagation.REQUIRED) // join existing else create a new one
    public void createStudent(Student student){
        studentRepo.save(student);
        // more operations
    }

    @Transactional(propation = Propagation.REQUIRES_NEW) // always start a new transaction
    public void logAudit(String action){
        // independent transaction
    }

    @Transactional(rollbackFor = Exception.class)
    public void riskyOperation(){ ... }

    @Transactional
    public void inner(){
        // some DB operation
    }

    public void outer(){
        inner(); // inner() @Transactional won't start a new transaction
    }
}

