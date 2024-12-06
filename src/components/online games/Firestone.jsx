import React from 'react';
import styled from 'styled-components';

const Firestone= () => {
  return (
    <GameWrapper>
   <iframe src="https://www.crazygames.com/embed/firestone-idle-rpg"
    className='gametic'
    allow="gamepad *;">

    </iframe>
    </GameWrapper>
  );
};

export default Firestone;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;