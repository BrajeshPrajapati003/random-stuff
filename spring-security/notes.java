
import java.beans.Customizer;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import javax.naming.AuthenticationNotSupportedException;

import security.notes.UserDetailsService;

// package security;

// import java.beans.BeanProperty;
// import java.security.Security;

// import javax.naming.AuthenticationException;

// import scenario6.fitinspiration.backend.src.main.java.com.learn.fitinspiration.entity.User;

// public class notes {
    
// }







// Custom UserDetails implementation
// public class MyUserDetails implements UserDetails{

//     private final User user;

//     public MyUserDetails(User user){
//         this.user = user;
//     }

//     @Override
//     public Collection<?extends GrantedAuthority> getAuthorities(){
//         return List.of(new SimpleGrantedAuthority(user.getRole()));
//     }

//     @Override
//     public String getPassword(){
//         return user.getPassword();
//     }

//     @Override
//     public String getUsername(){
//         return user.getUsername();
//     }

//     @Override
//     public boolean isAccountNonExpired(){ return true; }

//     @Override
//     public boolean isAccountNonLocked(){ return true; }

//     @Override
//     public boolean isCredentialsNonExpired(){ return true; }

//     @Override
//     public boolean isEnabled(){ return true; }
// }

// // Authentication
// Authentication auth = SecurityContextHolder.getContext().getAuthentication();
// String username = auth.getname();
// Collection<? extends GrantedAuthority> roles = auth.getAuthorities();




// AuthenticationManager interface
public interface AuthenticationManager{
    Authentication authenticate(Authentication authentication) throws AuthenticationException;

    // Default implementation -> ProviderManager (list of providers)
}

// AuthenticationProvider interface
public interface AuthenticationProvider{
    Authentication authenticate(Authentication authentication) throws AuthenticationException;
    boolean supports(Class<?> authentication);

    // Default Provider -> DaoAuthenticationProvider
}

// UserDetailsService interface
public interface UserDetailsService{
    UserDetails loadUserByUsername(String username) throws UsernameNotFoundException;
}

// UserDetailsService implementation
@Service 
public class MyUserDetailsService implements UserDetailsService{

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{
        User user = userRepository.findByUsername(username)
            .orElseThrow(() -> new UsernameNotFoundException("User not found: " + username));
        
        return new MyUserDetails(user);
    }
}

// SecurityConfig
@Configuration
@EnableWebSecurity
public class SecurityConfig{

    @Bean
    public UserDetailsService userDetailsService(PasswordEncoder encoder){
        userDetails user1 = User
            .withUsername("brajesh")
            .password(encoder.encode("1234"))
            .roles("USER")
            .build();

        UserDetails admin = User
            .withUsername("admin")
            .password(encoder.encode("admin123"))
            .roles("ADMIN")
            .build();

        return new InMemoryUserDetailsManager(user1, admin);
    }

    // Filter chains
    @Bean 
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
        http.csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers(HttpMethod.GET, "/api/public/**").permitAll()
                .requestMatchers("/api/user/**").hasAnyRole("USER", "ADMIN")
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated())
            .formLogin(Customizer.withDefaults())
            .httpBasic(Customizer.withDefaults());
        return http.build();


        // when a user logs in, Spring does:
        // encoder.matches(rawPassword, storedEncodedPassword)
    }

    // In Spring Boot 3+, AuthenticationManager is exposed as a bean
    // This uses all the configured AuthenticationProvider beans automatically.
    @Bean 
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception{
        return config.getAuthenticationManager();
    }

    // ---------------------------------------------------------------------------------
    // just for interviews - custom configuration

    @Autowired
    private MyUserDetailsService userDetailsService;

    @Bean 
    public Authenticationprovider authenticationProvider(){
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setUserDetailsService(userDetailsService);
        provider.setPasswordEncoder(passwordEncoder());
        return provider;
    }

    // -------------------------------------------------------------------------------

    // PasswordEncoder
    @Bean 
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
}


// Interview Gold - custom AuthenticationProvider
@Component
public class CustomAuthenticationProvider implements AuthenticationProvider{
    
    @Autowired
    private MyUserDetailsService userDetailsService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException{
        String username = authentcation.getName();
        String password = Authentication.getCredentials().toString();

        UserDetails user = userDetailsService.loadUserByUsername(username);

        if(passwordEncoder.matches(password, user.getPassword())){
            return new UsernamePasswordAuthenticationToken(username, password, user.getAuthorities());
        }else{
            throw new BadCredentialsException("Invalid username or password!");
        }
    }

    @Override
    public boolean supports(Class<?> authentication){
        return UsernamePasswordAuthenticationToken.class.isAssignableFrom(authentication);
    }
}

// accessing the current user inside a controller
@GetMapping("/user")
public ResponseEntity<String> getCurrentUser(Authentication authentication) {
    return ResponseEntity.ok("Logged in as: " + authentication.getName());
    // authentication is injected by Spring automatically.
}


// to get the full user details
@GetMapping("/details")
public ResponseEntity<?> getDetails(Authentication authentication) {
    UserDetails userDetails = (UserDetails) authentication.getPrincipal();
    return ResponseEntity.ok(userDetails);
}


