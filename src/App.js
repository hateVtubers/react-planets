import React from "react";
import MainBody from "./page.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PlanetsContextProvider } from "./context/planetsContext";
import { Header } from "./components/Header";
import { Container } from "./components/Container";

const App = () => (
  <BrowserRouter>
    <PlanetsContextProvider>
      <Header></Header>

      <Switch>
        <Route path="/mercury">
          <MainBody n="mercury" />
          <Container planet="mercury"></Container>
        </Route>

        <Route path="/venus">
          <MainBody n="venus" />
          <Container planet="venus"></Container>
        </Route>

        <Route path="/earth">
          <MainBody n="earth" />
          <Container planet="earth"></Container>
        </Route>

        <Route path="/mars">
          <MainBody n="mars" />
          <Container planet="mars"></Container>
        </Route>

        <Route path="/jupiter">
          <MainBody n="jupiter" />
          <Container planet="jupiter"></Container>
        </Route>

        <Route path="/saturn">
          <MainBody n="saturn" />
          <Container planet="saturn"></Container>
        </Route>

        <Route path="/uranus">
          <MainBody n="uranus" />
          <Container planet="uranus"></Container>
        </Route>

        <Route path="/neptune">
          <MainBody n="neptune" />
          <Container planet="neptune"></Container>
        </Route>

        <Route path="/">
          <MainBody n="earth" />
          <Container planet="earth"></Container>
        </Route>
      </Switch>
    </PlanetsContextProvider>
  </BrowserRouter>
);

export default App;
