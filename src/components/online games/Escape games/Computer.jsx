import React from 'react';
import styled from 'styled-components';

const Computer= () => {
  return (
    <GameWrapper>
<iframe src="https://www.crazygames.com/embed/computer-office-escape"
    className='gametic'
    
      allow="gamepad *;">
 </iframe>
    </GameWrapper>
  );
};

export default Computer;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;