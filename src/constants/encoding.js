import { PATH_DB } from './contacts.js';
import DetectFileEncodingAndLanguage from 'detect-file-encoding-and-language';
export const {encoding} = await DetectFileEncodingAndLanguage(PATH_DB);
// export const fileData =
