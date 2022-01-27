import React, { useContext } from 'react';
import './Contact.css';
import SocialMedia from '../../components/socialMedia/SocialMedia';
import { contactInfo } from '../../portfolio';
import { Fade } from 'react-reveal';
import StyleContext from '../../contexts/StyleContext';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export default function Contact() {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <Wrapper className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">
              {contactInfo.title}
            </h1>
            <p
              className={
                isDark
                  ? 'dark-mode contact-subtitle'
                  : 'subTitle contact-subtitle'
              }
            >
              {contactInfo.subtitle}
            </p>
            <div
              className={
                isDark
                  ? 'dark-mode contact-text-div'
                  : 'contact-text-div'
              }
            >
              <a
                className="contact-detail"
                href={'tel:' + contactInfo.number}
              >
                {contactInfo.number}
              </a>
              <br />
              <br />
              <a
                className="contact-detail-email"
                href={'mailto:' + contactInfo.email}
              >
                {contactInfo.email}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
        </div>
      </Wrapper>
    </Fade>
  );
}
