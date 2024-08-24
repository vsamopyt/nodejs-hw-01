import fs from "node:fs/promises";
export const writeContacts = async(path, data, optOne, optTwo) => {
   await  fs.writeFile(path,data);
};
