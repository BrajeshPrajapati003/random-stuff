package security;

import java.beans.BeanProperty;
import java.beans.Customizer;
import java.lang.annotation.Inherited;
import java.net.http.HttpRequest;
import java.util.Collection;

import javax.annotation.processing.Generated;

import com.sun.net.httpserver.Request;

import scenario6.fitinspiration.backend.src.main.java.com.learn.fitinspiration.entity.User;

@Configuration
public class SecurityConfigs {
    
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
        http.csrf(csrf -> csrf.disable())
        .authorizeHttpRequests(request -> {
            request.requestMatchers(HttpMethod.GET, "/api/**").permitAll();
            request.anyRequest().authenticated();
        }).httpBasic(Customizer.withDefaults());

        return http.build();

    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpRequest http) throws Exception{
        http.csrf(csrf -> csrf.disable())
        .authorizeHttpRequests(request -> {
            request.requestMatchers(HttpMethod.GET, "/api/**").permitAll();
            request.anyRequest().authenticated();
        }).httpBasic(Customizer.withdefaults());

        return http.build();
    }
}



@PreAuthorize("hasRole('ADMIN')")
public void deleteUser(Long id){ ... }

@PreAuthorise("hasRole('ADMIN')")
public void deleteUser(Long id){ ... }


http
    .authorizeHttpRequests()
    .requestMathers("/admin/**").hasRole("ADMIN")
    .anyRequest().authenticated();


http.authoriseHttpRequests()
.requestMatchers("/admin/**").hasRole("ADMIN")
.anyRequest().authenticated();


@PreAuthorize("hasRole('ADMIN')")
public void deleteUser(Long id){ ... }


http
    .authorizeHttpRequests()
    .requestMatchers("/admin/**").hasRole('ADMIN')
    .anyRequest().authenticated();


@Configuration
public class SecurityConfig{
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
        http
            .csrf(csrf -> csrf.disable()) // disable CSRF for APIs
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/admin/**").hasRole("ADMIN")
                .anyRequest.authenticated()
                )
                .formLogin(Customizer.withDefaults())
                .httpBasic(Customizer.withDefaults());
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
}


Authentication auth = SecurityContextHolder.getContext().getAuthentication();
System.out.println(auth.getName());
System.out.println(auth.getAuthorities());


Authentication auth = SecurityContextHolder.getContext().getAuthentication();
printf(auth.getName());
printf(auth.getAuthorities());


// Authentication
Authentication auth = SecurityContextHolder.getContext()getAuthentication();


// Authorization
.requestMatchers("/admin/**").hasRole("ADMIN") -> AccessDeniedException
.requestMatchers("/admin/**").hasRole("ADMIN") -> AccessDeniedException

http
    .authorizeHttpRequests(auth -> auth.anyRequest().authenticated())
    .formLogin(Customizer.withDefaults())
    .httpBasic(Customizer.withDefaults())
    .csrf(csrf -> csrf.disable())
    .securityMatcher("/**")
    .build();

http.debug(true);



// 22 Oct 2k25

@Configuration
@EnableWebSecurity
public class SecurityConfig{
    @Bean
    public UserDetailService userDetailService(PasswordEncoder encoder){
        UserDetails user1 = user
                            .withUsername("brajesh")
                            .password(encoder.encode("12345"))
                            .roles("USER")
                            .build();

        UserDetails admin = user
                            .withUsername("admin")
                            .password(encoder.encode("admin123"))
                            .roles("ADMIN")
                            .build();

        return new InMemoryUserDetailsManager(user1, admin);
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
        http.csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/public/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                    .anyRequest().authenticated())
                    .httpBasic(Customizer.withDefaults());
        
        return http.build();
    }

    @Bean 
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
}


@Bean
public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
    http
        .authorizeHttpRequests(auth -> auth
            .requestMatchers("/admin/**").hasRole("ADMIN")
            .anyRequest.authenticated())
        .formLogin(Customizer.withDefaults())
        .httpBasic(Customizer.withDefaults());
    return http.build();
}


@Service
public class MyUserDetailsService implements UserDetailsService{
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{
        // Here you'd typically query DB
        return User.builder()
                    .username("brajesh")
                    .password(passwordEncoder().encode("1234"))
                    .roles("USER")
                    .build();
    }
}


@Bean
public PasswordEncoder passwordEncoder(){
    return new BCryptPasswordEncoder();
}


Authentication auth = SecurityContextHolder.getContext().getAuthentication();
System.out.println(auth.getName()); // username
System.out.println(auth.getAuthorities()); // roles


@Configuration
@EnableWebSecurity
public class SecurityConfig{
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
        http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/admin/**").hasRole("ADMIN")
                .requestMatchers("/user/**").hasAnyRole("USER", "ADMIN")
                .anyRequest().authenticated())
            .formLogin(Customizer.withDefaults())
            .httpBasic(Customizer.withDefaults());

        return http.build();
    }

    @Bean
    public UserDetailsService UserDetailsService(PasswordEncoder encoder){
        UserDetails admin = User.builder()
            .username("admin")
            .password(encoder.encode("admin123"))
            .roles("ADMIN")
            .build();

        UserDetails user = User.builder()
            .username("user")
            .password(encoder.encode("user123"))
            .roles("USER")
            .build();

        return new InMemoryUserDetailsManager(admin, user);
    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
}


@Bean
public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
    http.csrf(csrf -> csrf.disable())
        .authorizeHttpRequests(request -> {
                request.requestMatchers(HttpMethod.GET, "/api/**").permitAll();
                request.anyRequest().authenticated();
        })
        .httpBasic(Customizer.withDefaults());

    return http.build();
}


@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public UserDetailsService userDetailsService(PasswordEncoder encoder) {
        UserDetails user1 = User
                .withUsername("brajesh")
                .password(encoder.encode("12345"))
                .roles("USER")
                .build();

        UserDetails admin = User
                .withUsername("admin")
                .password(encoder.encode("admin123"))
                .roles("ADMIN")
                .build();

        return new InMemoryUserDetailsManager(user1, admin);
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/public/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            )
            .httpBasic(Customizer.withDefaults());
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}

Authentication auth = SecurityContextHolder.getContext().getAuthentication();
String username = auth.getName();
Collection<? extends GrantedAuthority> roles = auth.getAuthorities();

@Bean
public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception{
    return config.getAuthenticationManager();
}

@Override
public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{
    return myRepository.findByUsername(username);
}

// Built-in 
UserDetails user = User.withUsername("brajesh")
                        .password("{noop}123")
                        .roles("USER")
                        .build();

// Using JPA
public class MyUserDetails implements UserDetails{
    private final User user;
    // implement getUserName(), getPassword(), getAuthorities(), etc.
}

http.authorizeHttpRequests(auth -> auth
    .requestMatchers("/admin/**").hasRole("ADMIN")
    .requestMatchers("/user/**").hasAnyRole("USER", "ADMIN")
    .anyRequest().authenticated()
);

@PreAuthorize("hasRole('ADMIN')")
@GetMapping("/admin/dashboard")
public String adminDashboard() { ... }


@Configuration
@EnableWebSecurity
public class SecurityConfig{
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
        http.csrf(csrf -> csrf.disable())
        .authorizeHttpRequests(auth -> auth
            .requestMatchers("/public/**").permitAll()
            .requestMatchers("/admin/**").hasRole("ADMIN")
            .anyRequest().authenticated()
            )
            .httpBasic(Customizer.withDefaults());

        return http.build();
    }

    @Bean
    public UserDetailsService userDetailsService(PasswordEncoder encoder){
        UserDetails user = User.withUsername("brajesh")
                            .password(encoder.encode("12345"))
                            .roles("USER")
                            .build();
        
        UserDetails admin = User.withUsername("admin")
                                .password(encoder.encode("admin123"))
                                .roles("ADMIN")
                                .build();

        return new InMemoryUserDetailsManager(user, admin);
    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
}

@Service
public class MyUserDetailsService implements UserDetailsService{
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{
        User user = userRepository.findByUsername(username)
                                    .orElseThrow(()-> new UsernameNotFoundException("User not Found"));
        return new MyUserDetails(user);
    }
}

@Configuration
@EnableWebSecurity
public class SecurityConfig{
    @Autowired
    private MyUserDetailsService userDetailsService;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
        http.csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
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
}

PasswordEncoder encoder = new BCryptPasswordEncoder();
String encoded = encoder.encode("12345");
System.out.println(encoded);


encoder.matches(rawPassword, storedEncodedPassword)


@PostConstruct
public void init(){
    User user = new User();
    user.setUsername("brajesh");
    user.setPassword(passwordEncoder().encode("1234"));
    user.setRole("ROLE_USER");
    userRepository.save(user);
}

