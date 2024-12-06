import React from 'react';
import styled from 'styled-components';

const Fairypuzzle= () => {
  return (
    <GameWrapper>
    <iframe src="https://www.crazygames.com/embed/fairy-puzzle" 
    className='gametic'
    
      allow="gamepad *;">
 </iframe>
    </GameWrapper>
  );
};

export default Fairypuzzle;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;