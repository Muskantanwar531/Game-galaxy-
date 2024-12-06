import React from 'react';
import styled from 'styled-components';

const Nextdoor= () => {
  return (
    <GameWrapper>
<iframe src="https://www.crazygames.com/embed/nextdoor"
    className='gametic'
    
      allow="gamepad *;">
 </iframe>
    </GameWrapper>
  );
};

export default Nextdoor;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;