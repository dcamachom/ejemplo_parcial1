import './App.css';
import Spaces from './components/Spaces';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rooms from './components/Rooms';
import DetailSpace from './components/DetailSpace';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Spaces />} />
          <Route path="/spaces" element={<Spaces />} />
          <Route path="/spaces/:spaceId" element={<Rooms  />} />
          <Route path="/spaces/:spaceId/:deviceId" element={<DetailSpace  />} />
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
