package ru.levin;

import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.inject.Inject;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Inject
    private BCryptPasswordEncoder bcryptEncoder;
	@Inject
    private UserDetailsService adminDao;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable()
            .authorizeRequests()
            .antMatchers("/admin/**").hasAuthority("ROLE_ADMIN")
            .antMatchers("**").permitAll() //todo authorization for REST
            .and()
            .headers()
            .frameOptions()
            .disable()
            .and()
            .formLogin()
            .loginPage("/login")
            .defaultSuccessUrl("/admin");
    }



    @Inject
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(adminDao)
                .passwordEncoder(bcryptEncoder);
    }
}
