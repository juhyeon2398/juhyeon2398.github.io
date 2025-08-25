import React from "react";
import styled from "styled-components";

const Section = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  border-radius: 32px;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: #1f2937;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  padding-bottom: 0.25rem;
`;

const SkillItem = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
`;

const SkillName = styled.div`
  font-weight: 700;
  font-size: 1.15rem;
  min-width: 180px;
  margin-right: 1.5rem;
  flex-shrink: 0;
`;

const BarWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  flex: 1;
`;

const ProgressBar = styled.div`
  background: #f3f4f6;
  border-radius: 5px;
  width: 100%;
  min-width: 400px;
  height: 38px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(99,102,241,0.08);
  position: relative;
`;

const ProgressFill = styled.div`
  height: 100%;
  border-radius: 5px;
  transition: width 2s cubic-bezier(0.4,0,0.2,1);
  position: absolute;
  left: 0;
  top: 0;
  background: #6366f1;
`;

const PercentText = styled.span`
  font-weight: 700;
  font-size: 1.1rem;
`;

export default function Skills() {
  const skills = [
    // Language
    { name: "HTML5", percent: 95, bg: "#e34f26", color: "#fff" },
    { name: "CSS3", percent: 90, bg: "#264de4", color: "#fff" },
    { name: "JavaScript", percent: 90, bg: "#f7df1e", color: "#000" },
    { name: "React", percent: 80, bg: "#61dafb", color: "#000" },
    { name: "Styled-Components", percent: 80, bg: "#c43bad", color: "#fff" },
    { name: "jQuery", percent: 70, bg: "#0868ac", color: "#fff" },
    { name: "Java", percent: 80, bg: "#d13d35", color: "#fff" },
    { name: "PHP", percent: 70, bg: "#777bb3", color: "#fff" },
    { name: "JSP", percent: 65, bg: "#f59e0b", color: "#fff" },
    { name: "SQL", percent: 75, bg: "#2563eb", color: "#fff" },
    // Frontend
    { name: "Ajax", percent: 65, bg: "#111827", color: "#fff" },
  ];

  // 그래프 애니메이션: 해당 영역 진입 시 2초 동안 차오름
  const [animated, setAnimated] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById('skills');
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setAnimated(true);
        window.removeEventListener('scroll', onScroll);
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Section id="skills">
      <Title>Skills</Title>
      <div>
        {skills.map((s) => (
          <SkillItem key={s.name}>
            <SkillName>{s.name}</SkillName>
            <BarWrap>
              <ProgressBar>
                <ProgressFill style={{ width: animated ? `${s.percent}%` : '0%' }} />
              </ProgressBar>
              <PercentText style={{ color: '#6366f1' }}>{s.percent}%</PercentText>
            </BarWrap>
          </SkillItem>
        ))}
      </div>
    </Section>
  );
}
