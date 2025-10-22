public class Basic1{
    public static void main(String[] args){


        @Bean
        public void SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
            http.csrf(csrf -> csrf.disable());
            request.

        }
    }
}


@Entity
@Table(name = "users")
public class User{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String password;
    private String role;

    // Getters, Setters, Constructors
}

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}

public class MyUserDetails implements UserDetails{
    private final User user;
    public MyUserDetails(User user){
        this.user = user;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities(){
        return List.of(new SimpleGrantedAuthority(user.getRole()));
    }

    @Override
    public String getPassword(){
        return user.getPassword();
    }

    @Override
    public String getUserName(){
        return user.getUserName();
    }

    @Override
    public boolean isAccountNonExpired(){ return true; }

    @Override
    public boolean isAccountNonLocked(){ return true; }

    @Override
    public boolean isCredentialsNonExpired(){ return true; }

    @Override
    public boolean isEnabled(){ return true; }
}


