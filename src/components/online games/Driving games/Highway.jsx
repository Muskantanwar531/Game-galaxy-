import React from 'react';
import styled from 'styled-components';

const Highway = () => {
    return (
        <GameWrapper>
            <iframe src="https://www.crazygames.com/embed/highway-traffic-car-simulator"
                className='gametic'

                allow="gamepad *;">
            </iframe>
        </GameWrapper>
    );
};

export default Highway;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;