import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const SITE_META_FILE = path.join(__dirname, "../gen/site-meta.json");
export const PATH_DEST = path.join(__dirname, "../../../public");
