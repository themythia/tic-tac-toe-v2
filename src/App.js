import Button from './components/Button';
import Container from './components/Container';
import GameWrapper from './contexts/GameContext';

const App = () => {
  return (
    <GameWrapper>
      <div className='w-screen min-h-screen h-full flex justify-center items-center'>
        <Container>
          {[...Array(220)].map((_, index) => (
            <Button
              key={index}
              column={index % 11}
              row={Math.floor(index / 11) + 1}
            />
          ))}
        </Container>
      </div>
    </GameWrapper>
  );
};

export default App;
