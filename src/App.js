import BarChart from './components/BarChart'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <div className="refer">
          REFERENCE DATE  
      </div> */}
         <canvas className="myChart" width="400" height="400"></canvas>
         
        <div className="chart">
        <BarChart/>
      </div>
    </div>
  );
}

export default App;
