import fs from "fs"
import path from "path"
import util from 'util'
import chalk from "chalk"
const env=process.env.NODE_ENV as string
const error = chalk.red;

const settingsDevPath=path.resolve(__dirname,"./settings-dev.ts")
const settingsKubedevPath=path.resolve(__dirname,"./settings-kubePROD.ts")

const settingsDevTemplatePath=path.resolve(__dirname,"./settings-dev-template.ts")
const settingsKubedevTemplatePath=path.resolve(__dirname,"./settings-kubePROD-template.ts")

function fileChecker(filePath : string, templateFilePath : string) {
    const fileErrorMessage="The config file %s created from template because that file could not be found. Please update that file and run it again."
    if (!fs.existsSync(filePath)) {
      return fs.copyFile(templateFilePath, filePath, (err) => {
            if (err) throw err;
            console.log(error(util.format(fileErrorMessage,filePath)))
          });
      }

      return require(filePath).default
}

const allSettings : any = {
      dev:fileChecker(settingsDevPath,settingsDevTemplatePath),
      kubedev:fileChecker(settingsKubedevPath,settingsKubedevTemplatePath),
    }
      
export default  allSettings[env]