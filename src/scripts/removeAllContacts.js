import { PATH_DB } from '../constants/contacts.js';

import { writeContacts } from '../utils/writeContacts.js';

const removeAllContacts = async () => {
  await writeContacts(PATH_DB, JSON.stringify([], null, 2));
};

removeAllContacts();
