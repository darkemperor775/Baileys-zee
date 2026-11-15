import makeWASocket from './Socket/index.js';
import chalk from "chalk";
console.log(chalk.hex("#00c2ff")(`
   __________  ____     ____  ______   _       _____    ____ 
  / ____/ __ \/ __ \   / __ \/ ____/  | |     / /   |  / __ \
 / / __/ / / / / / /  / / / / /_      | | /| / / /| | / /_/ /
/ /_/ / /_/ / /_/ /  / /_/ / __/      | |/ |/ / ___ |/ _, _/ 
\____/\____/_____/   \____/_/         |__/|__/_/  |_/_/ |_|  
                                                             
`));
console.log(chalk.hex("#00c2ff")("PouCode — a Baileys-based WhatsApp Web library\n"));
console.log(chalk.gray("Stay updated with the latest PouCode & Baileys news:"));
console.log(chalk.cyan("https://t.me/pouchinfo\n"));
export * from '../WAProto/index.js';
export * from './Utils/index.js';
export * from './Types/index.js';
export * from './Defaults/index.js';
export * from './WABinary/index.js';
export * from './WAM/index.js';
export * from './WAUSync/index.js';
export * from './Store/index.js';
export { makeWASocket };
export default makeWASocket;
//# sourceMappingURL=index.js.map
