import React from 'react';
import styled from 'styled-components';

const Battle =() => {
  return (
    <GameWrapper>
<iframe src="https://www.crazygames.com/embed/1v1battle-build-fight-simulator" 
    className='gametic'
    
      allow="gamepad *;">
 </iframe>
    </GameWrapper>
  );
};

export default Battle;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;