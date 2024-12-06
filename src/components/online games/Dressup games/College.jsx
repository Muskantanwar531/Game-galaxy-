import React from 'react';
import styled from 'styled-components';

const College= () => {
  return (
    <GameWrapper>
<iframe src="https://www.crazygames.com/embed/college-girls-team-makeover"
    className='gametic'
    
      allow="gamepad *;">
 </iframe>
    </GameWrapper>
  );
};

export default College;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;