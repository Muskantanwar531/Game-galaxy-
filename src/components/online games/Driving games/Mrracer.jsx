import React from 'react';
import styled from 'styled-components';

const Mrracer = () => {
    return (
        <GameWrapper>
            <iframe src="https://www.crazygames.com/embed/mr-racer---car-racing"
                className='gametic'

                allow="gamepad *;">
            </iframe>
        </GameWrapper>
    );
};

export default Mrracer;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;