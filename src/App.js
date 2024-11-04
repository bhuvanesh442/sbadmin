import logo from "./logo.svg";
import "./App.css";
import "./sb-admin-2.min.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Dashboard";
import Card from "./Card";
import Overview from "./Overview";
import Pie_Chart from "./Pie_Chart";
import Project_Card from "./Project _Card";
import Components from "./Components";
import Tables from "./Tables";
import Viwe from "./View";
import Createuser from "./Createuser";
import Info from "./Info";

import { HashRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <div id="wrapper">
          <Sidebar></Sidebar>
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Topbar></Topbar>
              <div className="container-fluid">
              {/* <Dashboard></Dashboard> */}
                <Routes>
                  <Route path="/" element={<Dashboard />}/>
                  <Route path="/Components" element={<Components/>}/>
                  <Route path="/Project_Card" element={<Project_Card/>}/>
                  <Route path="/Tables" element={<Tables/>}/>
                  <Route path="Tables/View/:id" element={<Viwe/>}/>
                  <Route path="/Tables/Createuser" element={<Createuser/>}/>
                  <Route path="/Tables/Info/:id" element={<Info/>}/>
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
