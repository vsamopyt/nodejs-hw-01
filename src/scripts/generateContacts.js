import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { encoding } from '../constants/encoding.js';
import { createListContacts } from '../utils/createListContacts.js';

const generateContacts = async (number) => {
  const perviousContacts = JSON.parse(await readContacts(PATH_DB, encoding));
  const newContacts = createListContacts(number);
  const mergedContacts = [...perviousContacts, ...newContacts];
  await writeContacts(PATH_DB, JSON.stringify(mergedContacts, null, 2));
};

generateContacts(2);
