import React from 'react';
import styled from 'styled-components';

const TicTacToe = () => {
  return (
    <GameWrapper>
      <iframe
        src="https://www.crazygames.com/embed/tic-tac-toe"
        className='gametic'
        
        allow="gamepad *;"
      ></iframe>
    </GameWrapper>
  );
};

export default TicTacToe;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;