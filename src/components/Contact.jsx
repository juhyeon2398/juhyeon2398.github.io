import React from "react";
import styled from "styled-components";
import { FaEnvelope, FaGithub, FaPhone } from "react-icons/fa";

const Section = styled.section`
  max-width: 800px;
  margin: 0 auto 60px auto;
  padding: 3rem 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
`;

const SubText = styled.p`
  font-size: 1rem;
  color: #6b7280;
  margin-bottom: 2.5rem;
  line-height: 1.6;
`;

const InfoWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

const InfoItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.1rem;
  color: #374151;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    color: #4f46e5;
    transform: translateY(-3px);
  }
`;

const Icon = styled.span`
  color: #4f46e5;
  display: flex;
  align-items: center;
`;

function Contact() {
  const contactItems = [
    {
      icon: <FaEnvelope size={20} />,
      label: "wigeon6001340@gmail.com",
      href: "mailto:wigeon6001340@gmail.com",
    },
    {
      icon: <FaPhone size={20} />,
      label: "010-4027-4536",
      href: "tel:01040274536",
    },
    {
      icon: <FaGithub size={20} />,
      label: "github.com/juhyeon2398",
      href: "https://github.com/juhyeon2398",
    },
  ];

  return (
    <Section id="contact">
      <Title>Contact Me</Title>
      <SubText>
        새로운 기회에 항상 열려있습니다. 협업이나 기타 문의사항이 있다면 언제든 편하게 연락 주세요.
      </SubText>
      <InfoWrap>
        {contactItems.map((item, idx) => (
          <InfoItem key={idx} href={item.href} target="_blank" rel="noopener noreferrer">
            <Icon>{item.icon}</Icon>
            {item.label}
          </InfoItem>
        ))}
      </InfoWrap>
    </Section>
  );
}

export default Contact;