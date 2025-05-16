import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <FooterContainer>
            <SocialLinks>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                </a>
            </SocialLinks>
            <Copyright>
                &copy; {new Date().getFullYear()} Your Name. All rights reserved.
            </Copyright>
        </FooterContainer>
    );
};

const FooterContainer = styled.footer`
  background: #2c3e50;
  color: white;
  padding: 2rem;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;

  a {
    color: white;
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: #3498db;
    }
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
`;

export default Footer;