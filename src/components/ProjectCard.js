import styled from 'styled-components';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ title, description, tags, githubLink, liveLink }) => {
    return (
        <Card>
            <CardContent>
                <h3>{title}</h3>
                <p>{description}</p>
                <Tags>
                    {tags.map((tag, index) => (
                        <span key={index}>{tag}</span>
                    ))}
                </Tags>
            </CardContent>
            <CardLinks>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    <FiGithub /> Code
                </a>
                {liveLink && (
                    <a href={liveLink} target="_blank" rel="noopener noreferrer">
                        <FiExternalLink /> Live Demo
                    </a>
                )}
            </CardLinks>
        </Card>
    );
};

const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #2c3e50;
  }
  p {
    margin-bottom: 1.5rem;
    color: #7f8c8d;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  span {
    background: #ecf0f1;
    padding: 0.3rem 0.8rem;
    border-radius: 4px;
    font-size: 0.8rem;
    color: #34495e;
  }
`;

const CardLinks = styled.div`
  display: flex;
  border-top: 1px solid #ecf0f1;
  a {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 1rem;
    color: #3498db;
    transition: all 0.3s ease;

    &:first-child {
      border-right: 1px solid #ecf0f1;
    }

    &:hover {
      background: #f8f9fa;
    }
  }
`;

export default ProjectCard;