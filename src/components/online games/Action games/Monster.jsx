import React from 'react';
import styled from 'styled-components';

const Monster= () => {
  return (
    <GameWrapper>
   <iframe src="https://www.crazygames.com/embed/monster-life"
    className='gametic'
    
      allow="gamepad *;">
 </iframe>
    </GameWrapper>
  );
};

export default Monster;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;