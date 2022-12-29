import { useState } from "react";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import cls from "./Sidebar.module.scss";
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import MainIcon from 'shared/assets/icons/main-20-20.svg'
import { useTranslation } from "react-i18next";


interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const {t} = useTranslation()

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button theme={ButtonTheme.BACKGROUND_INVERTED}
        className={cls.collapseBtn}
        data-testid="sidebar-toggle"
        size={ButtonSize.L}
        square
        onClick={onToggle}>
        {collapsed ? ">" : "<"}
      </Button>
      <div className={cls.items}>
                               
        <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main} className={cls.item}>   
          <MainIcon className={cls.icon} />
          <span className={cls.link}>  {t("Главная страница")} </span>
        </AppLink>
                               
        <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about} className={cls.item}>
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>    {t("О сайте")} </span>                   
        </AppLink>
              
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </div>
  );
};
