// SkillsSection.js
import React from 'react';
import styled from 'styled-components';

const SkillsSection = () => {
  return (
    
    <SkillsSectionContainer>
      <AboutHeader>Skills</AboutHeader>
<AboutSubHeader>The Things That I Do</AboutSubHeader>
      {/* Frontend Development Section */}
      <Section>
        <SectionHeader>Frontend Development</SectionHeader>
        <SectionImage src="images/coding.png" alt="Frontend Development" />
        <div>
          <p>I enjoy making code from scratch, and enjoy bringing ideas to life in the browser.</p>
          <br />
          <ListHeader>Languages that I speak</ListHeader>
          <List>
            <ListItem>HTML</ListItem>
            <ListItem>CSS</ListItem>
            <ListItem>JavaScript</ListItem>
            <ListItem>Sass</ListItem>
            <ListItem>PHP</ListItem>
          </List>
          <br />
          <ListHeader>Frameworks, Tools, and Libraries</ListHeader>
          <List>
            <ListItem>React</ListItem>
            <ListItem>Vue</ListItem>
            <ListItem>Bootstrap</ListItem>
            <ListItem>Tailwind CSS</ListItem>
            <ListItem>JQuery</ListItem>
          </List>
        </div>
      </Section>

      {/* Design Section */}
      <Section>
        <SectionHeader>Design</SectionHeader>
        <SectionImage src="images/design.png" alt="Design" />
        <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
        <br />
        <ListHeader>Design Tools</ListHeader>
        <List>
          <ListItem>Affinity Designer</ListItem>
          <ListItem>Figma</ListItem>
          <ListItem>Canva</ListItem>
          <ListItem>Pen and Paper</ListItem>
        </List>
      </Section>

      {/* IT Support Section */}
      <Section>
        <SectionHeader>Webmaster and IT Support</SectionHeader>
        <SectionImage src="images/IT.png" alt="IT Support" />
        <p>I have lots of experience with IT support, database management, and various tools.</p>
        <br />
        <ListHeader>Software</ListHeader>
        <List>
          <ListItem>Azure</ListItem>
          <ListItem>AWS</ListItem>
          <ListItem>Salesforce</ListItem>
          <ListItem>Docker</ListItem>
          <ListItem>SQL Server</ListItem>
          <ListItem>Oracle</ListItem>
        </List>
      </Section>
    </SkillsSectionContainer>
  );
};

export default SkillsSection;

const SkillsSectionContainer = styled.div`
align-self:flex-start;
  display:flex;
  flex-direction:column;
  max-width:80vw;
  margin:0 auto;
    @media (min-width: 768px) {
    margin-bottom:4em;

  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
   background-color: white;
   color:black;
  padding: 2em 1em;
  border-radius: 10px;
  height: fit-content;
  margin-bottom:5em;
      @media (min-width: 768px) {
    margin-bottom:2em;

  }
`;

const SectionImage = styled.img`
  max-width: 200px;
  margin: 0 auto;
  margin-bottom:1em;
`;


const AboutHeader = styled.h3`
  font-size: 2rem;
    font-family:'Istok Web' !important;
  

`;
const AboutSubHeader = styled.h5`
text-align:left;
font-weight:600 !important;
margin-bottom:1em;
border-bottom:1px gray solid;
`;

const SectionHeader = styled.h3`
  font-size: 1.5rem;
  color:#343434;
    font-family:'Roboto' !important;

`;

const List = styled.ul`
line-height:1em;
  list-style-type: none;
  padding-left: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-family: 'Roboto', sans-serif;
  gap: 0.4em; /* Controls the space between items */
  font-weight:500;
`;

const ListHeader = styled.h5`
`;

const ListItem = styled.li`
  font-size: 1em;
  display: inline-block;
  position: relative;
  font-weight:600;

  /* Add the dot before each item */
  &::before {
    content: "•";
    margin-right: 0.4em;  /* Adds space between the dot and text */
    font-size: 1em; /* Adjusts size of the dot */
  }

  &:first-child::before {
    content: ''; /* Remove the dot before the first item */
  }
`;
