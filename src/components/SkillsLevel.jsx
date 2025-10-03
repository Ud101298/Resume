import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

const LevelContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
`;

const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 1rem;
  text-align: center;
  backdrop-filter: blur(10px);
`;

const SkillLevel = styled.div`
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  margin-top: 0.5rem;

  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${props => props.level}%;
    background: #7cd1b8;
    border-radius: 2px;
    transition: width 1s ease;
  }
`;

const SkillsLevel = () => {
  const navigate = useNavigate();

  const skills = [
    { name: "React.js", level: 90 },
    { name: "JavaScript/TypeScript", level: 85 },
    { name: "HTML/CSS", level: 90 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 85 },
    { name: "MongoDB", level: 75 },
    { name: "Git/GitHub", level: 85 },
    { name: "SQL", level: 80 },
    { name: "Data Structures", level: 85 },
    { name: "Algorithms", level: 80 },
    { name: "REST APIs", level: 85 },
    { name: "AWS", level: 70 }
  ];

  return (
    <LevelContainer>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ color: '#7cd1b8', marginBottom: '2rem' }}
      >
        Skills Quest
      </motion.h1>

      <SkillsGrid>
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3>{skill.name}</h3>
            <SkillLevel level={skill.level} />
          </SkillCard>
        ))}
      </SkillsGrid>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/projects')}
        style={{
          padding: '1rem 2rem',
          background: '#7cd1b8',
          border: 'none',
          borderRadius: '50px',
          color: '#1a1a2e',
          cursor: 'pointer'
        }}
      >
        Next Level: Projects
      </motion.button>
    </LevelContainer>
  );
};

export default SkillsLevel;
