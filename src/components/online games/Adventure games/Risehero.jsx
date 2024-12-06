import React from 'react';
import styled from 'styled-components';

const Risehero= () => {
  return (
    <GameWrapper>
  <iframe src="https://www.crazygames.com/embed/risehero"
    className='gametic'
    
      allow="gamepad *;">
 </iframe>
    </GameWrapper>
  );
};

export default Risehero;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;