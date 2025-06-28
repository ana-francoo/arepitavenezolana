//if want to have message component here, need to import it

//import ListGroup from "./components/ListGroup";
import Home from "./pages/Home";
import './App.css';
import './components/ArepaCard'

function App(){
  return (
  <div className="App"><Home /></div>);
}


// function App(){
//   return <div><ListGroup></ListGroup></div> //then, can use the Message componens like a 'regular' HTML componen
// } //always close the components!

export default App;
