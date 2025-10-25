import java.beans.BeanProperty;

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


// 24th OCT 2K25

@Configuration
@EnableWebSecurity
public class SecurityConfig{
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http){
        http.csrf(csrf->csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/admin/**").hasRole('ADMIN')
                .requestMatchers("/public/**").permitAll()
                .anyRequest().authenticated()
                )
            .httpBasic(Customizer.withDefaults());
        
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    public UserDetailsService userDetailsService(){
        UserDetails user1 = User.withUsername("brajesh")
                                .password(passwordEncoder().encode("brajesh@123"))
                                .roles("USER")
                                .build();

        UserDetails admin = User.withUsername("admin")
                                .password(PasswordEncoder().encode("admin@123"))
                                .roles("ADMIN")
                                .build();

        return new InMemoryUserDetailsManager(user1, admin);
    }
}


Authentication auth = SecurityContextHolder.getContext().getAuthentication();
String username = auth.getUsername();
Collection<? extends GrantedAuthority> roles = auth.getAuthorities();


@Bean
public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
    return config.getConfigurationManager();
}


@Override
public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    return myRepo.findByUsername(username);
}

