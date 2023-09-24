import './App.css';
import travelInfo from "./travelInfo";
import Tours from './Components/Tours';
import { useState } from 'react';
function App() {
  const[data,setData] = useState(travelInfo);
  function removeTour(id) {
    const newTour = data.filter((tour)=>tour.id !== id);
    setData(newTour);
  }
  if(data.length === 0) {
    return (
      <>
      <h4>No Tours left</h4>
      <button onClick={() => setData(travelInfo)}>Refresh</button>
      </>
    );
  }
  return (
    <div className="App">
      <Tours tours={data} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
