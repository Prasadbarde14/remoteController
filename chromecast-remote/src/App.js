import "./App.css";
import { Route, Routes ,BrowserRouter} from "react-router-dom";

import Grid from "./component/grid";
// import Listtab from "./component/Listtab/Listtab";
import Apps from "./component/Apps/Apps";
function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={ <Apps/>} />
    <Route path="/grid" element={ <Grid/>} />

    </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;
