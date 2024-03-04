import { Routes } from "react-router-dom";
import KodeProvider from "./context/BelanjaContext";
import CariKodeBelanja from "./pages/CariKodeSSH";
import { Route } from "react-router-dom";
import CariKodeAsset from "./pages/CariKodeSBU";
import Navbar from "./components/Navbar";
function App() {
  return (
    <KodeProvider>
      <Navbar>
        <Routes>
          <Route path="/" element={<CariKodeBelanja />} />
          <Route path="/SBU" element={<CariKodeAsset />} />
          {/* <div className="h-24"></div> */}
        </Routes>
      </Navbar>
    </KodeProvider>
  );
}

export default App;
