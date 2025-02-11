import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1}></TimerChallenge>
        <TimerChallenge title="Not easy" targetTime={5}></TimerChallenge>
        <TimerChallenge title="Getting tough" targetTime={10}></TimerChallenge>
        <TimerChallenge title="Pros only" targetTime={15}></TimerChallenge>
      </div>
    </>
  );
}

export default App;
