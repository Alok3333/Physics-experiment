import "./App.css";
import DragDrop from "./pages/DragDrop";
import FingerPrintPatterns from "./pages/FingerPrintPatterns";
import OpticalFibre from "./pages/OpticalFibre";
import Simulation from "./pages/Simulation";
import StefansLawVerification from "./pages/StefansLaw";
import VideoPage31 from "./pages/Videopage31";

function App() {
  return (
    <div className="App">
      {/* <StefansLawVerification/> */}
      {/* <VideoPage31 /> */}
      {/* <DragDrop/> */}
      {/* <OpticalFibre/> */}
      <FingerPrintPatterns />
      {/* <Simulation /> */}
    </div>
  );
}

export default App;
