import { Suspense } from "react";
import "./styles/index.scss";
import {  Route, Routes } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { Navbar } from "widgets/Navbar";
import { AppRouter } from "./providers/router";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ui/ThemeSwitcher";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter/>
    </div>
  );
};
