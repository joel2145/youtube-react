import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Top } from "./pages/Top"
import { Search } from "./pages/Search";
import { Watch } from "./pages/Watch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Top />}></Route>
        <Route path='/search' element={<Search />}></Route>
        <Route path='/watch' element={<Watch />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
