import React from 'react';
import styled from 'styled-components';

const Superspin= () => {
  return (
    <GameWrapper>
   <iframe src="https://www.crazygames.com/embed/super-spin"
    className='gametic'
    
      allow="gamepad *;">
 </iframe>
    </GameWrapper>
  );
};

export default Superspin;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;