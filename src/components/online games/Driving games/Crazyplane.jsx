import React from 'react';
import styled from 'styled-components';

const Crazyplane = () => {
    return (
        <GameWrapper>
           <iframe src="https://www.crazygames.com/embed/truck-simulator-russia"
                className='gametic'

                allow="gamepad *;">
            </iframe>
        </GameWrapper>
    );
};

export default Crazyplane;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;