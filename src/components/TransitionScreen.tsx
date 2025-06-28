import { useEffect, useState } from 'react';
import './TransitionScreen.css';

interface TransitionScreenProps {
  arepa: string;
  onFinish: () => void;
}

function TransitionScreen({ arepa, onFinish }: TransitionScreenProps) {
  const [phase, setPhase] = useState<'columns' | 'rows'>('columns');

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase('rows'), 1000);  // show full "DOMINO" screen for 1s
    const timer2 = setTimeout(() => onFinish(), 2000);        // animation complete after 2s

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="transition-overlay">
      {phase === 'columns' ? (
        <div className="vertical-columns">
          <div className="col left"></div>
          <div className="col center"><span>{arepa.toUpperCase()}</span></div>
          <div className="col right"></div>
        </div>
      ) : (
        <div className="horizontal-rows">
          <div className="row top"></div>
          <div className="row middle"></div>
          <div className="row bottom"></div>
        </div>
      )}
    </div>
  );
}

export default TransitionScreen;
