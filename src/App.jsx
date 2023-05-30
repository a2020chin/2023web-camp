import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import HeaderFooter from "./component/HeaderFooter";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Loading from "./component/Loading";

import { AnimeParameterContext } from "./component/Context";

function App() {
  const [showModal, setShowModal] = useState(true);
  const [showHeader, setShowHeader] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => setShowModal(false), 5000);
  }, [setShowModal]);
  return (
    <AnimeParameterContext.Provider
      value={{
        showHeader,
        setShowHeader,
      }}
    >
      <Routes location={location}>
        <Route path="/" element={showModal ? <Loading /> : <HeaderFooter />}>
          <Route index element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
        </Route>
      </Routes>
    </AnimeParameterContext.Provider>
  );
}

export default App;
