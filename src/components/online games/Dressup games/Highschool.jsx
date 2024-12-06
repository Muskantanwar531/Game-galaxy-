import React from 'react';
import styled from 'styled-components';

const Highschool= () => {
  return (
    <GameWrapper>
 <iframe src="https://www.crazygames.com/embed/highschool-mean-girls-3"
    className='gametic'
    
      allow="gamepad *;">
 </iframe>
    </GameWrapper>
  );
};

export default Highschool;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;