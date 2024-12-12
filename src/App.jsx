import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/_root/layouts/RootLayout";
import Home from "./components/_root/pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
