import { Project } from 'ts-morph'
import path from 'path'
const project = new Project({})

project.addSourceFilesAtPaths('src/**/*.ts')
project.addSourceFilesAtPaths('src/**/*.tsx')

const files = project.getSourceFiles()

const directoryPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui')
const sharedUiDirectory = project.getDirectory(directoryPath)
const componentDirs = sharedUiDirectory?.getDirectories()

function isAbsolute(value: string) {
  const layers = ['app', 'shared', 'entities', 'features', 'widgets', 'pages']
  return layers.some((layer) => value.startsWith(layer))
}

componentDirs?.forEach((directory) => {
  const indexFilePath = `${directory.getPath()}/index.ts`
  const indexFile = directory.getSourceFile(indexFilePath)
  if (!indexFile) {
    const code = `
    export * from './${directory.getBaseName()}'`
    const file = directory.createSourceFile(indexFilePath, code, {
      overwrite: true,
    })
    file.save()
  }
})

files.forEach((sourceFile) => {
  const importDeclarations = sourceFile.getImportDeclarations()
  importDeclarations.forEach((importDeclaration) => {
    const value = importDeclaration.getModuleSpecifierValue()
    const valueWithoutAlias = value.replace('@/', '')
    const segments = valueWithoutAlias.split('/')
    const isSharedLayer = segments?.[0] === 'shared'
    const isUiSlice = segments?.[1] === 'ui'

    if (isAbsolute(valueWithoutAlias) && isSharedLayer && isUiSlice) {
      const result = value.split('/').slice(0, 4).join('/')
      importDeclaration.setModuleSpecifier(result)
    }
  })
})
project.save()
// npx ts-node scripts/refactoring/createPublicApiForSharedUi.ts
