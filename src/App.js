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
        <Route path="/react-planets/mercury">
          <MainBody n="mercury" />
          <Container planet="mercury"></Container>
        </Route>

        <Route path="/react-planets/venus">
          <MainBody n="venus" />
          <Container planet="venus"></Container>
        </Route>

        <Route path="/react-planets/earth">
          <MainBody n="earth" />
          <Container planet="earth"></Container>
        </Route>

        <Route path="/react-planets/mars">
          <MainBody n="mars" />
          <Container planet="mars"></Container>
        </Route>

        <Route path="/react-planets/jupiter">
          <MainBody n="jupiter" />
          <Container planet="jupiter"></Container>
        </Route>

        <Route path="/react-planets/saturn">
          <MainBody n="saturn" />
          <Container planet="saturn"></Container>
        </Route>

        <Route path="/react-planets/uranus">
          <MainBody n="uranus" />
          <Container planet="uranus"></Container>
        </Route>

        <Route path="/react-planets/neptune">
          <MainBody n="neptune" />
          <Container planet="neptune"></Container>
        </Route>

        <Route path="/react-planets/">
          <MainBody n="earth" />
          <Container planet="earth"></Container>
        </Route>
      </Switch>
    </PlanetsContextProvider>
  </BrowserRouter>
);

export default App;
