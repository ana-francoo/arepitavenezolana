import './Home.css';
import Napkin from '../components/Napkin';
import manoDer from '../assets/mano_der.png'
import manoIzq from '../assets/mano_izquierda.png'
import { useState } from 'react';
import TransitionScreen from '../components/TransitionScreen';



function Home() {
  const [activeArepa, setActiveArepa] = useState<string | null>(null);

  return (
    <div className="home-container">
      <div className="home-banner"></div>
      <img src={manoIzq} className="fixed-hands left" />
      <img src={manoDer} className="fixed-hands right" />
      <Napkin setActiveArepa={setActiveArepa} />
      {activeArepa && <TransitionScreen arepa={activeArepa} onFinish={() => setActiveArepa(null)} />}
    </div>
  );
}

export default Home;





// import './Home.css';
// import Napkin from '../components/Napkin'
// import manoDer from '../assets/mano_der.png'
// import manoIzq from '../assets/mano_izquierda.png'

// function Home() {
//     return (
//         <div className="home-container">
//             {/* <div className="home-banner"></div> */}
//             <img src={manoIzq} className="fixed-hands left" />
//             <img src={manoDer} className="fixed-hands right" />
//             <Napkin />
//         </div>
// );
// }

// export default Home;