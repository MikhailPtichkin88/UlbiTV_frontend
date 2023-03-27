import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Text.module.scss";

export enum TextTheme {
  PRIMARY= "primary",
  ERROR="error"
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center'
}
interface TextProps {
  className?: string;
  title?: string
  text?:string
  theme?: TextTheme
  align?: TextAlign
}

export const Text = memo(({ className,
  title,
  text,
  theme = TextTheme.PRIMARY,
  align = TextAlign.LEFT}: TextProps) => {
  return (
    <div className={classNames(cls.text, {[cls[theme]]: true}, [className, cls[align]])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
