/* eslint-disable i18next/no-literal-string */
import { useTheme } from "app/providers/ThemeProvider";
import { userActions } from "entities/User";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { AppRouter } from "./providers/router";


export const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(userActions.initAuthData())
  },[dispatch])
  
  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
