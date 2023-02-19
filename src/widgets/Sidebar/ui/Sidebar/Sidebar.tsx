import { memo, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { SidebarItemList } from "../../model/items";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

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
                               
        {SidebarItemList.map((item)=>(
          <SidebarItem
            key={item.path}
            item={item}
            collapsed={collapsed}
          />
        ))
        }
              
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </div>
  );
});
