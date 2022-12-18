import { BugButton } from "app/providers/ErrorBoundary";
import { Counter } from "entities/Counter";
import { useTranslation } from "react-i18next";

const MainPage = () => {
    const { t } = useTranslation("main");
    return (
        <>
            <Counter/>
            <BugButton />
            <div>{t("Главная страница")}</div>
        </>
    );
};
export default MainPage;
