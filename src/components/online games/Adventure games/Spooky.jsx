import React from 'react';
import styled from 'styled-components';

const Spooky= () => {
  return (
    <GameWrapper>
    <iframe src="https://www.crazygames.com/embed/spooky-island"
    className='gametic'
    
      allow="gamepad *;">
 </iframe>
    </GameWrapper>
  );
};

export default Spooky;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;