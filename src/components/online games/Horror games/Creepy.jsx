import React from 'react';
import styled from 'styled-components';

const Creepy= () => {
  return (
    <GameWrapper>
<iframe src="https://www.crazygames.com/embed/creepy-granny-scream-scary-freddy" 
    className='gametic'
    
      allow="gamepad *;">
 </iframe>
    </GameWrapper>
  );
};

export default Creepy;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;