import React from 'react';
import styled from 'styled-components';

const Foono= () => {
  return (
    <GameWrapper>
   <iframe src="https://www.crazygames.com/embed/foono-online-multiplayer-card-game"
    className='gametic'
    
      allow="gamepad *;">
 </iframe>
    </GameWrapper>
  );
};

export default Foono;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;