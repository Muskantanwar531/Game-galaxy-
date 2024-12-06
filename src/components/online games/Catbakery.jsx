import React from 'react';
import styled from 'styled-components';

const Catbakery= () => {
  return (
    <GameWrapper>
    <iframe src="https://www.crazygames.com/embed/cat-bakery" 
    className='gametic'
    
      allow="gamepad *;">
 </iframe>
    </GameWrapper>
  );
};

export default Catbakery;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;