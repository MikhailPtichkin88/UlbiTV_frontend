import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin'
import { BuildOptions } from '../types/config'
interface BuildBabelLoaderProps extends BuildOptions {
  isTsx?: boolean
}
export const buildBabelLoader = (options: BuildBabelLoaderProps) => {
  const { isDev, isTsx } = options
  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true,
            },
          ],
          [
            '@babel/plugin-transform-typescript',
            {
              isTsx,
            },
          ],
          ['@babel/plugin-transform-runtime'],
          isTsx && [babelRemovePropsPlugin, { props: ['data-testid'] }],
          isDev && require.resolve('react-refresh/babel'),
        ].filter(Boolean),
      },
    },
  }
}
