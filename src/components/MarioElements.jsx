import styled, { keyframes } from '@emotion/styled';
import { motion } from 'framer-motion';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const Coin = styled(motion.div)`
  width: 30px;
  height: 30px;
  background: #FFD700;
  border-radius: 50%;
  position: absolute;
  animation: ${float} 2s ease-in-out infinite;
  box-shadow: inset -4px -4px 0 #CC8833;
  z-index: 1;

  &::before {
    content: '$';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #CC8833;
    font-weight: bold;
  }
`;

export const Cloud = styled.div`
  width: 100px;
  height: 40px;
  background: #FFF;
  border-radius: 20px;
  position: absolute;
  opacity: 0.9;
  box-shadow: 
    30px -10px 0 10px #FFF,
    60px 0px 0 -5px #FFF;
  animation: ${float} 3s ease-in-out infinite;
`;

export const Pipe = styled.div`
  width: 60px;
  height: 100px;
  background: #00AA00;
  position: absolute;
  bottom: 100px;
  border: 4px solid #008800;
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -8px;
    right: -8px;
    height: 20px;
    background: #00CC00;
    border: 4px solid #008800;
  }
`;

export const QuestionBox = styled(motion.div)`
  width: 40px;
  height: 40px;
  background: #FFB400;
  position: absolute;
  border: 4px solid #CC8833;
  z-index: 1;

  &::before {
    content: '?';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #FFF;
    font-weight: bold;
    font-size: 1.5rem;
  }
`;

export const Block = styled.div`
  width: 40px;
  height: 40px;
  background: #B85F3C;
  position: absolute;
  border: 4px solid #884422;
`;
