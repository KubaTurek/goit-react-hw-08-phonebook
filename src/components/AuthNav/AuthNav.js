import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import css from './AuthNav.module.css';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: rgb(214, 164, 164);
  }
`;

export const AuthNav = () => {
  return (
    <div className={css.authnav}>
      <StyledLink className={css.authnav__link} to="/register">
        Register
      </StyledLink>
      <StyledLink className={css.authnav__link} to="/login">
        Log In
      </StyledLink>
    </div>
  );
};
