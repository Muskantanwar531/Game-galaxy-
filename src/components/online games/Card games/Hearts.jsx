import React from 'react';
import styled from 'styled-components';

const Hearts= () => {
  return (
    <GameWrapper>
  <iframe src="https://www.crazygames.com/embed/solitr-com"
    className='gametic'
    
      allow="gamepad *;">
 </iframe>
    </GameWrapper>
  );
};

export default Hearts;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;