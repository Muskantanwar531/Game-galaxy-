import React from 'react';
import styled from 'styled-components';

const Duo= () => {
  return (
    <GameWrapper>
  <iframe src="https://www.crazygames.com/embed/duo-with-friends" 
    className='gametic'
    
      allow="gamepad *;">
 </iframe>
    </GameWrapper>
  );
};

export default Duo;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;