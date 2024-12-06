import React from 'react';
import styled from 'styled-components';

const Horrortale= () => {
  return (
    <GameWrapper>
<iframe src="https://www.crazygames.com/embed/horror-tale-kidnapper"
    className='gametic'
    
      allow="gamepad *;">
 </iframe>
    </GameWrapper>
  );
};

export default Horrortale;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;