import React from "react";
import styled from "styled-components";

const NavWrapper = styled.nav`
  background: #fff;
  width: 100%;
  padding: 1rem 0;
  border-bottom: 1px solid #000;
`;

const LinkList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.li`
  margin: 0 1rem;
`;

const Link = styled.a`
  color: blue;
`;

const Nav = () => {
  return (
    <NavWrapper>
      <LinkList>
        <LinkItem>
          <Link href="/">Home</Link>
        </LinkItem>
        <LinkItem>
          <Link href="/about">About</Link>
        </LinkItem>
        <LinkItem>
          <Link href="/contact">Contact</Link>
        </LinkItem>
      </LinkList>
    </NavWrapper>
  );
};

export default Nav;
