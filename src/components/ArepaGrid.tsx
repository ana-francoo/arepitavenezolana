import ArepaCard from "./ArepaCard";
import './ArepaGrid.css'

// want to set up a grid component of sub components to mantain the fuctionality of individual components

function ArepaGrid ({
  images,
  setActiveArepa
}: {
  images: string[];
  setActiveArepa: (name: string) => void;
}){ //array will be specified in home.tsx
return (
  <div className='grid-container'>
    {images.map((name, index) => (<ArepaCard 
    key={index} 
    name={name}
    onClick={() => setActiveArepa(name)}
     />))}
  </div>
);
}

export default ArepaGrid


// import ArepaCard from "./ArepaCard";
// import './ArepaGrid.css'

// // want to set up a grid component of sub components to mantain the fuctionality of individual components

// function ArepaGrid ({images}: { images: string[]}){ //array will be specified in home.tsx
// return (
//   <div className='grid-container'>
//     {images.map((name, index) => (<ArepaCard 
//     key={index} 
//     name={name} />))}
//   </div>
// );
// }

// export default ArepaGrid