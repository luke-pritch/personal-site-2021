import React, { useContext } from 'react';
import Headroom from 'react-headroom';
import './Header.css';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import StyleContext from '../../contexts/StyleContext';
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
} from '../../portfolio';
import styled from 'styled-components';

const StyledLink = styled.a`
  border-radius: 6px;
`;

function Header() {
  const { isDark } = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;

  return (
    <Headroom>
      <header className={isDark ? 'dark-menu header' : 'header'}>
        <a href="" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: 'white' }}
        >
          <span
            className={isDark ? 'navicon navicon-dark' : 'navicon'}
          ></span>
        </label>
        <ul className={isDark ? 'dark-menu menu' : 'menu'}>
          {viewSkills && (
            <li>
              <StyledLink href="#skills">Skills</StyledLink>
            </li>
          )}
          {viewExperience && (
            <li>
              <StyledLink href="#experience">Work Experience</StyledLink>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <StyledLink href="#opensource">Open Source</StyledLink>
            </li>
          )}
          {viewAchievement && (
            <li>
              <StyledLink href="#achievements">Achievements</StyledLink>
            </li>
          )}
          {viewBlog && (
            <li>
              <StyledLink href="#blogs">Blogs</StyledLink>
            </li>
          )}
          {viewTalks && (
            <li>
              <StyledLink href="#talks">Talks</StyledLink>
            </li>
          )}
          <li>
            <StyledLink href="#contact">Contact Me</StyledLink>
          </li>
          {/* <li>
            <a>
              <ToggleSwitch />
            </a>
          </li> */}
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
