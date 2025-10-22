package security;

import java.beans.BeanProperty;
import java.beans.Customizer;

import javax.naming.AuthenticationException;

import security.SecurityConfigs.MyUserDetails;
import security.SecurityConfigs.MyUserDetailsService;

public class Security2 {
    
}

public interface AuthenticationManager{
    Authentication authenticate(Authentication authentication) throws AuthenticationException;
}

@Bean
public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception{
    return config.getAuthentication();
}

public interface AuthenticationProvider{
    Authentication authenticate(Authentication authentication) throws AuthenticationException;
    boolean supports(Class<?> authentication);
}


@Configuration
@EnableWebSecurity
public class SecurityConfig{
    @Autowired
    private MyUserDetailsService userDetailsService;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
        http.csrf(csrf->csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/public/**").permitAll()
                .anyRequest().authenticated()
                )
                .httpBasic(Customizer.withDefaults());

        return http.build();
    }

    @Bean
    public AuthenticationProvider authenticationProvider(AuthenticationConfiguration config) throws Exception{
        return config.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
}

@Component
public class CustomAuthenticationProvider implements AuthenticationProvider{
    @Autowired
    private MyUserDetailsService userDetailsService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException{
        String username = authentication.getName();
        String password = authentication.getCredentials().tostring();

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


