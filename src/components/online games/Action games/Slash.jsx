import React from 'react';
import styled from 'styled-components';

const Slash =() => {
  return (
    <GameWrapper>
   <iframe src="https://www.crazygames.com/embed/slash-royal" 
    className='gametic'
    
      allow="gamepad *;">
 </iframe>
    </GameWrapper>
  );
};

export default Slash;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;