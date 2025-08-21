import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import "./App.css";
import React from "react";
import LayoutMain from "./layouts/LayoutMain";
import Hero from "./pages/Hero";

const App = () => {
  const pageRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LayoutMain />}>
        <Route index element={<Hero />} />
      </Route>
    )
  );

  return <div>App</div>;
};

export default App;
