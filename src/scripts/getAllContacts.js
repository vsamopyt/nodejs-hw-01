import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from '../utils/readContacts.js';
import { encoding } from '../constants/encoding.js';

const getAllContacts = async () => {
  return JSON.parse(await readContacts(PATH_DB, encoding));
};

console.log(await getAllContacts());
