import React from 'react';
import styled from 'styled-components';

const Lunar= () => {
  return (
    <GameWrapper>
    <iframe src="https://www.crazygames.com/embed/lunar-knight"
    className='gametic'
    
      allow="gamepad *;">
 </iframe>
    </GameWrapper>
  );
};

export default Lunar;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;