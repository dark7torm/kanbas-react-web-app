import Labs from "./labs";
import HelloWorld from "./labs/a3/HelloWorld";
import React from "react";
import Kanbas from "./Kanbas";
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
function App() {
   return (
    <HashRouter>
      <div>
      <Routes>
          <Route path="/"         element={<Navigate to="/Labs"/>}/>
          <Route path="/HelloWorld"    element={<HelloWorld/>}/>
          <Route path="/labs/*"   element={<Labs/>}/>
          <Route path="/Kanbas/*" element={<Kanbas/>}/>
        </Routes>
      </div>
      </HashRouter>
   );
}
export default App;