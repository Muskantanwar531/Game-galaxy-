import React from 'react';
import styled from 'styled-components';

const Hauntedschool= () => {
  return (
    <GameWrapper>
    <iframe src="https://www.crazygames.com/embed/haunted-school---horror-game" 
    className='gametic'
    
      allow="gamepad *;">
 </iframe>
    </GameWrapper>
  );
};

export default Hauntedschool;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;