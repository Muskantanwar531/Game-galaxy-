import React from 'react';
import styled from 'styled-components';

const Festival= () => {
  return (
    <GameWrapper>
 <iframe src="https://www.crazygames.com/embed/festival-vibes-makeup" 
    className='gametic'
    
      allow="gamepad *;">
 </iframe>
    </GameWrapper>
  );
};

export default Festival;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;