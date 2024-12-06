import React from 'react';
import styled from 'styled-components';

const Words= () => {
  return (
    <GameWrapper>
<iframe src="https://www.crazygames.com/embed/words-of-wonders" 
    className='gametic'
    
      allow="gamepad *;">
 </iframe>
    </GameWrapper>
  );
};

export default Words;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;