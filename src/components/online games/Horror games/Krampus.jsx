import React from 'react';
import styled from 'styled-components';

const Krampus= () => {
  return (
    <GameWrapper>
<iframe src="https://www.crazygames.com/embed/krampus"
    className='gametic'
    
      allow="gamepad *;">
 </iframe>
    </GameWrapper>
  );
};

export default Krampus;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;