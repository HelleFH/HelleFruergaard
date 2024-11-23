import React from 'react';
import styled from 'styled-components';

const SkillsSection = () => {
  return (
    <SkillsSectionContainer>
      <AboutHeader>Skills</AboutHeader>
      <AboutSubHeader>The things that I do</AboutSubHeader>

      {/* Web Development Section */}
      <Section>
        <SectionHeader>Web Development</SectionHeader>
        <SectionImage src="images/coding.png" alt="Frontend Development" />
        <SectionContent>
          <p>
            I enjoy making code from scratch, and bringing ideas to life in the browser.
          </p>
          <ListHeader>Languages that I speak</ListHeader>
          <List>
            <ListItem>HTML</ListItem>
            <ListItem>CSS</ListItem>
            <ListItem>JavaScript</ListItem>
            <ListItem>Sass</ListItem>
            <ListItem>PHP</ListItem>
          </List>
          <ListHeader>Frameworks, Tools, and Libraries</ListHeader>
          <List>
            <ListItem>React</ListItem>
            <ListItem>Vue</ListItem>
            <ListItem>Bootstrap</ListItem>
            <ListItem>Tailwind CSS</ListItem>
            <ListItem>JQuery</ListItem>
          </List>
        </SectionContent>
      </Section>

      {/* Design Section */}
      <Section>
        <SectionHeader>Design</SectionHeader>
        <SectionImage src="images/design.png" alt="Design" />
        <SectionContent>
          <p>
            I value simple content structure, clean design patterns, and thoughtful interactions.
          </p>
          <ListHeader>Design tools</ListHeader>
          <List>
            <ListItem>Affinity Designer</ListItem>
            <ListItem>Figma</ListItem>
            <ListItem>Canva</ListItem>
            <ListItem>Pen and Paper</ListItem>
          </List>
        </SectionContent>
      </Section>

      {/* IT Support Section */}
      <Section>
        <SectionHeader>Webmaster and IT Support</SectionHeader>
        <SectionImage src="images/IT.png" alt="IT Support" />
        <SectionContent>
          <p>
            I have lots of experience with IT support, database management, and various tools.
          </p>
          <ListHeader>Software</ListHeader>
          <List>
            <ListItem>Azure</ListItem>
            <ListItem>AWS</ListItem>
            <ListItem>Salesforce</ListItem>
            <ListItem>Docker</ListItem>
            <ListItem>SQL Server</ListItem>
            <ListItem>Oracle</ListItem>
          </List>
        </SectionContent>
      </Section>
    </SkillsSectionContainer>
  );
};

export default SkillsSection;

const SkillsSectionContainer = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;

  max-width: 96vw;
  margin: 0 auto;
width:100%;
  @media (min-width: 768px) {
    margin-bottom: 4em;
  }
`;

const AboutHeader = styled.h3`
  font-size: 2rem;
  font-family: 'Istok Web', sans-serif;
`;

const AboutSubHeader = styled.h5`
  text-align: left;
  font-weight: 600;
  margin-bottom: 1em;
  border-bottom: 1px solid gray;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  background-color: #fff;
  color: #000;
  padding: 1em;
  border: 2px solid #d9d9d9;
  border-radius:2px;
  margin-bottom: 5em;
  text-align:left;

  @media (min-width: 768px) {
    margin-bottom: 2em;
  }
`;

const SectionHeader = styled.h3`
  font-size: 1.5rem;
  color: #343434;
  font-family: 'Roboto', sans-serif;
`;

const SectionImage = styled.img`
  max-width: 200px;
  margin: 0 auto 1em;
`;

const SectionContent = styled.div`
  text-align: left;
`;

const ListHeader = styled.h5`
  margin-top: 1em;
  font-size: 1.2rem;
  font-weight: 600;
  text-align:center;
  text-decoration:underline;
  white-space:nowrap;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4em;
  justify-content:center;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
`;

const ListItem = styled.li`
  font-size: 1em;
  position: relative;
  font-weight: 600;

  &::before {
    content: '•';
    margin-right: 0.4em;
    font-size: 1em;
  }
`;
