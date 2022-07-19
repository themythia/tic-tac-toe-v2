import Buttons from './components/Buttons';
import Container from './components/Container';
import GameWrapper from './contexts/GameContext';

const App = () => {
  return (
    <GameWrapper>
      <Container>
        <Buttons />
      </Container>
    </GameWrapper>
  );
};

export default App;
