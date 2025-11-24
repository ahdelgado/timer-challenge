import { useRef, useState } from 'react';
import ResultModal from './ResultModal';

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
const timerStarted = timeRemaining > 0 && timeRemaining < targetTime * 1000;

if (timeRemaining <= 0) {
  clearInterval(timer.current);
  dialog.current.open();
}

const handleReset = () => {
  setTimeRemaining(targetTime * 1000);
}

const handleStart = () => {
  timer.current = setInterval(() => {
    setTimeRemaining((prevTime) => prevTime - 10);
  }, 10);
}

const handleStop = () => {
  dialog.current.open();
  clearInterval(timer.current);
}

  return (
    <>
      <ResultModal remainingTime={timeRemaining} targetTime={targetTime} ref={dialog} onReset={handleReset} />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime === 1 ? '' : 's'}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? 'Stop Challenge' : 'Start Challenge'}
          </button>
        </p>
        <p className={timerStarted ? 'active' : undefined}>{timerStarted ? 'Time is running...' : 'Timer inactive'}</p>
      </section>
    </>
  );
}