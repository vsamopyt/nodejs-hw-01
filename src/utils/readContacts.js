import fs from 'node:fs/promises';

export const readContacts = async (path, encoding) => {
  return await fs.readFile(path, encoding);
};
