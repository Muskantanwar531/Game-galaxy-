import React from 'react';
import styled from 'styled-components';

const Knight= () => {
  return (
    <GameWrapper>
    <iframe src="https://www.crazygames.com/embed/knight-hero-adventure-idle-rpg"
    className='gametic'
    
      allow="gamepad *;">
 </iframe>
    </GameWrapper>
  );
};

export default Knight;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;