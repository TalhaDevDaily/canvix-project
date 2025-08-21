import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
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

  return (
    <>
      <RouterProvider router={pageRoute} />
    </>
  );
};

export default App;
