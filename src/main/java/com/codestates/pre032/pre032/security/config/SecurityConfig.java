package com.codestates.pre032.pre032.security.config;

import com.codestates.pre032.pre032.security.filter.CustomSecurityFilter;
import com.codestates.pre032.pre032.security.filter.VerificationFilter;
import com.codestates.pre032.pre032.security.handler.*;
import com.codestates.pre032.pre032.security.jwt.JwtTokenizer;
import com.codestates.pre032.pre032.user.UserService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig {
    private final JwtTokenizer jwtTokenizer;

    private final UserService userService;

//    private final JpaUserDetailsService jpaUserDetailsService;

    public SecurityConfig(JwtTokenizer jwtTokenizer, UserService userService) {
        this.jwtTokenizer = jwtTokenizer;
        this.userService = userService;
//        this.jpaUserDetailsService = jpaUserDetailsService;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                //동일 출처로부터 들어오는 request만 페이지 렌더링을 허용
                .headers().frameOptions().sameOrigin()
                .and()
                // 현재 : csrf 공격에 대한 설정 비활성화
                .csrf().disable()
                // cors를 허용하는 기본 설정으로 적용
                .cors().configurationSource(corsConfigurationSource())
                .and()
                // 우리 학습과정에선 배우지 않은 내용 : 그냥 disable 하자
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        http
                .formLogin()
                .loginPage("/loginPage")
//                .disable()
                .defaultSuccessUrl("/")
                .and()
                .httpBasic().disable()
                .exceptionHandling()
                .authenticationEntryPoint(new UserAuthenticationEntryPoint())
                .accessDeniedHandler(new UserAccessDeniedHandler())
                .and()
                // 필터 적용
                .apply(new CustomFilterConfigure())
                .and()
                .authorizeHttpRequests(authorize -> authorize
//                         권한 설정
                                .anyRequest().permitAll()
                )
                .oauth2Login(oauth2 ->

                        oauth2
                        .successHandler(new OAuth2SuccessHandler(jwtTokenizer, userService))  // (1)
//                                .defaultSuccessUrl("/")
                )
                // 로그인 설정
//                .loginPage("/users/loginPage")
//                .defaultSuccessUrl("/")
//                .failureUrl("로그인 실패시 url")
//                .exceptionHandling().accessDeniedPage("/users/access-denied")
//                .and()
                // 로그아웃 설정
                .logout()
                .logoutUrl("/users/logout")
                .logoutSuccessUrl("/")
        ;

        return http.build();
    }

//    @Override
//    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//        auth.userDetailsService(jpaUserDetailsService);
//
//    }
    public class CustomFilterConfigure extends AbstractHttpConfigurer<CustomFilterConfigure, HttpSecurity> {  // (2-1)
        @Override
        public void configure(HttpSecurity builder) throws Exception {  // (2-2)

            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);  // (2-3)

            CustomSecurityFilter jwtAuthenticationFilter = new CustomSecurityFilter(authenticationManager, jwtTokenizer);  // (2-4)
            jwtAuthenticationFilter.setFilterProcessesUrl("users/login");
            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new LoginSuccessHandler());
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new LoginFailureHandler());

            VerificationFilter verificationFilter = new VerificationFilter(jwtTokenizer);
            builder.addFilter(jwtAuthenticationFilter)
                    .addFilterAfter(verificationFilter, CustomSecurityFilter.class);  // (2-6)
        }
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        // 모든 출처에 대해 스크립트기반의 HTTP 통신을 허용
        configuration.setAllowedOrigins(Arrays.asList("*"));
        // 파라미터로 지정한 HTTP Method에 대한 HTTP 통신을 허용
        configuration.setAllowedMethods(Arrays.asList("GET","POST", "PATCH", "DELETE", "OPTIONS"));

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        // 패턴에 해당하는 URL에 해당 CORS 정책을 적용한다.
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
