import React from 'react';
import styled from 'styled-components';

const Rooms= () => {
  return (
    <GameWrapper>
<iframe src="https://www.crazygames.com/embed/rooms-home-escape"
    className='gametic'
    
      allow="gamepad *;">
 </iframe>
    </GameWrapper>
  );
};

export default Rooms;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;