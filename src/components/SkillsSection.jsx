import React from 'react';
import styled from 'styled-components';

const SkillsSection = () => {
  return (
    <SkillsSectionContainer>
      <AboutHeader>Skills</AboutHeader>
      <AboutSubHeader>The things that I do</AboutSubHeader>
      <ContentContainer>

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
        <SectionHeader>IT Services</SectionHeader>
        <SectionImage src="images/IT.png" alt="IT Support" />
        <SectionContent>
          <p>
            I have lots of experience with IT support, database management, and various tools.
          </p>
          <ListHeader>Tools</ListHeader>
          <List>
            <ListItem>Azure</ListItem>
            <ListItem>AWS</ListItem>
            <ListItem>Salesforce</ListItem>
            <ListItem>Docker</ListItem>
            <ListItem>SQL Server</ListItem>
          </List>
        </SectionContent>
      </Section>
      </ContentContainer>
    </SkillsSectionContainer>
  );
};

export default SkillsSection;

const SkillsSectionContainer = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction:column;
  width:100%;
  margin: 0 auto;
  @media (min-width: 768px) {
  }
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction:row;
  flex-wrap:wrap;
  width:100%;
  justify-content:center;
  gap:1em;
  margin: 0 auto;
  @media (min-width: 768px) {
  }
`;
const AboutHeader = styled.h3`
  font-size: 2rem;
  padding-left:1rem;
`;

const AboutSubHeader = styled.h5`
  text-align: left;
  font-weight: 600;
  margin-bottom: 1em;
      padding-left:1rem;

&::after {
  content: "";
  display: block;
  width: 32px;
  padding-top: 3px;
  border-bottom: 2px solid #757576;

}`;

const Section = styled.div`
    display: flex;
    width:max-content;
    max-width:96vw;
    flex-direction: column;
    gap: 1em;
    background-color: #f4f4f4;
    color: #000;
    padding: 2em 1em;
    border-radius: 2px;
    text-align: left;
      @media (min-width: 768px) {
         width:min-content;
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
   display: grid;
    width:min-content;
    grid-template-rows:120px 40px 60px;
    width:100%;
`;

const ListHeader = styled.h5`
  font-size: 1.2rem;
  font-weight: 600;
  text-align:center;
  white-space:nowrap;
`;
const List = styled.ul`

line-height:1em;
 list-style-type: none;
 padding-left: 0;
 margin: 0;
 margin-bottom:0.5em;
 display: flex;
 justify-content: center;
 flex-wrap: wrap;
 font-family: 'Roboto', sans-serif;
 gap: 0.4em; /* Controls the space between items */
 font-weight:500;
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