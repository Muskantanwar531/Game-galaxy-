import React from 'react';
import styled from 'styled-components';

const Roomescape= () => {
  return (
    <GameWrapper>
    <iframe src="https://www.crazygames.com/embed/daily-room-escape" 
    className='gametic'
    
      allow="gamepad *;">
 </iframe>
    </GameWrapper>
  );
};

export default Roomescape;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;