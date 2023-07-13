
import path from 'path'
import util from 'util'
import assert from 'assert'
const argv : string[]=process.argv
const envAsArgv : string = argv[2]
const envAsProcess : string = process.env.NODE_ENV as string
const env : string = envAsArgv || envAsProcess
let settings : any;
import userSettings  from '../config/settings'

const defaultSettings = {
    backendPort:5001,
    corsOptions: {
        origin: ["http://localhost:3000","http://localhost:3001"],
        credentials: true,
        optionSuccessStatus: 200
    }    }

    assert(typeof (env) === 'string', 'Environment must be a string');

  

    assert(userSettings !== undefined, util.format('File "%s"/settings.ts does not exists.',path.resolve(__dirname,"..")));

    settings ={ ...defaultSettings, ...userSettings};

export default settings;
