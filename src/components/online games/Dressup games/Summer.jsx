import React from 'react';
import styled from 'styled-components';

const Summer= () => {
  return (
    <GameWrapper>
<iframe src="https://www.crazygames.com/embed/summer-fashion-makeover"
    className='gametic'
    
      allow="gamepad *;">
 </iframe>
    </GameWrapper>
  );
};

export default Summer;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;