import React from 'react';
import styled from 'styled-components';

const Doors= () => {
  return (
    <GameWrapper>
<iframe src="https://www.crazygames.com/embed/doors-paradox" 
    className='gametic'
    
      allow="gamepad *;">
 </iframe>
    </GameWrapper>
  );
};

export default Doors;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;