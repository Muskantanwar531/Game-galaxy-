import React from 'react';
import styled from 'styled-components';

const Think= () => {
  return (
    <GameWrapper>
<iframe src="https://www.crazygames.com/embed/think-to-escape"
    className='gametic'
    
      allow="gamepad *;">
 </iframe>
    </GameWrapper>
  );
};

export default Think;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;