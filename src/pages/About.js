import styled from 'styled-components';

const About = () => {
    return (
        <AboutSection>
            <h2>About Me</h2>
            <AboutContent>
                <AboutText>
                    <p>
                        I'm a passionate frontend developer with expertise in React.js,
                        JavaScript, and modern web technologies. I love creating beautiful,
                        responsive, and user-friendly applications.
                    </p>
                    <p>
                        With a background in computer science and 3 years of professional
                        experience, I bring both technical skills and creative problem-solving
                        to every project.
                    </p>
                </AboutText>
                <Skills>
                    <h3>My Skills</h3>
                    <SkillList>
                        <SkillItem>React.js</SkillItem>
                        <SkillItem>JavaScript</SkillItem>
                        <SkillItem>HTML/CSS</SkillItem>
                        <SkillItem>Node.js</SkillItem>
                        <SkillItem>Git</SkillItem>
                        <SkillItem>Responsive Design</SkillItem>
                    </SkillList>
                </Skills>
            </AboutContent>
        </AboutSection>
    );
};

const AboutSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: #2c3e50;
  }
`;

const AboutContent = styled.div`
  display: flex;
  gap: 3rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AboutText = styled.div`
  flex: 1;
  p {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    line-height: 1.8;
  }
`;

const Skills = styled.div`
  flex: 1;
  h3 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: #3498db;
  }
`;

const SkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SkillItem = styled.li`
  background: #3498db;
  color: white;
  padding: 0.5rem 1.2rem;
  border-radius: 20px;
  font-size: 0.9rem;
`;

export default About;