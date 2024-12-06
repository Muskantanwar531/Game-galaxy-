import React from 'react';
import styled from 'styled-components';

const Gradma= () => {
  return (
    <GameWrapper>
 <iframe src="https://www.crazygames.com/embed/grandma-recipe-ramen" 
    className='gametic'
    
      allow="gamepad *;">
 </iframe>
    </GameWrapper>
  );
};

export default Gradma;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;