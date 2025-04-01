import React from 'react';
import styled from 'styled-components';

const SkillsSection = () => {
  return (
    <SkillsSectionContainer>
      <AboutHeader>Skills</AboutHeader>
      <AboutSubHeader>The things that I do</AboutSubHeader>
      <ContentContainer>

        {/* Web Development Section */}
        <Section>
          <SectionHeader>Web Development</SectionHeader>
          <SectionImage src="images/design.png" alt="Full Stack Development" />
          <SectionContent>
            <p>
              I develop scalable, efficient, and maintainable web applications using modern frameworks and technologies.
            </p>
            <ListHeader>Technologies & Languages</ListHeader>
            <List>
              <ListItem>JavaScript (ES6+)</ListItem>
              <ListItem>TypeScript</ListItem>
              <ListItem>React.js / Redux</ListItem>
              <ListItem>Vue.js</ListItem>
              <ListItem>Node.js / Express.js</ListItem>
              <ListItem>MongoDB</ListItem>
              <ListItem>Firebase</ListItem>
            </List>
          </SectionContent>
        </Section>

        {/* Backend & API Development Section */}
        <Section>
          <SectionHeader>Backend & API Development</SectionHeader>
          <SectionImage src="images/coding.png" alt="Backend Development" />
          <SectionContent>
            <p>
              I build and manage robust backend systems, including RESTful and GraphQL APIs, ensuring performance and security.
            </p>
            <ListHeader>Technologies & Tools</ListHeader>
            <List>
              <ListItem>Node.js / Express.js</ListItem>
              <ListItem>Python</ListItem>
              <ListItem>Firebase</ListItem>
              <ListItem>PostgreSQL</ListItem>
              <ListItem>MongoDB</ListItem>
              <ListItem>JWT</ListItem>
              <ListItem>OAuth</ListItem>
              <ListItem>Firebase Auth</ListItem>
            </List>
          </SectionContent>
        </Section>

        {/* Cloud, DevOps & Support Section */}
        <Section>
          <SectionHeader>Cloud, DevOps & Support</SectionHeader>
          <SectionImage src="images/IT.png" alt="Cloud & DevOps" />
          <SectionContent>
            <p>
              I have experience managing cloud infrastructure, automating deployments, and optimizing system performance.
            </p>
            <ListHeader>Cloud & DevOps Tools</ListHeader>
            <List>
              <ListItem>Microsoft Azure</ListItem>
              <ListItem>AWS</ListItem>
              <ListItem>Docker</ListItem>
              <ListItem>Kubernetes</ListItem>
              <ListItem>CI/CD (GitHub Actions, Jenkins)</ListItem>
              <ListItem>SQL Server</ListItem>
              <ListItem>PostgreSQL</ListItem>
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

`;
const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  justify-items: center;
  margin-top: 2em;

    @media (min-width: 1000px) {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

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
    width:100%;
    flex-direction: column;
    gap: 1em;
    background-color: #f4f4f4;
    color: #000;
    padding: 2em 1em;
    border-radius: 2px;
    text-align: left;
    min-width:250px;
    max-width:96vw;
    margin:0 auto;


`;

const SectionHeader = styled.h3`
  font-size: 1.2rem;
  color: #343434;
  font-family: 'Roboto', sans-serif;
  min-height:60px;
`;

const SectionImage = styled.img`
  max-width: 100%;
  margin: 0 auto 1em;
  height:100%;
`;

const SectionContent = styled.div`
  text-align: left;
   display: grid;
    width:min-content;
    grid-template-rows:150px 40px 150px;
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