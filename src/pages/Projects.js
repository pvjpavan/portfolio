import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const projects = [
        {
            title: 'E-commerce Website',
            description: 'A full-featured online store with cart functionality and payment integration.',
            tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            githubLink: 'https://github.com/yourusername/ecommerce',
            liveLink: 'https://yourecommerce.com'
        },
        {
            title: 'Task Management App',
            description: 'A productivity app for managing tasks with drag-and-drop functionality.',
            tags: ['React', 'Firebase', 'Material UI'],
            githubLink: 'https://github.com/yourusername/taskapp',
            liveLink: 'https://yourtaskapp.com'
        },
        {
            title: 'Weather Application',
            description: 'Real-time weather information with 5-day forecast.',
            tags: ['React', 'OpenWeather API', 'Chart.js'],
            githubLink: 'https://github.com/yourusername/weatherapp',
            liveLink: 'https://yourweatherapp.com'
        }
    ];

    return (
        <ProjectsSection>
            <h2 data-aos="fade-up">My Projects</h2>
            <ProjectsGrid>
                {projects.map((project, index) => (
                    <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                        <ProjectCard {...project} />
                    </div>
                ))}
            </ProjectsGrid>
        </ProjectsSection>
    );
};

const ProjectsSection = styled.section`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

export default Projects;