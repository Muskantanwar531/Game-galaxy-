import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutWrapper>
      <ContentWrapper>
        <Heading>About <span>Us</span></Heading>
        <Description>
        We are a team of passionate gamers who are dedicated to creating the best possible gaming experiences for our players. We believe that games should be fun, challenging, and engaging, and we strive to create games that will keep you coming back for more.
     <Description>
      We have a team of experienced and talented developers who are passionate about creating games. We use the latest technologies and development techniques to create games that are visually stunning, technically impressive, and fun to play.</Description> 
    <Description>
   We are also committed to providing our players with the best possible support. We offer a variety of support options, including email, phone, and social media. We are always happy to help our players with any questions or problems they may have.
    </Description>


Our mission is to create the best possible gaming experiences for our players. We believe that games should be fun, challenging, and engaging, and we strive to create games that will keep you coming back for more.
<Description>
Our vision is to be the leading game developer in the world. We want to create games that are enjoyed by millions of people around the world.
</Description>
We are passionate about games and we are dedicated to creating the best possible gaming experiences for our players.
 We are always looking for new and innovative ways to create games that are fun, challenging, and engaging.
 <Description>We are committed to creating high-quality games that are visually stunning, technically impressive, and fun to play.
Customer Service: We are committed to providing our players with the best possible support. We are always happy to help our players with any questions or problems they may have.
</Description> 
We hope you enjoy our games!
        </Description>
         
      </ContentWrapper>
    </AboutWrapper>
  );
}

export default About;

const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: var(--clr-violet-dark-hover);
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  padding: 40px;
  text-align: center;
  background-color: var(--clr-violet-light);
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  animation: fadein 1s ease-in-out;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Heading = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
  color:#fff;
  span{
      color:var(--clr-pink-normal);
  }
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  font-family:var --font-family-poppins);
  font-weight:0px;
  margin-bottom: 20px;
  color:#fff;
`;
