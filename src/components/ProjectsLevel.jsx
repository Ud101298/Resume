import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

const LevelContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Tag = styled.span`
  background: rgba(124, 209, 184, 0.2);
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.9rem;
`;

const ProjectsLevel = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "AI-Powered Healthcare System",
      description: "Developed a machine learning model for early disease detection using patient data. Implemented a user-friendly web interface for healthcare professionals.",
      technologies: ["Python", "TensorFlow", "React", "Node.js", "MongoDB"],
      link: "https://github.com/Ud101298/healthcare-ai"
    },
    {
      title: "E-Commerce Platform",
      description: "Built a full-stack e-commerce platform with features like user authentication, product catalog, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      link: "https://github.com/Ud101298/ecommerce-platform"
    },
    {
      title: "Real-time Chat Application",
      description: "Created a real-time chat application with features like instant messaging, file sharing, and user presence indicators.",
      technologies: ["React", "Socket.io", "Node.js", "Express", "MongoDB"],
      link: "https://github.com/Ud101298/realtime-chat"
    }
  ];

  return (
    <LevelContainer>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ color: '#7cd1b8', marginBottom: '2rem' }}
      >
        Projects Quest
      </motion.h1>

      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          onClick={() => window.open(project.link, '_blank')}
        >
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <TagContainer>
            {project.technologies.map((tech, i) => (
              <Tag key={i}>{tech}</Tag>
            ))}
          </TagContainer>
        </ProjectCard>
      ))}

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/')}
        style={{
          padding: '1rem 2rem',
          background: '#7cd1b8',
          border: 'none',
          borderRadius: '50px',
          color: '#1a1a2e',
          cursor: 'pointer'
        }}
      >
        Return to Start
      </motion.button>
    </LevelContainer>
  );
};

export default ProjectsLevel;
