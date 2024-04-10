import "./App.css";
import { Route, Routes ,BrowserRouter} from "react-router-dom";

import Grid from "./component/grid";
// import Listtab from "./component/Listtab/Listtab";
import Apps from "./component/Apps/Apps";
import AddUrlForm from "./component/AddNewAppForm/AddUrlForm";
import Presentations from "./component/Presentations/Presentations";
function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={ <Apps/>} />
    <Route path="/grid" element={ <Grid/>} />
    <Route path="/addurl" element={ <AddUrlForm/>} />
    <Route path="/presentation" element={ <Presentations/>} />


    </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;
