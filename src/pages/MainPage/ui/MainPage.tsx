import { BugButton } from "app/providers/ErrorBoundary";
import { useState } from "react";


import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";

const MainPage = () => {
  const { t } = useTranslation("main");
  const [value, setValue] = useState('')
  return (
    <>
      <BugButton />
      <Input value={value} onChange={setValue} placeholder={"Введите текст"}/>
      <div>{t("Главная страница")}</div>
    </>
  );
};
export default MainPage;
