import React from "react";
import styled from "styled-components";

const LINKS = ["Github", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"];

const SocialLinks = () => {
  return (
    <Wrapper>
      <Avatar alt="Profile photo" src="avatar-jessica.jpeg" />
      <Name>Jessica Randall</Name>
      <Location>London, United Kingdom</Location>
      <About>Front-end developer and avid reader.</About>
      <Links>
        {LINKS.map((link) => (
          <li key={link}>
            <Link href="#">{link}</Link>
          </li>
        ))}
      </Links>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 24rem;

  // fluid from 24px to 40px on viewport from 375px and up
  padding: clamp(1rem, -5.079rem + 28.07vi, 2.5rem);
  margin-inline: 1.5rem;

  border-radius: 10px;
  background-color: var(--color-dark-grey);

  color: var(--color-white);
  font-size: 0.875rem;
  font-weight: var(--font-regular);
  text-align: center;
`;

const Avatar = styled.img`
  display: block;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  margin: 0 auto;
`;

const Name = styled.h2`
  margin-top: 28px;
  font-weight: var(--font-semi-bold);
  font-size: 1.5rem;
`;

const Location = styled.p`
  margin-top: 9px;
  color: var(--color-green);
  font-weight: var(--font-semi-bold);
`;

const About = styled.p`
  margin-top: 28px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &::before,
  &::after {
    content: '"';
  }
`;

const Links = styled.ul`
  margin-top: 26px;

  li {
    &:not(:first-of-type) {
      margin-top: 16px;
    }
  }
`;

const Link = styled.a`
  display: block;
  padding-block: 14px;
  border-radius: 8px;

  font-weight: var(--font-bold);
  text-decoration: none;
  color: var(--color-white);
  background-color: var(--color-grey);

  &:hover {
    color: var(--color-dark-grey);
    background-color: var(--color-green);
  }
`;

export default SocialLinks;
