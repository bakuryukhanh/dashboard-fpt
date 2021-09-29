import React from "react";
import "./styles/_index.scss";
import SideBar from "./components/SideBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopBar from "./components/TopBar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
        <div className="main">
          <TopBar />
          <div className="content">
            <Switch>
              <Route exact path="/incident">
                <Dashboard />
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
