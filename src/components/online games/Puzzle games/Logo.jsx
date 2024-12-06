import React from 'react';
import styled from 'styled-components';

const Logo= () => {
  return (
    <GameWrapper>
<iframe src="https://www.crazygames.com/embed/logo-quiz-game-world-trivia"
    className='gametic'
    
      allow="gamepad *;">
 </iframe>
    </GameWrapper>
  );
};

export default Logo;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .gametic {
    width: 100%;
    height: 100%;
  }
`;