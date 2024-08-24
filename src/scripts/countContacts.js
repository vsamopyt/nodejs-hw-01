import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from '../utils/readContacts.js';
import { encoding } from '../constants/encoding.js';

const countContacts = async () => {
  const valueContacts = JSON.parse(await readContacts(PATH_DB, encoding));
  return valueContacts.length;
};

console.log(await countContacts());
