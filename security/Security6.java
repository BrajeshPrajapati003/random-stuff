package security;

import java.nio.file.AccessDeniedException;

import javax.naming.AuthenticationException;

public class Security6 {
    
}

// IMP: ExceptionTranslationFilter :- 1. AuthenticationException 2. AccessDeniedHandler

@Component
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint{
    @Override
    public void commence(HttpServletRequest req, HttpServletResponse res, AuthenticationException ex) throws IOException{
        res.setStatus(HttpServletRes.SC_UNAUTHORIZED);
        res.setContentType("application/json");
        res.getWriter().write("{\"error\":\"Unauthorized\"}");
    }
}

@Component
public class CustomAccessDeniedHandler implements AccessDeniedHandler{
    @Override
    public void handle(HttpServletRequest req, HttpServletResponse res, AccessDeniedException ex) throws IOException{
        res.setStatus(HttpServletResponse.SC_FORBIDDEN);
        res.setContentType("application/json");
        res.getWriter().write("{\"error\":\"Access Denied\"}");
    }
}


@RestControllerAdvice
public class GlobalExceptionHandler{
    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<?> handleRuntime(RuntimeException ex){
        return ResponseEntity.badRequest().body(ex.getMessage());
    }
}


