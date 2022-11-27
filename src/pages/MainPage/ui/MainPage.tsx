import { BugButton } from "app/providers/ErrorBoundary";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation("main");
  return (
    <>
      <BugButton />
      <div>{t("Главная страница")}</div>
    </>
  );
};
export default MainPage;
