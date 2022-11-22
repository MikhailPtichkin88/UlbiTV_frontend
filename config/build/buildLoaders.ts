import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import {
    BuildOptions
} from "./types/config";

export function buildLoaders({
    isDev
}: BuildOptions): webpack.RuleSetRule[] {

    const fileLoader ={
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    }

    const svgLoader={
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    }

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
                "plugins":[
                    [
                        "i18next-extract",
                        {
                            locales: ["ru", "en"],
                            keyAsDefaultValue:true
                        }],
                ]
            }
        }
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes("module.scss")),
                        localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:8]"
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

    return [fileLoader, svgLoader,babelLoader, typescriptLoader, cssLoader];
}