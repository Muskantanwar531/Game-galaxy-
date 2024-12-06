import React from 'react';
import styled from 'styled-components';

const Drift = () => {
    return (
        <GameWrapper>
           <iframe src="https://www.crazygames.com/embed/drift-escape"
                className='gametic'

                allow="gamepad *;">
            </iframe>
        </GameWrapper>
    );
};

export default Drift;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;