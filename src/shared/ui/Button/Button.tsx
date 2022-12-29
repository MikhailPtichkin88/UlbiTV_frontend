import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";

import cls from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
  OUTLINE = "outline",
  CLEAR_INVERTED="clearInverted",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted"
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { className, children, theme, square, size = ButtonSize.M, ...otherProps } = props;

  const mods = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: true,
  }

  return (
    <button
      className={classNames(cls.button, mods, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
