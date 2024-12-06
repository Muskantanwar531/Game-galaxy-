import React from 'react';
import styled from 'styled-components';

const Fashion= () => {
  return (
    <GameWrapper>
<iframe src="https://www.crazygames.com/embed/fashion-famous"
    className='gametic'
    
      allow="gamepad *;">
 </iframe>
    </GameWrapper>
  );
};

export default Fashion;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;