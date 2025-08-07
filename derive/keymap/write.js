import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

import { fileURLToPath } from "url";
import { dirname } from "path";
import JSON5 from "json5";

const currentDir = dirname(fileURLToPath(import.meta.url));
const keymapPath = join(currentDir, "keymap.json");
const linuxPath = join(currentDir, "linux.json");

/** * @type any[] */
const keymap = JSON5.parse(readFileSync(keymapPath, "utf8"));
/** * @type any[] */
const linux = JSON5.parse(readFileSync(linuxPath, "utf8"));

const result = linux.concat(keymap);

const outputPath = join(currentDir, "../../keymap.json.test");
writeFileSync(outputPath, JSON.stringify(result, null, 2));
