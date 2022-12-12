/* eslint-disable i18next/no-literal-string */
import { useTheme } from "app/providers/ThemeProvider";
import { Suspense, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Modal } from "shared/ui/Modal/Modal";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { AppRouter } from "./providers/router";
import "./styles/index.scss";


export const App = () => {
    const { theme } = useTheme();
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <button onClick={()=>setIsOpen(true)}>toggle</button>
                <Modal isOpen={isOpen} onClose={()=>setIsOpen(false)}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium neque, eveniet,
                    aut perspiciatis saepe necessitatibus numquam quas ea fugit, distinctio 
                    zzzzzzzzziste incidunt? Dolorum repudiandae quam non dignissimos facilis ipsam tenetur.
                </Modal>
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
