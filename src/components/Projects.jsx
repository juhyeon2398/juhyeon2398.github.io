import React from "react";
import { FaGithub, FaFilePowerpoint, FaVideo } from "react-icons/fa";
import { SiNotion } from "react-icons/si";
import styled from "styled-components";

const Section = styled.section`
  max-width: 1000px;
  margin: 0 auto;
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


const Card = styled.div`
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  display: flex;
  gap: 2rem;
  box-sizing: border-box;
  padding: 30px;
  border-radius: 20px;
  margin-bottom: 2.5rem;
  background: #fff;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
`;

const ProjectImage = styled.div`
  flex: 0 0 280px;
  border-radius: 16px;
  overflow: hidden;
  border: ${({ $border }) => $border || "none"};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProjectContent = styled.div`
  flex: 1;
  padding: 1.8rem 1rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  color: ${({ theme }) => theme.primary || "#34495e"};
`;

const InfoList = styled.dl`
  margin: 0;
  font-size: 1rem;
  line-height: 1.7;

  dt {
    font-size: 1.15rem;
    font-weight: 700;
    margin-top: 0.6rem;
    color: #6366f1;
    letter-spacing: 0.01em;
  }
  dd {
    margin: 0 0 0.6rem 0;
    color: #555;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 0.5rem;
`;

const Tag = styled.span`
  background: ${({ theme }) => theme.primary || "#3498db"};
  color: white;
  font-size: 0.85rem;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-weight: 500;
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    display: flex;
    align-items: center;
  }
`;

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Fitsync",
      members: "팀원: 4명",
      work: "소셜 로그인 (구글, 카카오, 네이버), 운동 기능 (루틴 관리, 운동 기록 관리), 관리자 페이지 (운동 관리, 신고, 자격 인증)",
      period: "2025년 7월 7일 ~ 8월 13일 (총 6주)",
      tech: ["HTML", "CSS", "JavaScript", "React", "Java", "Oracle DB", "styled-components", "Spring framework"],
      img: require("../img/fitsync.png"),
      git: "https://github.com/juhyeon2398/soldeskProject2",
      ppt: require("../files/fitsync.pdf"),
      video: "https://www.youtube.com/watch?v=IHvCG2hoNL0",
      notion: "https://graceful-centaur-bbe.notion.site/2-2123b9266943801a9309d8e0c7702ebf",
    },
    {
      id: 2,
      title: "Eventore",
      members: "팀원: 4명",
      work: "회원가입, 로그인, 사이트 메인, 공지사항, 이벤트 리스트, 쪽지",
      period: "2025년 4월 15일 ~ 5월 12일 (총 4주)",
      tech: ["HTML", "CSS", "JavaScript", "Java", "Oracle DB", "Spring framework"],
      img: require("../img/Eventore.png"),
      git: "https://github.com/yourjinKR/storemap2",
      ppt: require("../files/storemap.pdf"),
      notion: "https://graceful-centaur-bbe.notion.site/1-1d03b926694380d7a931d548b408e20b",
    },
  ];

  return (
    <Section id="projects">
      <Title>Projects</Title>
      {projects.map((p) => (
        <Card key={p.id}>
          <ProjectImage $border={p.id === 2 ? "1px solid #ddd" : "none"}>
            <img src={p.img} alt={`${p.title} 이미지`} />
          </ProjectImage>
          <ProjectContent>
            <ProjectTitle>{p.title}</ProjectTitle>
            <InfoList>
              <dt>팀 구성</dt>
              <dd>{p.members}</dd>
              <dt>담당 업무</dt>
              <dd>{p.work}</dd>
              <dt>개발 기간</dt>
              <dd>{p.period}</dd>
              <dt>기술 스택</dt>
              <dd>
                <TechStack>
                  {p.tech.map((t, idx) => (
                    <Tag key={idx}>{t}</Tag>
                  ))}
                </TechStack>
              </dd>
            </InfoList>
            <Links>
              <a href={p.git} target="_blank" rel="noopener noreferrer" title="GitHub">
                <FaGithub size={22} style={{ color: "#333" }} />
              </a>
              <a href={p.notion} target="_blank" rel="noopener noreferrer" title="Notion">
                <SiNotion size={22} style={{ color: "#111" }} />
              </a>
              {p?.video && 
                <a href={p.video} target="_blank" rel="noopener noreferrer" title="시연영상">
                  <FaVideo size={22} style={{ color: "#6366f1" }} />
                </a>
              }
              <a href={p.ppt} target="_blank" rel="noopener noreferrer" title="PPT">
                <FaFilePowerpoint size={22} style={{ color: "#d13d35" }} />
              </a>
            </Links>
          </ProjectContent>
        </Card>
      ))}
    </Section>
  );
}

export default Projects;
