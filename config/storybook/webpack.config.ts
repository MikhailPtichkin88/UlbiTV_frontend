import path from "path";
import webpack, { RuleSetRule } from "webpack";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { BuildPaths } from "../build/types/config";

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    entry: "",
    build: "",
    html: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };
  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push("ts", "tsx");

  //@ts-ignore
  config.module.rules = config.module.rules.map((rule:RuleSetRule)=>{
    if(/svg/.test(rule.test as string)){
      return {...rule, exclude: /\.svg$/}
    }
    return rule
  })

  config.module?.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  })

  config.module?.rules?.push(buildCssLoader(true));
  return config;
};
