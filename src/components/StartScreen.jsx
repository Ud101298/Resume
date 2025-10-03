import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Cloud, Pipe, QuestionBox, Coin } from './MarioElements';

const StartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  text-align: center;
  background: linear-gradient(0deg, #5C94FC 0%, #8AA8FC 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: repeating-linear-gradient(
      45deg,
      #6B8B3D,
      #6B8B3D 30px,
      #8BB43D 30px,
      #8BB43D 60px
    );
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 80px;
    left: 0;
    right: 0;
    height: 20px;
    background: #B85F3C;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 2rem;
  color: #FFD700;
  text-shadow: 2px 2px 0 #CC8833,
               4px 4px 0 #885500;
  font-family: 'Press Start 2P', cursive;
  letter-spacing: 2px;
  position: relative;
  z-index: 1;
`;

const StartButton = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background: #E52521;
  border: 4px solid #FFF;
  border-radius: 0;
  color: #FFF;
  cursor: pointer;
  font-family: 'Press Start 2P', cursive;
  position: relative;
  z-index: 1;
  box-shadow: 0 4px 0 #881111;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 0 #881111;
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0 2px 0 #881111;
  }
`;

const StartScreen = () => {
  const navigate = useNavigate();

  return (
    <StartContainer>
      <Cloud style={{ top: '20%', left: '10%' }} />
      <Cloud style={{ top: '15%', right: '15%' }} />
      <Cloud style={{ top: '30%', left: '60%' }} />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        style={{ position: 'relative', zIndex: 2 }}
      >
        <Title>Resume Quest</Title>
        <h2 style={{ 
          marginBottom: '2rem', 
          color: '#FFF',
          textShadow: '2px 2px 0 #000',
          fontFamily: "'Press Start 2P', cursive",
          fontSize: '1rem',
          position: 'relative',
          zIndex: 2
        }}>
          Press Start to Begin Your Journey!
        </h2>
        <StartButton
          whileHover={{ y: -2 }}
          whileTap={{ y: 2 }}
          onClick={() => navigate('/education')}
        >
          START
        </StartButton>
      </motion.div>

      <Pipe style={{ left: '10%' }} />
      <Pipe style={{ right: '10%' }} />
      
      <QuestionBox
        style={{ top: '40%', left: '20%' }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <QuestionBox
        style={{ top: '35%', right: '20%' }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
      
      <Coin style={{ top: '30%', left: '40%' }} />
      <Coin style={{ top: '25%', right: '35%' }} />
    </StartContainer>
  );
};

export default StartScreen;
