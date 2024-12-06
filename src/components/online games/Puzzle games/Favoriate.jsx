import React from 'react';
import styled from 'styled-components';

const Favoriate= () => {
  return (
    <GameWrapper>
<iframe src="https://www.crazygames.com/embed/favorite-puzzles"
    className='gametic'
    
      allow="gamepad *;">
 </iframe>
    </GameWrapper>
  );
};

export default Favoriate;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;