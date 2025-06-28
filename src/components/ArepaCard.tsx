import { useState } from "react";
import './ArepaCard.css';

interface ArepaCardProps {
  name: string;
  onClick: () => void; // callback function passed from parent
}

function ArepaCard({ name, onClick }: ArepaCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const imageUrl = `/assets/${name}.png`;
  const audioUrl = `/assets/audio/${name}.mp3`;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    // 1. Play click sound
    const audio = new Audio(audioUrl);
    audio.play().catch((err) => {
      console.error("Audio playback failed on click:", err);
    });

    // 2. Trigger animation via parent callback
    onClick(); // This will call setActiveArepa(name) from parent
  };

  return (
    <div className="image-wrapper">
      <img
        src={imageUrl}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={isHovered ? 'image image-hovered' : 'image'}
        alt={name}
      />
    </div>
  );
}

export default ArepaCard;





// import { useState } from "react";
// import './ArepaCard.css' 

// //event handler - function passed to JSX element to run whe user event occurs
// // function handleClick(){ /need audio url so setting arrow function inside of ArepaCard function
// // //to be defined
// // }


// function ArepaCard({ name }: { name: string}) { // want to set this to accept na input url image link
//     //can use const to set up logic up here to make things less messyyy
    
//     const [isHovered, setIsHovered] = useState(false); //need state hook because state inside function, and function do not have built-in memory between renderss. Theres no memory of previous runs.useState tells React to remmember count/value between renders
//     //const handleMouseEnter = () => setIsHovered(true); // second part updates state
//     const handleMouseLeave = () => setIsHovered(false); //arrow function
    

//     const [isClicked, setIsClicked] = useState(false); //key fact, useState variable trigger re-render, plain variables do not!!!!!


//     const imageUrl = `/assets/${name}.png`;
//     const audioUrl = `/assets/audio/${name}.mp3`;
    
    
//     const handleMouseEnter = () => {
//         setIsHovered(true);
//       };

//     const handleClick = () => {
//         setIsClicked(true);
//         const audio = new Audio(audioUrl);
//         audio.play().catch((err) => {
//           console.error("Audio playback failed:", err);
          
//         });

//         //here would also need to trigger the animation of the columns going in
//         //can use rendering w a specific class

//         //cant directly render here, so instead can update state and have that make it render


//       };
    
//     return (

//       <div className="image-wrapper">
//         <img
//         src = {imageUrl}
//         onClick = {handleClick}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         className={isHovered ? 'image image-hovered' : 'image'}
//         /> 
  
//         </div>
//     );

// }


// //KEY IDEA / LEARNING
// //✅ Parents pass data down via props.
// //✅ Children send events up via callback functions (aka handlers).


// export default ArepaCard;