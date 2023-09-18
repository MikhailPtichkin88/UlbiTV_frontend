import webpack from 'webpack'
import { buildCssLoader } from './loaders/buildCssLoader'
import { BuildOptions } from './types/config'
import { buildBabelLoader } from './loaders/buildBabelLoader'

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }

  const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false })
  const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true })

  const cssLoader = buildCssLoader(isDev)
  //Если не используем typescript, то нужно устанавливать babel для транспиляции tsx
  // const typescriptLoader = {
  //   test: /\.tsx?$/,
  //   use: 'ts-loader',
  //   exclude: /node_modules/,
  // }

  return [
    fileLoader,
    svgLoader,
    // babelLoader, typescriptLoader,
    codeBabelLoader,
    tsxCodeBabelLoader,
    cssLoader,
  ]
}
