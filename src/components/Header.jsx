import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* 기본 리셋 */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: "Pretendard", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    color: #1f2937;
    background: #f9fafb;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    border: none;
    background: none;
    cursor: pointer;
  }
`;

const HeaderBar = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
    background: #fff;
  backdrop-filter: blur(12px);
  box-shadow: 0 4px 24px rgba(0,0,0,0.06);
  z-index: 100;
`;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1.2rem;
`;

const Logo = styled.div`
  font-size: 1.7rem;
  font-weight: 900;
  background: linear-gradient(90deg, #6366f1, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.8rem;
    background: none;
  `;

const NavLink = styled.button`
  font-size: 1rem;
  font-weight: 600;
  padding: 0.6rem 1.2rem;
  border-radius: 12px;
  color: #374151;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #6366f1;
    color: #fff;
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
    transform: translateY(-2px);
  }
`;

function Header() {
  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0;
      const top = el.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };
  return (
    <>
      <GlobalStyle />
      <HeaderBar>
        <Container>
          <Logo>Wigeon Portfolio</Logo>
          <Nav>
            <NavLink onClick={() => handleNavClick("about")}>About</NavLink>
            <NavLink onClick={() => handleNavClick("skills")}>Skills</NavLink>
            <NavLink onClick={() => handleNavClick("projects")}>Projects</NavLink>
            <NavLink onClick={() => handleNavClick("contact")}>Contact</NavLink>
          </Nav>
        </Container>
      </HeaderBar>
    </>
  );
}

export default Header;
