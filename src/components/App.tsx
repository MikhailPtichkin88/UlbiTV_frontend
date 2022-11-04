import { Counter } from "./Counter";
import { Suspense } from "react";
import "../index.scss";
import { Link, Route, Routes } from "react-router-dom";
import { MainPageAsync } from "../pages/MainPage/MainPage.async";
import { AboutPageAsync } from "../pages/AboutPage/AboutPage.async";

export const App = () => {
  return (
    <div className="app">
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>
      <Suspense fallback={<div>...Loading</div>}>
        <Routes>
          <Route path={"/"} element={<MainPageAsync />} />
          <Route path={"/about"} element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
      <Counter />
    </div>
  );
};
