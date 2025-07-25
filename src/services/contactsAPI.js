import axios from 'axios';

const BASE_URL = 'https://6883a5c121fa24876a9ec615.mockapi.io/api/v1';
const CONTACTS_ENDPOINT = `${BASE_URL}/contacts`;

export const fetchContacts = () => axios.get(CONTACTS_ENDPOINT);
export const addContact = (contact) => axios.post(CONTACTS_ENDPOINT, contact);
export const deleteContact = (id) => axios.delete(`${CONTACTS_ENDPOINT}/${id}`);