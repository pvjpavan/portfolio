import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FiHome, FiUser, FiCode, FiMail } from 'react-icons/fi';

const Navbar = () => {
    return (
        <Nav>
            <NavList>
                <NavItem>
                    <StyledNavLink to="/">
                        <FiHome />
                        <span>Home</span>
                    </StyledNavLink>
                </NavItem>
                <NavItem>
                    <StyledNavLink to="/about">
                        <FiUser />
                        <span>About</span>
                    </StyledNavLink>
                </NavItem>
                <NavItem>
                    <StyledNavLink to="/projects">
                        <FiCode />
                        <span>Projects</span>
                    </StyledNavLink>
                </NavItem>
                <NavItem>
                    <StyledNavLink to="/contact">
                        <FiMail />
                        <span>Contact</span>
                    </StyledNavLink>
                </NavItem>
            </NavList>
        </Nav>
    );
};

const Nav = styled.nav`
  background: #2c3e50;
  padding: 1rem 2rem;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const NavItem = styled.li`
  list-style: none;
`;

const StyledNavLink = styled(NavLink)`
  color: #ecf0f1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background: #34495e;
  }

  &.active {
    background: #3498db;
    font-weight: bold;
  }
`;

export default Navbar;