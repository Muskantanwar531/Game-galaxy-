import React from 'react';
import styled from 'styled-components';

const Farm= () => {
  return (
    <GameWrapper>
<iframe src="https://www.crazygames.com/embed/farm-merge-valley"
    className='gametic'
    
      allow="gamepad *;">
 </iframe>
    </GameWrapper>
  );
};

export default Farm;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;