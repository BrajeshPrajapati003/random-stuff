
* Authentication Object *

Authentication{
    principal = "brajesh"
    authorities = [ROLE_USER]
    authenticated = true
}



NOTES: 18-Nov

The PROBLEM:
Modern browsers block API requests from different origins (domains) for security reasons.
If your React app tries to call your Spring Boot API, it'll be blocked by default.

The FIX:
CORS lets you specify which domains are allowed to access your backend.



SESSION MANAGEMENT:
Session management decides how Spring Security tracks users after they log in — especially in traditional, stateful applications.

for JWT-based APIs

http
    .csrf(csrf -> csrf.disable())
    .sessionManagement(session -> session
        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
    );

Control it with:
* ALWAYS -> always create a session
* IF_REQUIRED (default) -> create only if needed
* NEVER -> don't create, but use existing
* STATELESS -> Never create or use sessions

Why? Because JWTs already hold authentication info — no need for sessions.

SESSION FIXATION PROTECTION:
Spring Security automatically protects you from session fixation - when a hacker tries to reuse a user's session ID.
After login, Spring creates a new session to avoid stealing an old one.


http.sessionManagement(session ->
    session.sessionFixation(sessionFixation -> sessionFixation.newSession())
);


Options:
 * none() -> No protection
 * migrateSession() -> Default, creates a new session
 * newSession() -> Forcefully create a new session
  
SESSION TIMEOUT CONTROL: -> set max sessions or timeouts

http.sessionManagement(session -> session
    .maximumSessions(1) // only one active session per user
    .maxSessionsPreventsLogin(true) // block new logins if user is already logged in
);


