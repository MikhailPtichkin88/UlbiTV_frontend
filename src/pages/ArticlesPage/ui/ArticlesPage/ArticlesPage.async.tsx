import { lazy } from "react";

export const ArticlesPageAsync = lazy(
  () =>
    new Promise((res) => {
      //@ts-ignore
      setTimeout(() => res(import("./ArticlesPage")), 3000);
    })
);
