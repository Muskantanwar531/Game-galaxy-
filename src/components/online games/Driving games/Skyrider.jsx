import React from 'react';
import styled from 'styled-components';

const Skyrider = () => {
    return (
        <GameWrapper>
           <iframe src="https://www.crazygames.com/embed/sky-riders-buk"
                className='gametic'

                allow="gamepad *;">
            </iframe>
        </GameWrapper>
    );
};

export default Skyrider;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;