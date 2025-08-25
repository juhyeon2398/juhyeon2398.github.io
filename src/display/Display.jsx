import React from 'react';
import styled, { keyframes } from 'styled-components';
import AboutMe from '../components/AboutMe.jsx';
import Skills from '../components/Skills.jsx';
import Projects from '../components/Projects.jsx';
import Contact from '../components/Contact.jsx';
import Header from '../components/Header.jsx';

// 이전에 정의한 Raindrop, RainContainer 스타일은 그대로 유지합니다.
const rainAnimation = keyframes`
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(100vh); opacity: 0.5; }
`;

const Raindrop = styled.div`
  position: absolute;
  width: 2px;
  height: 20px;
  background: rgba(174, 194, 224, 0.8);
  bottom: 100%;
  animation: ${rainAnimation} linear infinite;
  animation-duration: ${({ duration }) => duration}s;
  animation-delay: ${({ delay }) => delay}s;
  opacity: 0;
  border-radius: 50%;
  transform-origin: bottom;
  box-shadow: 0 0 5px rgba(174, 194, 224, 0.5);
`;

const RainContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: -1; /* 비는 항상 가장 뒤에 위치 */
`;

// 모든 콘텐츠를 감쌀 새로운 래퍼 컴포넌트
const ContentWrapper = styled.div`
  position: relative; /* z-index를 적용하기 위한 필수 속성 */
  z-index: 1; /* 비보다 높은 z-index */
`;

const Divider = styled.div`
  width: 100%;
  height: 0;
  border-bottom: 2px dotted #cbd5e1;
  margin: 48px 0;
`;

function Display() {
  const drops = Array.from({ length: 100 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}vw`,
    duration: Math.random() * 1 + 0.5,
    delay: Math.random() * 5,
  }));

  return (
    <>
      {/*
      
      <RainContainer>
        {drops.map((drop) => (
          <Raindrop
            key={drop.id}
            style={{ left: drop.left }}
            duration={drop.duration}
            delay={drop.delay}
          />
        ))}
      </RainContainer>
      */}
      <ContentWrapper>
        <Header />
        <AboutMe />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <Contact />
      </ContentWrapper>
    </>
  );
}

export default Display;