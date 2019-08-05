import path from 'path'
import fileSystem from 'fs'

const APP_DIRECTORY = fileSystem.realpathSync(process.cwd())

const resolvePath = relativePath => path.resolve(APP_DIRECTORY, relativePath)

const APP_PATHS = {
  appBuild: resolvePath('dist'),
  appClient: resolvePath('client'),
  appData: './server/data',
  appHtml: resolvePath('client/public/index.html'),
  appServer: resolvePath('server'),
  appStatic: resolvePath('dist/static')
}

export default APP_PATHS
