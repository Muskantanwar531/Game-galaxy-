import React from 'react';
import styled from 'styled-components';

const Emerland= () => {
  return (
    <GameWrapper>
   <iframe src="https://www.crazygames.com/embed/emerland-solitaire-card-game"
    className='gametic'
    
      allow="gamepad *;">
 </iframe>
    </GameWrapper>
  );
};

export default Emerland;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;