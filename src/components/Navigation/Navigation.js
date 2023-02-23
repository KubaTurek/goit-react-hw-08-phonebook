import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: rgb(214, 164, 164);
  }
`;

export const Navigation = () => {
  return (
    <div className={css.navigation}>
      <StyledLink className={css.navigation__link} to="/">
        Home
      </StyledLink>
      <StyledLink className={css.navigation__link} to="/Contacts">
        Contacts
      </StyledLink>
    </div>
  );
};
