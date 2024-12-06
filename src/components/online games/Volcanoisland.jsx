import React from 'react';
import styled from 'styled-components';

const Volcanoisland= () => {
  return (
    <GameWrapper>
   <iframe src="https://www.crazygames.com/embed/volcano-island"
    className='gametic'
    allow="gamepad *;">

    </iframe>
    </GameWrapper>
  );
};

export default Volcanoisland;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;