import React from 'react';
import styled from 'styled-components';

const Magictower= () => {
  return (
    <GameWrapper>
    <iframe src="https://www.crazygames.com/embed/magic-towers-solitaire"
    className='gametic'
    
      allow="gamepad *;">
 </iframe>
    </GameWrapper>
  );
};

export default Magictower;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;