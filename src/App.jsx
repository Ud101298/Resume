import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
`;

const spinAnimation = keyframes`
  from { transform: rotateY(0deg); }
  to { transform: rotateY(360deg); }
`;

const GameContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  background: linear-gradient(0deg, #5C94FC 0%, #8AA8FC 100%);
  color: #fff;
  font-family: 'Press Start 2P', cursive;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;

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
`

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  position: relative;
  z-index: 1;
  padding: 40px 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`

const Title = styled.h1`
  font-size: clamp(1.5rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 0 #CC8833,
               4px 4px 0 #885500;
  color: #FFD700;
  text-shadow: 2px 2px 0 #CC8833,
               4px 4px 0 #885500;
  margin-bottom: 2rem;
`

const StartButton = styled.button`
  padding: clamp(0.5rem, 2vw, 1rem) clamp(1rem, 4vw, 2rem);
  font-size: clamp(0.8rem, 2vw, 1.2rem);
  background: #E52521;
  border: 4px solid #FFF;
  color: #FFF;
  cursor: pointer;
  font-family: 'Press Start 2P', cursive;
  width: fit-content;
  max-width: 90%;
  position: relative;
  z-index: 1;
  box-shadow: 0 4px 0 #881111;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 0 #881111;
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0 2px 0 #881111;
  }
`

const Cloud = styled.div`
  width: clamp(50px, 10vw, 100px);
  height: clamp(20px, 4vw, 40px);
  background: #FFF;
  border-radius: clamp(10px, 2vw, 20px);
  position: absolute;
  opacity: 0.9;
  box-shadow: 
    clamp(15px, 3vw, 30px) clamp(-5px, -1vw, -10px) 0 clamp(5px, 1vw, 10px) #FFF,
    clamp(30px, 6vw, 60px) 0px 0 clamp(-2.5px, -0.5vw, -5px) #FFF;

  &:nth-of-type(1) {
    top: 20%;
    left: 10%;
    animation: ${floatAnimation} 8s ease-in-out infinite;
  }

  &:nth-of-type(2) {
    top: 30%;
    right: 15%;
    animation: ${floatAnimation} 10s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
`

const Pipe = styled.div`
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
`

const Coin = styled.div`
  width: clamp(20px, 3vw, 30px);
  height: clamp(20px, 3vw, 30px);
  background: #FFD700;
  border-radius: 50%;
  position: absolute;
  animation: ${floatAnimation} 2s ease-in-out infinite,
             ${spinAnimation} 3s linear infinite;
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
`

function App() {
  return (
    <Router basename="/Resume">
      <Routes>
        <Route path="/" element={
          <GameContainer>
            <Cloud />
            <Cloud />
            <Pipe style={{ left: '10%' }} />
            <Pipe style={{ right: '10%' }} />
            <Coin style={{ top: '30%', left: '40%' }} />
            <Coin style={{ top: '25%', right: '35%' }} />
            <MainContent>
              <Title>Resume Quest</Title>
              <StartButton onClick={() => window.location.href = '/education'}>
                START JOURNEY
              </StartButton>
            </MainContent>
          </GameContainer>
        } />
        <Route path="/education" element={
          <GameContainer>
            <MainContent>
              <Title>Education Level</Title>
              <div style={{ color: '#FFD700', marginBottom: '20px' }}>
                <h2>Amity University</h2>
                <p>Bachelor of Technology</p>
                <p>Computer Science and Engineering</p>
                <p>CGPA: 8.4/10 | 2020 - 2024</p>
                <p>Full Stack Development, Python,Web Designing,Content Writer</p>
              </div>
              <div style={{ display: 'flex', gap: '20px' }}>
                <StartButton onClick={() => window.location.href = '/'}>
                  ← PREVIOUS
                </StartButton>
                <StartButton onClick={() => window.location.href = '/experience'}>
                  NEXT LEVEL →
                </StartButton>
              </div>
            </MainContent>
          </GameContainer>
        } />
        <Route path="/experience" element={
          <GameContainer>
            <MainContent>
              <Title>Experience Level 1</Title>
              <div style={{ 
                color: '#FFD700', 
                marginBottom: '20px',
                width: '100%',
                maxWidth: '900px',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)'
              }}>
                <h2 style={{ 
                  borderBottom: '2px solid #FFD700',
                  paddingBottom: '10px',
                  marginBottom: '20px'
                }}>Recent Professional Experience</h2>
                <div style={{ 
                  marginBottom: '25px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  padding: '15px',
                  borderRadius: '8px',
                  transition: 'transform 0.2s',
                  ':hover': {
                    transform: 'translateY(-2px)'
                  }
                }}>
                  <h3 style={{ 
                    color: '#FFD700',
                    marginBottom: '10px',
                    fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)'
                  }}>NCR Atleos Corporation | Software Engineer</h3>
                  <p style={{ 
                    color: '#AAA',
                    marginBottom: '12px',
                    fontSize: 'clamp(0.8rem, 1.2vw, 1rem)'
                  }}>Nov 2024 - Present | Gurugram, India</p>
                  <ul style={{ 
                    listStyleType: 'none', 
                    padding: '0',
                    fontSize: 'clamp(0.8rem, 1.2vw, 0.95rem)',
                    lineHeight: '1.6'
                  }}>
                    <li>• Designed and implemented automation solutions for Anaplan & EPM Cloud processes</li>
                    <li>• Managed product backlog and translated business requirements into technical solutions</li>
                    <li>• Achieved 95% on-time delivery through 2-week sprint cycles</li>
                    <li>• Led SIT, UAT, SAT, and Hypercare phases for EPM/Anaplan solutions</li>
                  </ul>
                </div>
                <div style={{ 
                  marginBottom: '25px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  padding: '15px',
                  borderRadius: '8px'
                }}>
                  <h3 style={{ 
                    color: '#FFD700',
                    marginBottom: '10px',
                    fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)'
                  }}>NCR Voyix Corporation | IT Product Owner</h3>
                  <p style={{ 
                    color: '#AAA',
                    marginBottom: '12px',
                    fontSize: 'clamp(0.8rem, 1.2vw, 1rem)'
                  }}>Mar 2024 - Nov 2024 | Gurugram, India</p>
                  <ul style={{ 
                    listStyleType: 'none', 
                    padding: '0',
                    fontSize: 'clamp(0.8rem, 1.2vw, 0.95rem)',
                    lineHeight: '1.6'
                  }}>
                    <li>• Bridged IT & Business for Anaplan supply chain and financial planning</li>
                    <li>• Enhanced Oracle ARCS and EPM modules through prioritized roadmap</li>
                    <li>• Designed financial planning dashboards and KPIs with stakeholders</li>
                    <li>• Improved sprint completion rate by 20% through Agile ceremonies</li>
                  </ul>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '20px' }}>
                <StartButton onClick={() => window.location.href = '/education'}>
                  ← PREVIOUS
                </StartButton>
                <StartButton onClick={() => window.location.href = '/experience2'}>
                  NEXT PAGE →
                </StartButton>
              </div>
            </MainContent>
          </GameContainer>
        } />
        <Route path="/experience2" element={
          <GameContainer>
            <MainContent>
              <Title>Experience Level 2</Title>
              <div style={{ 
                color: '#FFD700', 
                marginBottom: '20px',
                width: '100%',
                maxWidth: '900px',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)'
              }}>
                <h2 style={{ 
                  borderBottom: '2px solid #FFD700',
                  paddingBottom: '10px',
                  marginBottom: '20px'
                }}>Previous Experience</h2>
                <div style={{ 
                  marginBottom: '25px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  padding: '15px',
                  borderRadius: '8px'
                }}>
                  <h3 style={{ 
                    color: '#FFD700',
                    marginBottom: '10px',
                    fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)'
                  }}>NCR Atleos Corporation | IT Product Owner</h3>
                  <p style={{ 
                    color: '#AAA',
                    marginBottom: '12px',
                    fontSize: 'clamp(0.8rem, 1.2vw, 1rem)'
                  }}>Oct 2023 - Mar 2024 | Gurugram, India</p>
                  <ul style={{ 
                    listStyleType: 'none', 
                    padding: '0',
                    fontSize: 'clamp(0.8rem, 1.2vw, 0.95rem)',
                    lineHeight: '1.6'
                  }}>
                    <li>• Deployed EPM Cloud features for streamlined reporting</li>
                    <li>• Delivered new forecasting and planning capabilities</li>
                  </ul>
                </div>
                <div style={{ 
                  marginBottom: '25px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  padding: '15px',
                  borderRadius: '8px'
                }}>
                  <h3 style={{ 
                    color: '#FFD700',
                    marginBottom: '10px',
                    fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)'
                  }}>NCR Corporation | IT Product Owner</h3>
                  <p style={{ 
                    color: '#AAA',
                    marginBottom: '12px',
                    fontSize: 'clamp(0.8rem, 1.2vw, 1rem)'
                  }}>Apr 2023 - Oct 2023 | Gurugram, India</p>
                  <ul style={{ 
                    listStyleType: 'none', 
                    padding: '0',
                    fontSize: 'clamp(0.8rem, 1.2vw, 0.95rem)',
                    lineHeight: '1.6'
                  }}>
                    <li>• Enhanced EPM Cloud modules for financial operations</li>
                    <li>• Led sprint planning and testing phases</li>
                  </ul>
                </div>
                <div style={{ 
                  marginBottom: '25px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  padding: '15px',
                  borderRadius: '8px'
                }}>
                  <h3 style={{ 
                    color: '#FFD700',
                    marginBottom: '10px',
                    fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)'
                  }}>NCR Corporation | Application Development Engineer</h3>
                  <p style={{ 
                    color: '#AAA',
                    marginBottom: '12px',
                    fontSize: 'clamp(0.8rem, 1.2vw, 1rem)'
                  }}>Oct 2020 - Apr 2023 | Gurugram, India</p>
                  <ul style={{ 
                    listStyleType: 'none', 
                    padding: '0',
                    fontSize: 'clamp(0.8rem, 1.2vw, 0.95rem)',
                    lineHeight: '1.6'
                  }}>
                    <li>• Developed Anaplan models for Supply Chain and Forecasting</li>
                    <li>• Automated data loads to improve refresh efficiency</li>
                    <li>• Maintained Oracle DRM applications and led year-end activities</li>
                    <li>• Implemented Informatica Cloud integrations for finance automation</li>
                  </ul>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '20px' }}>
                <StartButton onClick={() => window.location.href = '/experience'}>
                  ← PREVIOUS
                </StartButton>
                <StartButton onClick={() => window.location.href = '/skills'}>
                  NEXT LEVEL →
                </StartButton>
              </div>
            </MainContent>
          </GameContainer>
        } />
        <Route path="/experience2" element={
          <GameContainer>
            <MainContent>
              <Title>Experience Level 2</Title>
              <div style={{ 
                color: '#FFD700', 
                marginBottom: '20px',
                width: '100%',
                maxWidth: '900px',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)'
              }}>
                <h2 style={{ 
                  borderBottom: '2px solid #FFD700',
                  paddingBottom: '10px',
                  marginBottom: '20px'
                }}>Previous Experience</h2>
                <div style={{ 
                  marginBottom: '25px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  padding: '15px',
                  borderRadius: '8px'
                }}>
                  <h3 style={{ 
                    color: '#FFD700',
                    marginBottom: '10px',
                    fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)'
                  }}>NCR Atleos Corporation | IT Product Owner</h3>
                  <p style={{ 
                    color: '#AAA',
                    marginBottom: '12px',
                    fontSize: 'clamp(0.8rem, 1.2vw, 1rem)'
                  }}>Oct 2023 - Mar 2024 | Gurugram, India</p>
                  <ul style={{ 
                    listStyleType: 'none', 
                    padding: '0',
                    fontSize: 'clamp(0.8rem, 1.2vw, 0.95rem)',
                    lineHeight: '1.6'
                  }}>
                    <li>• Deployed EPM Cloud features for streamlined reporting</li>
                    <li>• Delivered new forecasting and planning capabilities</li>
                  </ul>
                </div>
                <div style={{ 
                  marginBottom: '25px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  padding: '15px',
                  borderRadius: '8px'
                }}>
                  <h3 style={{ 
                    color: '#FFD700',
                    marginBottom: '10px',
                    fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)'
                  }}>NCR Corporation | IT Product Owner</h3>
                  <p style={{ 
                    color: '#AAA',
                    marginBottom: '12px',
                    fontSize: 'clamp(0.8rem, 1.2vw, 1rem)'
                  }}>Apr 2023 - Oct 2023 | Gurugram, India</p>
                  <ul style={{ 
                    listStyleType: 'none', 
                    padding: '0',
                    fontSize: 'clamp(0.8rem, 1.2vw, 0.95rem)',
                    lineHeight: '1.6'
                  }}>
                    <li>• Enhanced EPM Cloud modules for financial operations</li>
                    <li>• Led sprint planning and testing phases</li>
                  </ul>
                </div>
                <div style={{ 
                  marginBottom: '25px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  padding: '15px',
                  borderRadius: '8px'
                }}>
                  <h3 style={{ 
                    color: '#FFD700',
                    marginBottom: '10px',
                    fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)'
                  }}>NCR Corporation | Application Development Engineer</h3>
                  <p style={{ 
                    color: '#AAA',
                    marginBottom: '12px',
                    fontSize: 'clamp(0.8rem, 1.2vw, 1rem)'
                  }}>Oct 2020 - Apr 2023 | Gurugram, India</p>
                  <ul style={{ 
                    listStyleType: 'none', 
                    padding: '0',
                    fontSize: 'clamp(0.8rem, 1.2vw, 0.95rem)',
                    lineHeight: '1.6'
                  }}>
                    <li>• Developed Anaplan models for Supply Chain and Forecasting</li>
                    <li>• Automated data loads to improve refresh efficiency</li>
                    <li>• Maintained Oracle DRM applications and led year-end activities</li>
                    <li>• Implemented Informatica Cloud integrations for finance automation</li>
                  </ul>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '20px' }}>
                <StartButton onClick={() => window.location.href = '/experience'}>
                  ← PREVIOUS
                </StartButton>
                <StartButton onClick={() => window.location.href = '/skills'}>
                  NEXT LEVEL →
                </StartButton>
              </div>
            </MainContent>
          </GameContainer>
        } />
        <Route path="/skills" element={
          <GameContainer>
            <MainContent>
              <Title>Skills Level</Title>
              <div style={{ 
                color: '#FFD700', 
                marginBottom: '20px',
                width: '100%',
                maxWidth: '900px',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)'
              }}>
                <h2 style={{ 
                  borderBottom: '2px solid #FFD700',
                  paddingBottom: '10px',
                  marginBottom: '20px'
                }}>Technical Skills</h2>
                <div style={{ marginBottom: '15px' }}>
                  <h3>Languages & Frameworks</h3>
                  <p>JavaScript • Python • Java • React.js • Node.js • Shell • Batch</p>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <h3>Developer Tools</h3>
                  <p>Git • Azure PySpark • Azure Pipelines • Azure DevOps • IICS • OIC • OCI</p>
                </div>
                <div>
                  <h3>Technologies</h3>
                  <p>MongoDB • Anaplan • EPM Cloud • ARCS • REST APIs • ERP</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '20px' }}>
                <StartButton onClick={() => window.location.href = '/experience2'}>
                  ← PREVIOUS
                </StartButton>
                <StartButton onClick={() => window.location.href = '/projects'}>
                  NEXT LEVEL →
                </StartButton>
              </div>
              {/* <StartButton onClick={() => window.location.href = '/projects'}>
                NEXT LEVEL →
              </StartButton> */}
            </MainContent>
          </GameContainer>
        } />
        <Route path="/projects" element={
          <GameContainer>
            <MainContent>
              <Title>Projects Level</Title>
              <div style={{ 
                color: '#FFD700', 
                marginBottom: '20px',
                width: '100%',
                maxWidth: '900px',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)'
              }}>
                <h2 style={{ 
                  borderBottom: '2px solid #FFD700',
                  paddingBottom: '10px',
                  marginBottom: '20px'
                }}>Certifications</h2>
                <div style={{ marginBottom: '15px' }}>
                  <h3>Anaplan Level 1,2 ,Professional Model Builder</h3>
                  <p>Issued by Anaplan </p>
                </div>
                <div style={{ marginBottom: '15px' }}>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <h3>Oracle DRM</h3>
                  <p>Issued by Oracle </p>
                </div>
                <div>
                  <h3>OCI Gen AI Professional</h3>
                  <p>Issued by Oracle </p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '20px' }}>
                <StartButton onClick={() => window.location.href = '/skills'}>
                  ← PREVIOUS
                </StartButton>
                <StartButton onClick={() => window.location.href ='/'}>
                RETURN TO START
                </StartButton>
              </div>
              {/* <StartButton onClick={() => window.location.href = '/'}>
                RETURN TO START
              </StartButton> */}
            </MainContent>
          </GameContainer>
        } />
      </Routes>
    </Router>
  )
}

export default App
