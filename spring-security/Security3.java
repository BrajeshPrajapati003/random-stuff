package security;

import java.beans.BeanProperty;

public class Security3 {
    
}


// NOTE: CUSTOM CONFIGURATION

@Configuration
@EnableWebSecurity
public class SecurityConfig{
    @Autowired
    private MyUserDetailsService userDetailsService;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
        http.csrf(csrf -> csrf.disable())
        .authorizeHttpRequests(auth -> auth
        .requestMatchers("/public/**").permitAll()
        .anyRequest().authenticated()
        )
        .httpBasic(Customizer.withDefaults());

        return http.build();
    }

    @Bean
    public AuthenticationProvider authenticationProvider(){
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setUserDetailsService(userDetailsService);
        provider.setPasswordEncoder(passwordEncoder());
        return provider;
    }

    @Bean 
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    @Bean 
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
}


// NOTE: CUSTOM AUTHENTICATION PROVIDER (interview GOLD)

@Component
public class CustomAuthenticationProvider implements AuthenticationProvider{
    @Autowired
    private MyUserDetailsService userDetailsService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public Authentication authenticate(Authentication auth) throws AuthenticationException{
        String username = auth.getName();
        String password = auth.getCredentials().toString();

        UserDetails user = userDetailsService.loadByUsername(username);

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


// NOTE: CORS

@Bean 
public WebMvcConfigurer corsConfigurer(){
    return new WebMvcConfigurer(){
        @Override
        public void addCorsMappings(CorsRegistry registry){
            registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("GET", "POST", "PUT", "DELETE");
        }
    };
}


// NOTE: SESSION MANAGEMENT

// Session creation

http.sessionManagement(session -> session
    .sessionCreationPolicy(SessionCreationPolicy.STATELESS));

// ALWAYS, IF_REQUIRED (default), NEVER, STATELESS


// Session Fixation

http.sessionManagement(session -> 
    session.sessionFixation(sessionFixation -> sessionFixation.newSesssion())
);

// none(), migrateSession(), newSession()

// Session Timeout Control

http.sessionManagement(session -> session
    .maximumSessions(1) // Only one active session per user
    .maxSessionsPreventsLogin(true) // Block new logins if user is already logged in
);


// NOTE: JWT + REACT Frontend

@Bean
public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
    http
        .csrf(csrf -> csrf.disable())
        .cors(cors -> cors.configurationSource(request -> {
            CorsConfiguration config = new CorsConfiguration();
            config.setAllowedOrigins(List.of("http://localhost:3000"));
            config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE"));
            config.setAllowedHeaders(List.of("*"));
            return config;
        }))
        .sessionManagement(session -> session
            .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        )
        .authoriseHttpRequests(request -> request
            .requestMatchers("/api/auth/**").permitAll()
            .anyRequest().authenticated()
        )
        .httpBasic(Customizer.withDefaults());

    return http.build();
}


