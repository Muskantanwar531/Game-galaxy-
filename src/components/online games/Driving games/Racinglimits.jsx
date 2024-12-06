import React from 'react';
import styled from 'styled-components';

const Racinglimits = () => {
    return (
        <GameWrapper>
           <iframe src="https://www.crazygames.com/embed/racing-limits"
                className='gametic'

                allow="gamepad *;">
            </iframe>
        </GameWrapper>
    );
};

export default Racinglimits;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;