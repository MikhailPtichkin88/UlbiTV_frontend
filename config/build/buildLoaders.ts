import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import {
  BuildOptions
} from "./types/config";

export function buildLoaders({
  isDev
}: BuildOptions): webpack.RuleSetRule[] {
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('module.scss')),
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
          },
        }
      },
      "sass-loader",
    ],
  };
  //Если не используем typescript, то нужно устанавливать babel для транспиляции tsx
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [typescriptLoader, cssLoader];
}