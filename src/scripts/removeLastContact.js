import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { encoding } from '../constants/encoding.js';

const removeLastContact = async () => {
  const perviousContacts = JSON.parse(await readContacts(PATH_DB, encoding));
  perviousContacts.pop();
  await writeContacts(PATH_DB, JSON.stringify(perviousContacts, null, 2));

};

removeLastContact();
