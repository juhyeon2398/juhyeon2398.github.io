// AboutMe.jsx
import React from "react";
import { FaUser, FaBirthdayCake, FaMapMarkerAlt, FaEnvelope, FaUniversity, FaGithub } from "react-icons/fa";
import styled from "styled-components";
import profileImg from "../img/profile.jpg";
const Section = styled.section``;

const Avatar = styled.img`
  width: 250px;
  height: 300px;
  border-radius: 45%;
  object-fit: cover;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
  transition: transform 0.25s ease;
  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 520px) {
    width: 96px;
    height: 96px;
  }
`;

const TitleWrap = styled.div`
  width: 100%;
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


const Intro = styled.p`
  margin: 10px 0 28px;
  text-align: center;
  color: #374151;
  line-height: 1.75;
  font-size: 1.6rem;
  font-weight: 500;
  max-width: 1000px;
  margin: 50px auto;
  word-break: keep-all;
`;

const Grid = styled.div`
  a {
    text-decoration: none;
  }
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  h3 {
    margin: 0;

  }
  p {
    line-height: 1.5;
  }
  margin-bottom: 15px;
`;

const LabelIcon = styled.span`
  margin: 0 12px 0 0;
  font-size: 22px;
  color: #6366f1;
  display: flex;
  align-items: center;
`;

const Value = styled.p`
  margin: 0;
  color: #111827;
  word-break: break-all;
`;

const NameValue = styled(Value)`
  font-size: 2rem;
  font-weight: 800;
`;

const ContactValue = styled(Value)`
  font-size: 1.25rem;
  font-weight: 600;
`;

const DefaultValue = styled(Value)`
  font-size: 1rem;
  font-weight: 400;
`;

const ProfileWrap = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 30px;
  border-radius: 15px;
  background: linear-gradient(135deg, #ffffff 0%, #eef2ff 100%);
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 50px;
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.12);

`;

export default function AboutMe() {
  return (
    <Section id="about">
      <Intro>
        웹 퍼블리셔로 3년 동안 자사 웹사이트 유지보수와 이벤트 페이지 제작을 맡아 반응형 웹, 웹 접근성, 협업 경험을 쌓았습니다. 또한 퍼블리싱 파트장을 맡아 일정 조율과 산출물 검수를 진행하며 팀워크와 문제 해결 능력을 키웠습니다. <br/>
        최근에는 React.js를 중심으로 프론트엔드 기술을 학습하며 컴포넌트 기반 개발, 상태 관리, API 연동 역량을 익혔습니다. 퍼블리셔 시절 다져온 꼼꼼한 구현력과 사용자 경험 중심의 시각을 더해, 서비스 개선과 성능 최적화에 기여하는 프론트엔드 개발자로 성장하고자 합니다.
      </Intro>

      <TitleWrap>
        <Title>About</Title>

        <ProfileWrap>
          <Avatar src={profileImg} alt="Profile" />
          <Grid>
            <Card>
              <LabelIcon><FaUser /></LabelIcon>
              <NameValue>위건</NameValue>
            </Card>

            <Card>
              <LabelIcon><FaBirthdayCake /></LabelIcon>
              <DefaultValue>1994. 08. 12</DefaultValue>
            </Card>

            <Card>
              <LabelIcon><FaMapMarkerAlt /></LabelIcon>
              <DefaultValue>서울특별시 성동구</DefaultValue>
            </Card>

            <Card>
              <LabelIcon><FaEnvelope /></LabelIcon>
              <DefaultValue>wigeon6001340@gmail.com</DefaultValue>
            </Card>

            <Card>
              <LabelIcon><FaUniversity /></LabelIcon>
              <DefaultValue>선문대학교 ( 컴퓨터공학과 )</DefaultValue>
            </Card>

            <a href={"https://github.com/juhyeon2398"} target="_blank" rel="noreferrer">
              <Card>
                <LabelIcon>
                  <FaGithub />
                </LabelIcon>
                <DefaultValue>
                  GitHub
                </DefaultValue>
              </Card>
            </a>

          </Grid>
        </ProfileWrap>
      </TitleWrap>




    </Section>
  );
}
