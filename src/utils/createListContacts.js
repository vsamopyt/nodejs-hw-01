import { createFakeContact } from "./createFakeContact.js";

export const createListContacts =(number) => {
  return new Array(number).fill(0).map(createFakeContact);
};
