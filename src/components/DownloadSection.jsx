import React from 'react';
import styled from 'styled-components';

const DownloadSection = () => {
  return (
    <div>
      <DownloadButton href="/images/Resume.pdf" download="Helle_Fruergaard_Resume">
        Download Resume (pdf)
      </DownloadButton>
    </div>
  );
};

const DownloadButton = styled.a`
font-size:0.8em;
font-weight:600;
display: inline-block;
  background-color: #333;
  color: #fff !important;
  padding: 7px 15px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  overflow: hidden;
  border: solid 1px #333;
  border-radius: 20px;
  transition: background-color 0.4s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);


  &:hover {
    background-color: #555;
    color: #fff !important;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 100%;
    background-color: #555;
    color: white !important;
    transform: translateX(-50%);
    transition: width 0.4s ease;
    z-index: -1;
  }

  &:hover::after {
    width: calc(100% + 30px);
  }
`;

export default DownloadSection;
