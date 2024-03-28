import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import KodeProvider from "./context/BelanjaContext";
import CariKodeSSH from "./pages/CariKodeSSH";
import CariKodeSBU from "./pages/CariKodeSBU";
import CariKodeHSPK from "./pages/CariKodeHSPK";
import CariKodeASB from "./pages/CariKodeASB";
function App() {
  return (
    <KodeProvider>
      <Navbar>
        <Routes>
          <Route path="/" element={<CariKodeSSH />} />
          <Route path="/SBU" element={<CariKodeSBU />} />
          <Route path="/HSPK" element={<CariKodeHSPK />} />
          <Route path="/ASB" element={<CariKodeASB />} />
        </Routes>
      </Navbar>
    </KodeProvider>
  );
}

export default App;
