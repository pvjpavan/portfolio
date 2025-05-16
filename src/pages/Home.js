import styled from 'styled-components';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <HeroSection>
            <HeroContent data-aos="fade-up">
                <h1>Hi, I'm [Your Name]</h1>
                <h2>Frontend Developer</h2>
                <p>I build amazing web experiences with React</p>
                <CTAButton>View My Work</CTAButton>
            </HeroContent>
        </HeroSection>
    );
};

const HeroSection = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(135deg, #3498db, #2c3e50);
  color: white;
  padding: 2rem;
`;

const HeroContent = styled.div`
  max-width: 800px;
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #ecf0f1;
  }
  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
`;

const CTAButton = styled.button`
  padding: 0.8rem 2rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 50px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: white;
    color: #2c3e50;
  }
`;

export default Home;