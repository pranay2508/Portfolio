import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";

const Container=styled.div`
display:flex;
flex-direction:column;
justify-content: center;
position: relative;
z-index:1;
align-items: center;
`;

const Wrapper=styled.div`
max-width:110px;
position:relative;
display:flex;
flex-direction:column;
justify-content: space-between;
align-items: center;
width: 100%;
gap:12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`;

const Title=styled.h1`
font-size:42px;
font-weight: 600;
text-align:center;
margin-top:20px;
color: ${({theme})=>theme.text_primary};
@media (max-width:768px) {
  margin-top: 12px;
  font-size:32px;
}
`;
const Desc=styled.div`
max-width: 600px;
font-size: 18px;
text-align: center;
color: ${({theme})=>theme.text_secondary};
@media (max-width:768px) {
  font-size:16px;
}
`;




const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          Here are some of my skills on which I have been working on for the past 2 years.
        </Desc>
        {/* <SkillsConainter>
          {skills.map((item) => (
            <Skill>
              <SkillTitle>{item.title}</SkillTitle>
              <SkillList>
                {item.skills.map((skill) => (
                  <SkillItem>
                    <SkillImage src={skill.image} />
                    {skill.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsConainter> */}
      </Wrapper>
    </Container>
  );
};

export default Skills;
