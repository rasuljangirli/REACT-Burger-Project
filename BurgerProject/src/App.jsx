import React, { Suspense, lazy, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Loading from "./Components/Loading";
const LazyAbout = lazy(() => import("./Pages/About"));
const LazyMenu = lazy(() => import("./Pages/Menu"));
const LazyContactUs = lazy(() => import("./Pages/ContactUs"));
const LazyNotFound = lazy(() => import("./Components/NotFound"));

function App() {
  return (
    <div>
      {/* <Loading /> */}
      <Navigation />
      {/* Routes start */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/about"
          element={
            <Suspense fallback={<Loading />}>
              <LazyAbout />
            </Suspense>
          }
        ></Route>
        <Route
          path="/menu"
          element={
            <Suspense fallback={<Loading />}>
              <LazyMenu />
            </Suspense>
          }
        ></Route>
        <Route
          path="/contactus"
          element={
            <Suspense fallback={<Loading />}>
              <LazyContactUs />
            </Suspense>
          }
        ></Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<Loading />}>
              <LazyNotFound />
            </Suspense>
          }
        ></Route>
      </Routes>
      {/*  Routes end */}
      <Footer />
    </div>
  );
}

export default App;
