import React from 'react';
import styled from 'styled-components';

const Rampcar= () => {
  return (
    <GameWrapper>
   <iframe src="https://www.crazygames.com/embed/ramp-car-jumping" 
    className='gametic'
    allow="gamepad *;">

    </iframe>
    </GameWrapper>
  );
};

export default Rampcar;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;