package com.codestates.pre032.pre032.security.Services;

import com.codestates.pre032.pre032.exception.DataNotFoundException;
import com.codestates.pre032.pre032.user.User;
import com.codestates.pre032.pre032.user.UserRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.Optional;

public class JpaUserDetailsService implements UserDetailsService
{
    @Override
    public UserDetails loadUserByUsername(String Email) throws UsernameNotFoundException
    {
        return null;
    }

    @Component
    public static class MemberDetailsService implements UserDetailsService {
        private final UserRepository userRepository;

        public MemberDetailsService(UserRepository userRepository) {
            this.userRepository = userRepository;
        }

        @Override
        public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
            Optional<User> optionalUser = userRepository.findByEmail(email);
            User findUser = optionalUser.orElseThrow(() -> new DataNotFoundException("MEMBER_NOT_FOUND"));

            return new MemberDetails(findUser);
        }
        private final class MemberDetails extends User implements UserDetails {
            // (1)
            MemberDetails(User user) {
                setUserId(user.getUserId());
                setEmail(user.getEmail());
                setPassword(user.getPassword());
                setDisplayName(user.getDisplayName());
            }

            @Override
            public Collection<? extends GrantedAuthority> getAuthorities() {
                return null;
            }

            @Override
            public String getUsername() {
                return getEmail();
            }

            @Override
            public boolean isAccountNonExpired() {
                return true;
            }

            @Override
            public boolean isAccountNonLocked() {
                return true;
            }

            @Override
            public boolean isCredentialsNonExpired() {
                return true;
            }

            @Override
            public boolean isEnabled() {
                return true;
            }
        }
    }
}
