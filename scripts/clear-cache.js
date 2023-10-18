/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')

const pathToCache = path.resolve(__dirname, '..', 'node_modules', '.cache')

fs.rm(pathToCache, { recursive: true, force: true }, (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('Cache folder removed successfully')
})
