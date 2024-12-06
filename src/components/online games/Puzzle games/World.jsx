import React from 'react';
import styled from 'styled-components';

const World= () => {
  return (
    <GameWrapper>
<iframe src="https://www.crazygames.com/embed/world-geography-flags-and-capitals"
    className='gametic'
    
      allow="gamepad *;">
 </iframe>
    </GameWrapper>
  );
};

export default World;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;