import { BuildOptions } from "./types/config";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin, { pluginSymbol } from "mini-css-extract-plugin";
import webpack from "webpack";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
export function buildPlugins({
    isDev,
    paths,
}: BuildOptions): webpack.WebpackPluginInstance[] {

    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css",
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        }),
    ]
    if(isDev){
        plugins.push( new webpack.HotModuleReplacementPlugin())
        plugins.push( new ReactRefreshWebpackPlugin())
    }
    return plugins
}
