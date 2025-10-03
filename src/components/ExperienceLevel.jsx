import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

const LevelContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const ExperienceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
`;

const ExperienceLevel = () => {
  const navigate = useNavigate();

  const experiences = [
    {
      company: "Microsoft",
      position: "Software Engineer Intern",
      duration: "May 2023 - July 2023",
      responsibilities: [
        "Developed and implemented new features for Microsoft Teams using React and TypeScript",
        "Collaborated with cross-functional teams to improve user experience",
        "Reduced application load time by 30% through optimization techniques",
        "Participated in code reviews and agile development processes"
      ]
    },
    {
      company: "Accenture",
      position: "Software Development Intern",
      duration: "Jan 2023 - April 2023",
      responsibilities: [
        "Worked on full-stack development using MERN stack",
        "Implemented responsive UI designs using React and Material-UI",
        "Developed RESTful APIs using Node.js and Express",
        "Participated in daily stand-ups and sprint planning meetings"
      ]
    }
  ];

  return (
    <LevelContainer>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ color: '#7cd1b8', marginBottom: '2rem' }}
      >
        Experience Quest
      </motion.h1>

      {experiences.map((exp, index) => (
        <ExperienceCard
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <h2>{exp.company}</h2>
          <h3>{exp.position}</h3>
          <p>{exp.duration}</p>
          <ul>
            {exp.responsibilities.map((resp, i) => (
              <li key={i}>{resp}</li>
            ))}
          </ul>
        </ExperienceCard>
      ))}

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/skills')}
        style={{
          padding: '1rem 2rem',
          background: '#7cd1b8',
          border: 'none',
          borderRadius: '50px',
          color: '#1a1a2e',
          cursor: 'pointer'
        }}
      >
        Next Level: Skills
      </motion.button>
    </LevelContainer>
  );
};

export default ExperienceLevel;
