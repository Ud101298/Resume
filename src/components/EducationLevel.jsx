import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

const LevelContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
`;

const EducationLevel = () => {
  const navigate = useNavigate();

  const education = [
    {
      school: "Vellore Institute of Technology, Vellore",
      degree: "B.Tech in Computer Science and Engineering",
      year: "2020-2024",
      achievements: [
        "CGPA: 8.52/10",
        "Relevant Coursework: Data Structures, Algorithms, Operating Systems, Database Management, Web Development",
        "Member of Technical Club - IEEE Computer Society"
      ]
    },
    {
      school: "Kendriya Vidyalaya",
      degree: "High School",
      year: "2018-2020",
      achievements: [
        "Achieved 95% in Computer Science",
        "Active participant in coding competitions"
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
        Education Quest
      </motion.h1>
      
      {education.map((edu, index) => (
        <Card
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <h2>{edu.school}</h2>
          <h3>{edu.degree}</h3>
          <p>{edu.year}</p>
          <ul>
            {edu.achievements.map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>
        </Card>
      ))}

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/experience')}
        style={{
          padding: '1rem 2rem',
          background: '#7cd1b8',
          border: 'none',
          borderRadius: '50px',
          color: '#1a1a2e',
          cursor: 'pointer'
        }}
      >
        Next Level: Experience
      </motion.button>
    </LevelContainer>
  );
};

export default EducationLevel;
